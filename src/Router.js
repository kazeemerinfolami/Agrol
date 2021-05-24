import Home from "./pages/Home";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default Router;