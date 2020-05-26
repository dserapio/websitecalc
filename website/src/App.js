import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './components/Navigation';
import Pages from './components/Pages';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Pages/>
  </BrowserRouter>
);

export default App;
