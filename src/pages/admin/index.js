import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Order from "./order";
import Food from "./food";
import User from "./user";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/admin/order`}>order</Link>
            </li>
            <li>
              <Link to={`/admin/food`}>food</Link>
            </li>
            <li>
              <Link to={`/admin/user`}>User</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={`/admin/user`}>
            <User />
          </Route>
          <Route exact path={`/admin/food`}>
            <Food />
          </Route>
          <Route exact path={`/admin/order`}>
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
