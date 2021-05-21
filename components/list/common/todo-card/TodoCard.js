import {Component} from "react";
import './TodoCard.css'
import {Box, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import TrashIcon from '@material-ui/icons/Delete';

class TodoCard extends Component {
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Box display="flex" height="100%" justifyContent="center" alignItems="center">
                        <Typography>Приоритет</Typography>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <Paper className="todo-content" variant="outlined">
                        <Box display="flex" flexDirection="row" justifyContent="space-between">
                            <Box display="flex" flexDirection="column" justifyContent="space-between">
                                <Typography>Текст сообщения</Typography>
                                <Typography>Дата</Typography>
                            </Box>

                            <Box display="flex" flexDirection="column" justifyContent="stretch">
                                <IconButton color="primary">
                                    <DoneIcon/>
                                </IconButton>
                                <IconButton color="secondary">
                                    <CloseIcon/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={1}>
                    <Box display="flex" height="100%" justifyContent="center" alignItems="center">
                        <IconButton color="default">
                            <TrashIcon/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}


export default TodoCard;
