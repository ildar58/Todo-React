import {Component} from "react";
import './TodoList.css';
import TodoCard from "./common/todo-card/TodoCard";
import {statusTypes} from "../../common/constants/status-types";
import {priorityLevelsNumber} from "../../common/constants/priority-levels";

export default class TodoList extends Component {

    render() {
        return (
            <div className="list">
                {
                    this.props.tasks.filter(this.filterTask).sort(this.sortTask).map((this.renderCard))
                }
            </div>
        )
    }

    sortTask = (a,b) => {
        if (this.props.filters.sorters.lastSorter === 'byDate') {
            if (this.props.filters.sorters.byDate === 'asc') {
                if (a.date < b.date) {
                    return -1;
                }
                if (a.date > b.date) {
                    return 1;
                }
            } else {
                if (a.date > b.date) {
                    return -1;
                }
                if (a.date < b.date) {
                    return 1;
                }
            }
            return 0;
        } else {
            if (this.props.filters.sorters.byPriority === 'asc') {
                if (priorityLevelsNumber[a.priority] < priorityLevelsNumber[b.priority]) {
                    return -1;
                }
                if (priorityLevelsNumber[a.priority] > priorityLevelsNumber[b.priority]) {
                    return 1;
                }
            } else {
                if (priorityLevelsNumber[a.priority] > priorityLevelsNumber[b.priority]) {
                    return -1;
                }
                if (priorityLevelsNumber[a.priority] < priorityLevelsNumber[b.priority]) {
                    return 1;
                }
            }
        }
    }

    filterTask = task => {
        return this.filterByPriority(task) && this.filterByStatus(task) && this.filterByText(task)
    }

    filterByPriority = task => {
        const priorityFilter = this.props.filters.priority

        if (priorityFilter === 'all') {
            return true
        } else {
            return priorityFilter === task.priority
        }
    }

    filterByStatus = task => {
        const statusFilter = this.props.filters.statusTypes
        const isActive = statusFilter[statusTypes.ACTIVE] && task.status === statusTypes.ACTIVE
        const isFailed = statusFilter[statusTypes.FAILED] && task.status === statusTypes.FAILED
        const isSuccess = statusFilter[statusTypes.SUCCESS] && task.status === statusTypes.SUCCESS

        return isActive || isFailed || isSuccess
    }

    filterByText = task => {
        const textFilter = this.props.filters.text

        if (!textFilter) {
            return true
        } else {
            return (task.text.indexOf(textFilter) !== -1)
        }
    }

    renderCard = (task, index) => {
        return <TodoCard
            key={index}
            handleDeleteTask={() => this.props.handleDeleteTask(task.id)}
            handleUpdateTask={this.props.handleUpdateTask}
            task={task}
        />
    }
}
