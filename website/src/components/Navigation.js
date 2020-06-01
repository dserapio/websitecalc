import React, { useRef, useEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import Burger from './Burger';
import { paths, pathNames } from './Pages';
import logo from '../img/e-stewards.png'
import '../App.css';


const Navigation = ({menuRef, hide, setHide}) => {
   const linkInfos = useMemo(() => {
      const links = Object.keys(paths);
      return pathNames().map((name, i) => [links[i], name]);
   }, []);

   const navRef = useRef();

   useEffect(() => {
      if (isMobile) //only check once
         navRef.current.classList.add('mobile');
      else
         navRef.current.classList.remove('mobile');

      const scrollCheck = () => {
         const distanceY = window.pageYOffset || document.documentElement.scrollTop;
         const shrinkOn = 25;
         
         if (distanceY > shrinkOn)
            navRef.current.classList.add("smaller");
         else
            navRef.current.classList.remove("smaller");
      }

      const menuClick = (( {target} ) => {
         if (!menuRef.current.contains(target) || target.className.includes('nav-link'))
            setHide(true);
      });

      window.addEventListener('scroll', scrollCheck);
      if (isMobile)
         window.addEventListener('click', menuClick);

      return () => {
         window.removeEventListener('scroll', scrollCheck);
         if (isMobile)
            window.removeEventListener('click', menuClick);
      }
   }, [menuRef, setHide]);

   const burgClick = () => setHide(hide => !hide);

   
   return ( 
      <div className="nav" ref={navRef}>
         <div className="logoBtn">
            <NavLink className="nav-link" exact to="/">
               <img className="logo" src={logo} alt="logo"/>
            </NavLink>
         </div>
         
         <div ref={menuRef} className="nav-menu">
            <div className={"nav-list".concat(hide ? " hide" : "")}>
               {linkInfos.map(([path, name], i) => (
                  <NavLink key={path+i} className="nav-link" exact to={path}>{name}</NavLink>
               ))}
            </div>
            
            {isMobile && <Burger onClick={burgClick} active={!hide}/>}
         </div>
      </div>
   );
};

export const menuZone = () => window.innerWidth*0.85;

export default Navigation;