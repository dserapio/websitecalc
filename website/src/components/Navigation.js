import React, { useRef, useEffect, useMemo, forwardRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import Burger from './Burger';
import { paths, pathNames } from './Pages';
import { ThemeContext } from './utils/Styles';
import logo from '../img/e-stewards.png'
import '../App.css';


const Navigation = forwardRef(({hide, setNav}, ref) => {

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

   return ( 
      <div className="nav" ref={navRef} style={{backgroundColor: theme.mainAlt, color: theme.off}}>
         <div className="logoBtn" 
            style={{backgroundColor: theme.name==="light" ? "transparent" : theme.off}}
         >
            <NavLink className="nav-link" exact to="/">
               <img className="logo" src={logo} alt="logo"/>
            </NavLink>
         </div>
         
         <div ref={menuRef} className="nav-menu">
            <div ref={ref} style={{backgroundColor: theme.mainAlt, color: theme.off}} className={"nav-list".concat(hide ? " hide" : "")}>
               {linkInfos.map(([path, name], i) => (
                  <NavLink key={path+i} className="nav-link" exact to={path}>{name}</NavLink>
               ))}
            </div>
            
            {isMobile && <Burger onClick={() => setNav('swap')} active={!hide} color={theme.offAlt}/>}
         </div>
      </div>
   );
});

export default Navigation;

/**
 * min x value for open navigation to trigger
 */
const closedArea = () =>
   window.innerWidth * 0.9;

/**
 * min x value of the opened navigation, requires
 * a reference to the navigation menu element
 * @param {HTMLDivElement} menu
 */
const openedArea = (menu) =>
   window.innerWidth - menu.clientWidth;


/**
 * returns a new NavContext state based the values
 * in the action parameter; meant to be used with 
 * the useReducer react hook
 * @param {Object} navInfo the previous nav state
 * @param {boolean} navInfo.hide
 * @param {number} navInfo.area
 * @param {Object} action the values on how to update the state;
 * can be open, close, or swap for the type, and menu is the 
 * navigation element
 * @param {string} action.type
 * @param {HTMLDivElement} action.menu
 */
export const navChange = (navInfo, action) => {
   switch(action.type) {
      case 'open':
         return { hide: false, area: openedArea(action.menu) };
   
      case 'close':
         return { hide: true, area: closedArea() };
   
      case 'swap':
         return { hide: !navInfo.hide, area: navInfo.hide 
            ? closedArea()
            : openedArea(action.menu) };
   
      default:
         throw new Error();
   }
   };

/**
 * starting NavContext factory object
 * @param {boolean} hide 
 */
export const navStart = (hide) => (
   { hide, area: closedArea() }
);

/**
 * shows the current state of the navigation menu, mostly in 
 * context of mobile views; desktop navigation is always
 * opened
 */
export const NavContext = React.createContext(navStart(false));

