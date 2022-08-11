// import {}
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Project from "./project/project";
import Login from "./login/login";

function App() {
  return (
    <>
      {/* <Project /> */}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Project} />
      </Switch>
    </>
  );
}

export default App;
