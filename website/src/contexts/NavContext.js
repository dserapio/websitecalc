import React from 'react';

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
 * Shows the current state of the navigation menu, mostly in 
 * context of mobile views; desktop navigation is always
 * opened
 */
const NavContext = React.createContext(navStart(false));

export default NavContext;
