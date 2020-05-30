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

   const [hide, setHide] = useState(isMobile); //hide if mobile
   const navRef = useRef();
   const menuRef = useRef();

   useEffect(() => {
      if (isMobile) //only check once
         navRef.current.classList.add('mobile');
      else
         navRef.current.classList.remove('mobile');

      const scrollCheck = () => {
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
         if (!menuRef.current.contains(target) || target.className.includes('nav-link'))
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

   const click = () => setHide(hide => !hide);

   return ( 
      <div className="nav" ref={navRef}>
         <div className="logoBtn">
            <NavLink className="nav-link" exact to="/">
               <img className="logo" src={logo} alt="logo"/>
            </NavLink>
         </div>
         
         <div ref={menuRef}>
            {isMobile && <Burger onClick={click} active={!hide}/>}

            <div className={"nav-list".concat(hide ? " hide" : "")}>
               {linkInfos.map(([path, name], i) => (
                  <NavLink key={path+i} className="nav-link" exact to={path}>{name}</NavLink>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Navigation;