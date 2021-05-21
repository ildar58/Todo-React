import {Button, Grid, MenuItem, TextField} from "@material-ui/core";
import './Form.css'
import {Component} from "react";

class FormComponent extends Component {
    state = {
        priorityLevel: [
            {
                alias: '',
                name: 'Не выбрано'
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

    render() {
        return (
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <TextField
                            select
                            className="control"
                            label="Приоритет"
                            variant="outlined"
                        >
                            {
                                this.state.priorityLevel.map(el => <MenuItem key={el.alias} value={el.alias}>{el.name}</MenuItem>)
                            }
                        </TextField>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            className="control"
                            label="Текст задачи"
                            variant="outlined"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={3}>
                        <Button
                            className="control btn"
                            variant="outlined"
                            color="primary"
                        >
                            Добавить задачу
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default FormComponent;
