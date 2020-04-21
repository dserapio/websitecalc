import React from 'react';
import '../App.css';
 
import { NavLink } from 'react-router-dom';
 
export default function Navigation() {
    return (
       <div className="nav-list">
          <NavLink className="nav-link" to="/">Information</NavLink>
          <NavLink className="nav-link" to="/about">Calculator</NavLink>
          <NavLink className="nav-link" to="/contact">Find Recycler</NavLink>
       </div>
    );
}