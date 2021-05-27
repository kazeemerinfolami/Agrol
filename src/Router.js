
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function NavRouter() {
  return (
    < Router >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router >
  );
}

export default NavRouter;