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

class FiltersComponent extends Component {
    state = {
        priorityLevel: [
            {
                alias: 'all',
                name: 'Любой'
            },
            {
                alias: 'low',
                name: 'Низкий'
            },
            {
                alias: 'medium',
                name: 'Средний'
            },
            {
                alias: 'high',
                name: 'Высокий'
            }
        ]
    }

    handleSort() {
        console.log('hello');
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
                        defaultValue="all"
                        className={`filter-control`}
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
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Активные"
                        />
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Отменённые"
                        />
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Завершенные"
                        />
                    </FormGroup>
                </Grid>

                <Grid className="filter" item xs={6}>
                    <Typography className="filter-label">Сортировка по дате:</Typography>
                    <TableSortLabel active={true} className="sort-card" onClick={this.handleSort}>
                        Дата создания
                    </TableSortLabel>
                </Grid>

                <Grid className="filter" item xs={6}>
                    <Typography className="filter-label">Сортировка по приоритету:</Typography>
                    <TableSortLabel active={true} className="sort-card" onClick={this.handleSort}>
                        Приоритет
                    </TableSortLabel>
                </Grid>

                <Grid className="filter" item xs={12}>
                    <Typography className="filter-label">Поиск задачи по тексту:</Typography>
                    <TextField variant="outlined" size="small" className="search"/>
                </Grid>
            </Grid>
        )
    }
}

export default FiltersComponent;
