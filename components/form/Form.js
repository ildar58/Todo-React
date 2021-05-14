import {Button, Grid, MenuItem, TextField, withStyles} from "@material-ui/core";
import {Component} from "react";

const styles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
    }
})

class FormComponent extends Component {
    state = {
        priorityLevel: [
            {
                id: '',
                name: 'Не выбрано'
            },
            {
                id: 'low',
                name: 'Низкий'
            },
            {
                id: 'medium',
                name: 'Средний'
            },
            {
                id: 'high',
                name: 'Высокий'
            }
        ]
    }

    render() {
        const {classes} = this.props;

        return (
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <TextField
                            select
                            className={classes.formControl}
                            label="Приоритет"
                            variant="outlined"
                        >
                            {
                                this.state.priorityLevel.map(el => <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>)
                            }
                        </TextField>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            className={classes.formControl}
                            label="Текст задачи"
                            variant="outlined"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={3}>
                        <Button
                            className={classes.formControl}
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

export default withStyles(styles)(FormComponent);
