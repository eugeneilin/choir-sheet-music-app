import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Enter from './components/pages/Enter';
import Scores from './components/pages/Scores';
import UpcomingPerformances from './components/pages/UpcomingPerformances';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/enter' component={Enter} />
          <Route exact path='/scores' component={Scores} />
          <Route exact path='/upcoming-performances' component={UpcomingPerformances} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
