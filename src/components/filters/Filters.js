import {Component} from "react";
import './Filters.css';
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    MenuItem, TableSortLabel,
    TextField, Typography,
} from "@material-ui/core";
import {priorityLevels} from "../../common/constants/priority-levels";
import {statusTypeLabels, statusTypes} from "../../common/constants/status-types";
import classNames from 'classnames'

export default class FiltersComponent extends Component {
    state = {
        priorityLevel: [
            {
                alias: 'all',
                name: 'Любой'
            },
            ...priorityLevels
        ],
        statusTypes: {
            [statusTypes.ACTIVE]: true,
            [statusTypes.SUCCESS]: true,
            [statusTypes.FAILED]: true
        },
        priority: 'all',
        text: '',
        sorters: {
            byDate: 'asc',
            byPriority: 'asc',
            lastSorter: 'byDate'
        }
    }

    handleChangePriority = event => {
        const priority = event.target.value
        this.setState({priority})
        this.props.handleChange({...this.getFiltersData(), priority})
    }

    handleChangeStatus = event => {
        this.setState(prevState => {
            const name = event.target.name
            const value = event.target.checked
            const statusTypes = {
                ...prevState.statusTypes,
                [name]: value
            }

            this.props.handleChange({...this.getFiltersData(), statusTypes})

            return {statusTypes}
        })
    }

    handleChangeText = event => {
        const text = event.target.value
        this.setState({text})
        this.props.handleChange({...this.getFiltersData(), text})
    }

    handleChangeSortDate = () => {
        this.setState(prevState => {
            const sorters = {
                ...prevState.sorters,
                lastSorter: 'byDate',
                byDate: prevState.sorters.byDate === 'asc' ? 'desc' : 'asc'
            }

            this.props.handleChange({...this.getFiltersData(), sorters})

            return {sorters}
        })
    }

    handleChangeSortPriority = () => {
        this.setState(prevState => {
            const sorters = {
                ...prevState.sorters,
                lastSorter: 'byPriority',
                byPriority: prevState.sorters.byPriority === 'asc' ? 'desc' : 'asc'
            }

            this.props.handleChange({...this.getFiltersData(), sorters})

            return {sorters}
        })
    }

    getFiltersData() {
        const {statusTypes, priority, text, sorters} = this.state

        return {statusTypes, priority, text, sorters}
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid className="filter" item xs={6}>
                    <Typography className="filter-label">Фильтр по приоритету:</Typography>
                    <TextField
                        select
                        variant="outlined"
                        size="small"
                        className={`filter-control`}
                        defaultValue="all"
                        onChange={this.handleChangePriority}
                    >
                        {
                            this.state.priorityLevel.map(el =>
                                <MenuItem key={el.alias} value={el.alias}>{el.name}</MenuItem>
                            )
                        }
                    </TextField>
                </Grid>

                <Grid className="filter" item xs={6}>
                    <Typography className="filter-label">Фильтр по статусу:</Typography>
                    <FormGroup row={true} className="filter-checkboxes">
                        {
                            Object.entries(statusTypeLabels).map(([key, value]) =>
                                <FormControlLabel key={key}
                                                  control={
                                                      <Checkbox checked={this.state.statusTypes[key]}
                                                                onChange={this.handleChangeStatus} name={key}
                                                                color="primary"/>
                                                  }
                                                  label={value}
                                />
                            )
                        }
                    </FormGroup>
                </Grid>

                <Grid className="filter" item xs={6}>
                    <Typography className="filter-label">Сортировка по дате:</Typography>
                    <TableSortLabel name="byDate" active={true} className={classNames({'sort-card': true, 'sort-card__active': this.state.sorters.lastSorter === "byDate"})}
                                    direction={this.state.sorters.byDate} onClick={this.handleChangeSortDate}>
                        Дата создания
                    </TableSortLabel>
                </Grid>

                <Grid className="filter" item xs={6}>
                    <Typography className="filter-label">Сортировка по приоритету:</Typography>
                    <TableSortLabel name="byPriority" active={true} className={classNames({'sort-card': true, 'sort-card__active': this.state.sorters.lastSorter === "byPriority"})}
                                    direction={this.state.sorters.byPriority} onClick={this.handleChangeSortPriority}>
                        Приоритет
                    </TableSortLabel>
                </Grid>

                <Grid className="filter" item xs={12}>
                    <Typography className="filter-label">Поиск задачи по тексту:</Typography>
                    <TextField onChange={this.handleChangeText} variant="outlined" size="small" className="search"/>
                </Grid>
            </Grid>
        )
    }
}
