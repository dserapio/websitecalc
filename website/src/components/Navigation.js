import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../img/e-stewards.png'

const Navigation = () => {
   const [height, setHeight] = useState("");
   
   const scrollCheck = () => {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 25;
      setHeight(distanceY > shrinkOn ? "smaller" : "");
   }

   useEffect(() => {
      const morph = window.addEventListener('scroll', scrollCheck);
      return () => {
         window.removeEventListener('scroll', morph);
      }
   }, []);

   return ( 
      <div className={"nav ".concat(height)}>
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
};

export default Navigation;