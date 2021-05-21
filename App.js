import './App.css';
import {Container, CssBaseline, Paper} from "@material-ui/core";
import Form from "./components/form/Form";
import {Component} from "react";
import Filters from "./components/filters/Filters";
import TodoList from "./components/list/TodoList";
import ScrollBox from "./common/scroll-box/ScrollBox";

class App extends Component {

    render() {
        return (
            <CssBaseline>
                <Container maxWidth="lg">
                    <Paper variant="outlined" className="form">
                        <Form></Form>
                    </Paper>

                    <Paper variant="outlined" className="container">
                        <Filters></Filters>
                    </Paper>

                    <Paper variant="outlined" className="container todolist">
                        <ScrollBox>
                            <TodoList></TodoList>
                        </ScrollBox>
                    </Paper>
                </Container>
            </CssBaseline>
        );
    }
}

export default App;
