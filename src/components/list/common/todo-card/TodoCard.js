import {Component} from "react";
import './TodoCard.css'
import {Box, Grid, IconButton, Paper, TextField, Typography} from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import TrashIcon from '@material-ui/icons/Delete';
import {priorityLevels} from "../../../../common/constants/priority-levels";
import {priorityColors} from "./common/priority-colors";
import {statusColors} from "./common/status-colors";
import {statusTypes} from "../../../../common/constants/status-types";

export default class TodoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {showInput: false, text: this.props.task.text}
    }

    setSuccessStatus() {
        this.props.handleUpdateTask(this.changeStatus(statusTypes.SUCCESS))
    }

    setCancelStatus() {
        this.props.handleUpdateTask(this.changeStatus(statusTypes.FAILED))
    }

    saveText = () => {
        if (this.state.showInput) {
            this.props.handleUpdateTask(this.changeText(this.state.text))
            this.hideInput()
        }
    }

    handleChangeText = event => {
        const text = event.target.value

        this.setState({text})
    }

    changeStatus(status) {
        return {
            id: this.props.task.id,
            text: this.props.task.text,
            priority: this.props.task.priority,
            status,
            date: this.props.task.date
        }
    }

    changeText(text) {
        return {
            id: this.props.task.id,
            text,
            priority: this.props.task.priority,
            status: this.props.task.status,
            date: this.props.task.date
        }
    }

    showInput = () => {
        this.setState({showInput: true})
    }

    hideInput = () => {
        this.setState({showInput: false})
    }

    render() {
        const priorityColor = priorityColors.find(c => c.alias === this.props.task.priority).color
        const priority = priorityLevels.find(p => p.alias === this.props.task.priority).name
        const text = this.props.task.text
        const options = {
            day: 'numeric', month: 'numeric', year: 'numeric',
            hour: 'numeric', minute: 'numeric'
        }
        const date = new Date(this.props.task.date).toLocaleString('ru-RU', options).replace(',', '')
        let statusColor = statusColors.find(c => c.alias === this.props.task.status)

        if (statusColor) {
            statusColor = statusColor.color
        }

        return (
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Box display="flex" height="100%" justifyContent="center" alignItems="center">
                        <Typography style={{color: priorityColor}}>{priority}</Typography>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <Paper style={{backgroundColor: statusColor || 'white'}} className="todo-content"
                           onMouseLeave={this.saveText}
                           variant="outlined">
                        <Box onClick={this.showInput} display="flex" flexDirection="row" justifyContent="space-between">
                            <Box display="flex" flexDirection="column" justifyContent="space-between" flex="1">
                                <TextField style={{display: this.state.showInput ? 'inline-flex': 'none'}} multiline rows={3}  rowsMax={6} onChange={this.handleChangeText}
                                           value={this.state.text} variant="outlined" size="small"/>
                                <Typography
                                    style={{display: !this.state.showInput ? 'block' : 'none'}}>{text}</Typography>
                                <Typography>{date}</Typography>
                            </Box>

                            <Box display="flex" flexDirection="column" justifyContent="stretch">
                                <IconButton color="primary"
                                            style={{display: this.props.task.status !== statusTypes.SUCCESS ? 'block' : 'none'}}
                                            onClick={() => this.setSuccessStatus()}>
                                    <DoneIcon/>
                                </IconButton>
                                <IconButton color="secondary"
                                            style={{display: this.props.task.status !== statusTypes.FAILED ? 'block' : 'none'}}
                                            onClick={() => this.setCancelStatus()}>
                                    <CloseIcon/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={1}>
                    <Box display="flex" height="100%" justifyContent="center" alignItems="center">
                        <IconButton color="default" onClick={this.props.handleDeleteTask}>
                            <TrashIcon/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}
