import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import logo from './img/download.jpg'

import './App.css';

function App() {
  return (
    <div className="Main">
      <BrowserRouter>
        <div className="nav">
          <div className="logo">
              <img className="logo" src={ logo } alt="logo"/>
          </div>
          <Navigation />
        </div>
        
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
