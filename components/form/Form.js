import {FormControl, Grid, Input, InputLabel, MenuItem, Select, withStyles} from "@material-ui/core";
import {Component} from "react";

const styles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
    },
    item: {
        padding: theme.spacing(2),
        textAlign: 'center'
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
            <Grid container spacing={3}>
                <Grid item className={classes.item} xs>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Приоритет</InputLabel>
                        <Select label="Приоритет">
                            {
                                this.state.priorityLevel.map(el => <MenuItem value={el.id}>{el.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item className={classes.item} xs={6}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Приоритет</InputLabel>
                        <Input label="Приоритет">

                        </Input>
                    </FormControl>
                </Grid>

                <Grid item className={classes.item} xs>
                    hello
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(FormComponent);
