import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../img/e-stewards.png'
 
export default function Navigation() {
    return (
      <div className="nav">
         <div className="logoBtn">
            <NavLink className="nav-link" to="/">
               <img className="logo" src={ logo } alt="logo"/>
            </NavLink>
         </div>
         
         <div className="nav-list">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/information">Information</NavLink>
            <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
            <NavLink className="nav-link" to="/find-recycler">Find Recycler</NavLink>
         </div>
    </div>
    );
}