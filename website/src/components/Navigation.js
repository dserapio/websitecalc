import React, { useRef, useEffect, useMemo} from 'react';
import { NavLink } from 'react-router-dom';

import { paths, pathNames } from './Pages';
import logo from '../img/e-stewards.png'
import '../App.css';


const Navigation = () => {
   const linkInfos = useMemo(() => {
      const links = Object.keys(paths);
      return pathNames().map((name, i) => [links[i], name]);
   }, []);

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
            <NavLink className="nav-link" exact to="/">
               <img className="logo" src={logo} alt="logo"/>
            </NavLink>
         </div>
         
         <div className="nav-list">
            {linkInfos.map(([path, name], i) => (
               <NavLink key={path+i} className="nav-link" exact to={path}>{name}</NavLink>
            ))}
         </div>
      </div>
   );
};

export default Navigation;