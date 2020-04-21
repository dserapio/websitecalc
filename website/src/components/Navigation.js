import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../img/download.jpg'
 
export default function Navigation() {
    return (
      <div className="nav">
         <div className="logo">
            <img className="logo" src={ logo } alt="logo"/>
         </div>
         
         <div className="nav-list">
            <NavLink className="nav-link" to="/">Information</NavLink>
            <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
            <NavLink className="nav-link" to="/find-recycler">Find Recycler</NavLink>
         </div>
    </div>
    );
}