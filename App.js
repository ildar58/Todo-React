import './App.css';
import {Card, Container, CssBaseline, Grid, withStyles} from "@material-ui/core";
import Form from "./components/form/Form";
import {Component} from "react";

const styles = theme => ({
    root: {
        width: '100%'
    }
})

class App extends Component {

    render() {
        const {classes} = this.props;

        return (
            <CssBaseline>
                <Container>
                    <Card className={classes.root} variant="outlined">
                        <Form></Form>
                    </Card>
                </Container>
            </CssBaseline>
        );
    }
}

export default withStyles(styles)(App);
