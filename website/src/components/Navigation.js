import React, { useRef, useEffect, useMemo} from 'react';
import { NavLink } from 'react-router-dom';

import { paths } from './Pages';
import logo from '../img/e-stewards.png'
import '../App.css';



const Navigation = () => {
   
   const linkInfos = useMemo(() => (
      Object.entries(paths)
         .map(entry => [entry[0], entry[0]])
         .filter(entry => entry[0]!=="/error")
         .map( ([link, path]) => [link, path.replace('/', '')])
         .map( ([path, name]) => [path, name==="" ? "home" : name])
         .map( ([path, name]) => [path, name.replace(/-([a-z])/g, ' $1')])
         .map( ([path, name]) => [path, name.replace(/ ([a-z])/, r => r.toUpperCase())])
         .map( ([path, name]) => [path, name.replace(/^./, str => str.toUpperCase())])
   ), []);

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
               <img className="logo" src={logo} alt="logo"/>
            </NavLink>
         </div>
         
         <div className="nav-list">
            {linkInfos.map(([path, name], i) => (
               <NavLink key={path+i} className="nav-link" to={path}>{name}</NavLink>
            ))}
         </div>
      </div>
   );
};

export default Navigation;