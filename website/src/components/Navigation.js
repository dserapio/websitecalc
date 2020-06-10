import React, { useRef, useEffect, useMemo, forwardRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import ThemeContext from '../contexts/ThemeContext';
import Burger from './buttons/Burger';
import Toggle from './buttons/Toggle';
import { paths, pathNames } from './Pages';

import logo from '../img/e-stewards.png'
import '../App.css';


const Navigation = forwardRef(({hide, setNav, swapTheme}, ref) => {

   const linkInfos = useMemo(() => {
      const links = Object.keys(paths);
      return pathNames().map((name, i) => [links[i], name]);
   }, []);

   const navRef = useRef();
   const menuRef = useRef(); //sliding ref and the burger button group
   const closeRef = useRef(); //for dependency

   useEffect(() => {
      if (isMobile) //only check once
         navRef.current.classList.add('mobile');
      else
         navRef.current.classList.remove('mobile');
   }, []);

   
   useEffect(() => {
      const scrollCheck = () => {
         const distanceY = window.pageYOffset || document.documentElement.scrollTop;
         const shrinkOn = window.innerHeight * 0.02;
         
         if (distanceY > shrinkOn)
            navRef.current.classList.add("smaller");
         else
            navRef.current.classList.remove("smaller");
      }

      window.addEventListener('scroll', scrollCheck);

      return () => {
         window.removeEventListener('scroll', scrollCheck);
      }
   }, []);


   //remove dependency for the effect, so don't have
   //to add and remove event listener
   useEffect(() => {
      closeRef.current = () => setNav('close');
   });

   useEffect(() => {
      const menuClick = (( {target} ) => {
         if (!menuRef.current.contains(target) || target.className.includes('nav-link'))
            closeRef.current();
      });

      if (isMobile)
         window.addEventListener('click', menuClick);

      return () => {
         if (isMobile)
            window.removeEventListener('click', menuClick);
      };
   }, []);

   const theme = useContext(ThemeContext);
   const isDark = theme.name==="dark";
   const isLight = !isDark;

   return ( 
      <div className="nav" ref={navRef} 
         style={{backgroundColor: theme.mainAlt, color: theme.off, boxShadow: `0 1px 10px 2px ${theme.shadow}`}}
      >
         <div className="logoBtn" 
            style={{backgroundColor: isLight ? "transparent" : theme.offAlt}}
         >
            <NavLink className="nav-link" exact to="/">
               <img className="logo" src={logo} alt="logo"/>
            </NavLink>
         </div>
         
         <div ref={menuRef} className="nav-menu">
            <div ref={ref} className={"nav-list".concat(hide ? " hide" : "")}
               style={{backgroundColor: theme.mainAlt, color: theme.off}}
            >
               {linkInfos.map(([path, name], i) => (
                  <NavLink key={path+i} className="nav-link" exact to={path}>{name}</NavLink>
               ))}

               <div className="nav-link theme-link" onClick={swapTheme}>
                  {!isMobile && (isDark ? "Light Mode" : "Dark Mode")}
                  {isMobile && <>
                     Dark Mode
                     <Toggle checked={isDark}
                        onChange={() => { setNav('close'); swapTheme(); }}/>
                  </>}
               </div>
            </div>
            {isMobile && <Burger onClick={() => setNav('swap')} active={!hide} color={theme.offAlt}/>}
         </div>
      </div>
   );
});

export default Navigation;
