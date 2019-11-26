import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Scores from './components/pages/Scores';
import Navigation from './components/layout/Navigation';

function App() {
  return (
    <Router>
      <div>
        <h3>
          <Link to='/'>Церковный хор</Link>
        </h3>
        <p>House of Prayer</p>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/scores' component={Scores} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
