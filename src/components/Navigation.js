import React, { 
   useState, useRef, useEffect, useMemo, useContext 
} from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import ThemeContext from '../contexts/ThemeContext';
import Burger from './buttons/Burger';
import { pathNames, urls } from './Pages';

import sunLogo from '../img/sun-solid.svg'
import moonLogo from '../img/moon-regular.svg'
import logo from '../img/e-stewards.png'
import '../App.css';


const Navigation = React.forwardRef(
   ({hide, setNav, swapTheme}, ref) => {

   const linkInfos = useMemo(() => {
      const names = pathNames();
      return Object.entries(urls())
         .map( ([url, {exact}], i) => [url, names[i], exact]);
   }, []);

   const homeLink = useMemo(() => {
      const homeInfo = linkInfos.filter(([_, name]) => name==="Calculator")[0]; //should only be one
      return {to: homeInfo[0], exact: homeInfo[2]};
   }, [linkInfos]);

   const [yPos, setYPos] = useState(0);

   const navRef = useRef();
   const menuRef = useRef(); //sliding ref and the burger button group
   const closeRef = useRef(); //for dependency
   const scrollRef = useRef(); //for dependency

   const theme = useContext(ThemeContext);
   

   useEffect(() => { //remove dependency for bar effect
      scrollRef.current = () => {
         const distanceY = window.pageYOffset || document.documentElement.scrollTop;
         const shrinkOn = window.innerHeight * (isMobile ? 0.1 : 0.02);
         const addClass = isMobile ? "hidden" : "smaller";

         const downDir = distanceY > yPos;
         const downThresh = distanceY > shrinkOn;
         setYPos(distanceY);

         if (downThresh && downDir)
            navRef.current.classList.add(addClass);
         else if (!downDir && (isMobile || !downThresh))
            navRef.current.classList.remove(addClass);
      };
   }, [yPos]);

   useEffect(() => {
      if (isMobile && !hide)
         navRef.current.classList.remove("hidden");
   }, [hide]);

   useEffect(() => {
      if (isMobile)
         navRef.current.classList.add('mobile');
      else
         navRef.current.classList.remove('mobile');

      const scrollCheck = () => scrollRef.current();
      window.addEventListener('scroll', scrollCheck);

      return () => {
         window.removeEventListener('scroll', scrollCheck);
      }
   }, []);

   //remove dependency for click effect
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
            <NavLink className="nav-link" {...homeLink}>
               <img className="logo" src={logo} alt="logo"/>
            </NavLink>
         </div>
         
         <div ref={menuRef} className="nav-menu">
            <div ref={ref} className={`nav-list ${hide ? "hide" : ""}`}
               style={{backgroundColor: theme.mainAlt}}
            >
               {linkInfos.map(([path, name, exact], i) => (
                  <NavLink key={path+i} className="nav-link" exact={exact} to={path}>{name}</NavLink>
               ))}

               <div className="nav-link theme-link" onClick={swapTheme}>
                  {!isLight && <img className="theme-logo" src={sunLogo} alt="Light Mode"/>}
                  {!isDark && <img className="theme-logo" src={moonLogo} alt="Dark Mode"/>}
               </div>
            </div>

            {isMobile &&
               <Burger onClick={() => setNav('swap')} active={!hide} color={theme.offAlt}/>}
         </div>
      </div>
   );
});

export default Navigation;
