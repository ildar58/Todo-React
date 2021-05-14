import './App.css';
import {Card, Container, CssBaseline, Grid} from "@material-ui/core";
import Form from "./components/form/Form";

function App() {

  return (
      <CssBaseline>
          <Container>
              <Card variant="outlined">
                    <Form></Form>
              </Card>
          </Container>
      </CssBaseline>
  );
}

export default App;
