import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import FindRecycler from './components/FindRecycler';
import Error from './components/Error';
import Navigation from './components/Navigation';

import './App.css';

function App() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Navigation />
        
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/calculator" component={Calculator}/>
          <Route path="/find-recycler" component={FindRecycler}/>
          <Route component={Error}/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
