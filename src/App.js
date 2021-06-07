import './App.css';
import {Container, CssBaseline, Paper} from "@material-ui/core";
import Form from "./components/form/Form";
import {Component} from "react";
import Filters from "./components/filters/Filters";
import TodoList from "./components/list/TodoList";
import {statusTypes} from "./common/constants/status-types";
import {Api} from "./common/api/api";

export default class App extends Component {
    state = {
        filters: {
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
        },
        tasks: [],
        counter: 1
    }

    componentDidMount() {
        Api.getTasks().then(tasks => this.setState({tasks}))
    }

    handleDeleteTask(id) {
        Api.deleteTask(id).then(() => {
            this.setState(prevState => {
                const tasks = prevState.tasks
                const index = tasks.findIndex(item => item.id === id)

                if (typeof index !== "undefined") {
                    tasks.splice(index, 1)
                }

                return {tasks}
            })
        })
    }

    handleUpdateTask(task) {
        Api.updateTask(task).then(() => {
            this.setState(prevState => {
                const tasks = prevState.tasks
                const index = tasks.findIndex(item => item.id === task.id)

                if (typeof index !== "undefined") {
                    tasks.splice(index, 1, task)
                }

                return {tasks}
            })
        })
    }

    handleSubmit = task => {
        Api.addTask(task).then(task => {
            this.setState(prevState => {
                return {
                    tasks: [...prevState.tasks, task],
                    counter: ++prevState.counter
                }
            })
        })
    }

    handleChangeFilters = filters => {
        this.setState({filters})
    }


    render() {
        return (
            <CssBaseline>
                <Container maxWidth="lg">
                    <Paper variant="outlined" className="form">
                        <Form handleSubmit={this.handleSubmit}/>
                    </Paper>

                    <Paper variant="outlined" className="container">
                        <Filters handleChange={this.handleChangeFilters}/>
                    </Paper>

                    <Paper variant="outlined" className="container todolist">
                        <TodoList handleUpdateTask={this.handleUpdateTask.bind(this)}
                                  handleDeleteTask={this.handleDeleteTask.bind(this)} filters={this.state.filters}
                                  tasks={this.state.tasks}/>
                    </Paper>
                </Container>
            </CssBaseline>
        );
    }
}
