import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Order from "./order";
import Food from "./food";
import User from "./user";

export default function App() {
  let { path, url } = useRouteMatch();
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`${url}/order`}>order</Link>
            </li>
            <li>
              <Link to={`${url}/food`}>food</Link>
            </li>
            <li>
              <Link to={`${url}/user`}>User</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={`${path}/user`}>
            <User />
          </Route>
          <Route exact path={`${path}/food`}>
            <Food />
          </Route>
          <Route exact path={`${path}/order`}>
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
