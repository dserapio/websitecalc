import React from 'react';
import '../App.css';
 
import { NavLink } from 'react-router-dom';
 
function Navigation() {
    return (
       <div className="App-link">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
       </div>
    );
}
 
export default Navigation;