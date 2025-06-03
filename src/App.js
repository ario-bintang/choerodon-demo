import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/test">Test</Link>
      </nav>
      <Switch>
        {routes.map((route, idx) => (
          <Route
            key={idx}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
