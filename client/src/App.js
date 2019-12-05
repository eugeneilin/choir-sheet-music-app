import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import UpcomingPerformances from './components/pages/UpcomingPerformances';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/upcoming-performances'
            component={UpcomingPerformances}
          />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
