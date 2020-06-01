import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../App.css';

/**
 * Wrapper to add fading animation to the children
 * @param {Object} props
 * @param {boolean} props.active
 * @param {JSX.Element} props.children
 */
export const FadeWrap = ( {active, children} ) => {
   const divRef = useRef(null);
   return ( 
      <CSSTransition
         in={active}
         nodeRef={divRef}
         timeout={350}
         classNames="fade"
         unmountOnExit
      >
         <div ref={divRef} className="trans">
            {children}
         </div>
      </CSSTransition>
   );
};

/**
 * Wrapper to add specified transition css animation to children
 * @param {Object} props
 * @param {boolean} props.active
 * @param {string} props.trans the transformation class to be used
 * @param {string} props.divClass the class of the div wrapper for the children
 * @param {JSX.Element} props.children
 */
export const TransWrap = ({active, trans, divClass, children}) => {
   const divRef = useRef(null);
   return (
      <CSSTransition
         in={active}
         nodeRef={divRef}
         timeout={350}
         classNames={trans}
         unmountOnExit
      >
         <div ref={divRef} className={divClass}>
            {children}
         </div>
      </CSSTransition>
   );
};