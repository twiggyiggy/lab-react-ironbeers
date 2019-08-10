import React from 'react';
// import milligram from 'milligram';
import {Route, Switch} from 'react-router-dom';
import SingleBeer from './pages/SingleBeer'

import Home from './pages/Home.js';
import Beers from './pages/Beers.js'
import RandomBeer from './pages/RandomBeer.js'
import NewBeer from './pages/NewBeer.js'
import NotFound from './pages/NotFound.js'


import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/beers' exact component={Beers}/>
          <Route path='/random-beer' exact component={RandomBeer}/>
          <Route path='/new-beer' exact component={NewBeer}/>
          <Route path='/beers/:id' exact component={SingleBeer}/>
          <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
