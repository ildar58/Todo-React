import {Component} from "react";
import './TodoList.css';
import TodoCard from "./common/todo-card/TodoCard";

class TodoList extends Component {

    render() {
        return (
            <div className="list">
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>

            </div>
        )
    }
}



export default TodoList;
