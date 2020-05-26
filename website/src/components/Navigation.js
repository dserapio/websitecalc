import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../img/e-stewards.png'

const Navigation = () => {
   const navRef = useRef();
   
   const scrollCheck = () => {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 25;
      const navClasses = navRef.current.classList
      if (distanceY > shrinkOn)
         navClasses.add("smaller");
      else
         navClasses.remove("smaller");
   }

   useEffect(() => {
      const morph = window.addEventListener('scroll', scrollCheck);
      return () => {
         window.removeEventListener('scroll', morph);
      }
   }, []);

   return ( 
      <div className="nav" ref={navRef}>
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