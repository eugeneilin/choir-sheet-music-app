import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Scores from './components/pages/Scores';
import Navigation from './components/layout/Navigation';

function App() {
  return (
    <Router>
      <div className='container'>
        <h3 className='m-3 d-flex justify-content-center'>
          <Link to='/' className='text-decoration-none'>
            Церковный хор
          </Link>
        </h3>
        <h5 className='m-3 d-flex justify-content-center'>House of Prayer</h5>
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
