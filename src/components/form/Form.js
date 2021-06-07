import {Button, Grid, MenuItem, TextField} from "@material-ui/core";
import './Form.css'
import {Component} from "react";
import {priorityLevels} from "../../common/constants/priority-levels";
import {statusTypes} from "../../common/constants/status-types";

export default class FormComponent extends Component {
    state = {
        priority: '',
        text: '',
        counter: 1
    }

    handleChange = event => {
        this.setState(prevState => {
            const name = event.target.name;
            const value = event.target.value;

            return {
                ...prevState,
                [name]: value
            }
        })
    }

    handleSubmit = event => {
        const task = {
            text: this.state.text,
            priority: this.state.priority,
            status: statusTypes.ACTIVE,
            date: new Date()
        }

        this.setState(prevState => ({
            priority: '',
            text: '',
            counter: ++prevState.counter
        }))

        event.preventDefault()

        this.props.handleSubmit(task)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <TextField
                            select
                            required
                            name="priority"
                            className="control"
                            label="Приоритет"
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.priority}
                        >
                            {
                                priorityLevels.map(this.renderPriorityItem)
                            }
                        </TextField>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name="text"
                            required
                            className="control"
                            label="Текст задачи"
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.text}
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={3}>
                        <Button
                            className="control btn"
                            variant="outlined"
                            color="primary"
                            type="submit"
                        >
                            Добавить задачу
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }

    renderPriorityItem = p => {
        return <MenuItem
            key={p.alias}
            value={p.alias}>
            {p.name}
        </MenuItem>
    }
}
