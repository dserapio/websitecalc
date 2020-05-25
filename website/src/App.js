import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Information from './components/Info';
import Calculator from './components/Calculator';
import FindRecycler from './components/FindRecycler';
import Error from './components/Error';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Navigation />
    
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/information" component={Information}/>
      <Route path="/calculator" component={Calculator}/>
      <Route path="/find-recycler" component={FindRecycler}/>
      <Route component={Error}/>
    </Switch>

  </BrowserRouter>
);

export default App;
