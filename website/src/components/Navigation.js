import React, { useState, useRef, useEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import Burger from './Burger';
import { paths, pathNames } from './Pages';
import logo from '../img/e-stewards.png'
import '../App.css';


const Navigation = () => {
   const linkInfos = useMemo(() => {
      const links = Object.keys(paths);
      return pathNames().map((name, i) => [links[i], name]);
   }, []);

   const [hide, setHide] = useState(isMobile); //closed if mobile

   const navRef = useRef();
   const listRef = useRef();
   const showRef = useRef();

   useEffect(() => {
      if (isMobile)
         navRef.current.classList.add('mobile');
      else
         navRef.current.classList.remove('mobile');

      const scrollCheck = ({target}) => {
         const distanceY = window.pageYOffset || document.documentElement.scrollTop;
         const shrinkOn = 25;
         const navClasses = navRef.current.classList
         if (distanceY > shrinkOn)
            navClasses.add("smaller");
         else
            navClasses.remove("smaller");
   
         setHide(true);
      }

      const clickCheck = (({target}) => {
         if (!showRef.current.contains(target) || target.className.includes('nav-link'))
            setHide(true);
      });

      window.addEventListener('scroll', scrollCheck);
      if (isMobile)
         window.addEventListener('click', clickCheck);

      return () => {
         window.removeEventListener('scroll', scrollCheck);
         if (isMobile)
            window.removeEventListener('click', clickCheck);
      }
   }, []);

   useEffect(() => {
      if (hide) {
         listRef.current.classList.add("hide");
      } else {
         listRef.current.classList.remove("hide");
      }
   }, [hide]);

   const click = (event) => setHide(hide => !hide);

   return ( 
      <div className="nav" ref={navRef}>
         <div className="logoBtn">
            <NavLink className="nav-link" exact to="/">
               <img className="logo" src={logo} alt="logo"/>
            </NavLink>
         </div>
         
         <div ref={showRef} className="show-nav">
            {isMobile && <Burger onClick={click} active={!hide}/>}
            <div className="nav-list" ref={listRef}>
               {linkInfos.map(([path, name], i) => (
                  <NavLink key={path+i} className="nav-link" exact to={path}>{name}</NavLink>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Navigation;