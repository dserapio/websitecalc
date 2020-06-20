import React, { useRef, useEffect, useMemo, forwardRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import ThemeContext from '../contexts/ThemeContext';
import Burger from './buttons/Burger';
import { pathNames, urls } from './Pages';

import sunLogo from '../img/sun-solid.svg'
import moonLogo from '../img/moon-regular.svg'
import logo from '../img/e-stewards.png'
import '../App.css';


const Navigation = forwardRef(({hide, setNav, swapTheme}, ref) => {

   const linkInfos = useMemo(() => {
      const names = pathNames();
      return Object.entries(urls())
         .filter( ([_, name]) => name!=="/error")
         .map( ([url, _], i) => [url, names[i]]);
   }, []);

   const navRef = useRef();
   const menuRef = useRef(); //sliding ref and the burger button group
   const closeRef = useRef(); //for dependency

   const theme = useContext(ThemeContext);
   
   useEffect(() => {
      if (isMobile) //only check once
         navRef.current.classList.add('mobile');
      else
         navRef.current.classList.remove('mobile');

      const scrollCheck = () => {
         const distanceY = window.pageYOffset || document.documentElement.scrollTop;
         const shrinkOn = window.innerHeight * 0.02;
         
         if (distanceY > shrinkOn || isMobile)
            navRef.current.classList.add("smaller");
         else
            navRef.current.classList.remove("smaller");
      }

      window.addEventListener('scroll', scrollCheck);

      return () => {
         window.removeEventListener('scroll', scrollCheck);
      }
   }, []);


   //remove dependency for another effect, so don't have
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

   const isDark = theme.name==="dark";
   const isLight = !isDark;

   return ( 
      <div className="nav" ref={navRef} style={{backgroundColor: theme.mainAlt}}>
         
         <div className="logoBtn" 
            style={{backgroundColor: isLight ? "transparent" : theme.offAlt}}
         >
            <NavLink className="nav-link" exact to="/">
               <img className="logo" src={logo} alt="logo"/>
            </NavLink>
         </div>
         
         <div ref={menuRef} className="nav-menu">
            <div ref={ref} className={`nav-list ${hide ? "hide" : ""}`}
               style={{backgroundColor: theme.mainAlt}}
            >
               {linkInfos.map(([path, name], i) => (
                  <NavLink key={path+i} className="nav-link" exact to={path}>{name}</NavLink>
               ))}

               <div className="nav-link theme-link" onClick={swapTheme}>
                  {!isLight && <img className="theme-logo" src={sunLogo} alt="Light Mode"/>}
                  {!isDark && <img className="theme-logo" src={moonLogo} alt="Dark Mode"/>}
               </div>
            </div>

            {isMobile && <Burger onClick={() => setNav('swap')} active={!hide} color={theme.offAlt}/>}
         </div>
      </div>
   );
});

export default Navigation;
