import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import routes from './configs/routes';

function App() {
  const logined = !!localStorage.getItem('user');

  return (
    <Router>
      <Switch>
        {routes.map((item) => (
          <Route exact={item.exact} path={item.path} key={item.path}>
            {item.auth === 0
              || (item.auth === 1 && logined === true)
              || (item.auth === -1 && logined === false) ? (
                item.component()
              ) : (
                <Redirect
                  to={{
                    pathname: item.redirect ? item.redirect : 'not-found',
                  }}
                />
              )}
          </Route>
        ))}
      </Switch>
    </Router>
  )
}

export default App
