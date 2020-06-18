import React, { useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../../App.css';

/**
 * Wrapper to add fading animation to the children
 * @param {Object} props
 * @param {boolean} props.active
 * @param {JSX.Element} props.children
 */
export const FadeWrap = ({children, ...transProps} ) => {
   const divRef = useRef(null);
   return ( 
      <CSSTransition
         nodeRef={divRef}
         timeout={350}
         classNames="fade"
         unmountOnExit
         {...transProps}
      >
         <div ref={divRef} className="rel">
            {children}
         </div>
      </CSSTransition>
   );
};

/**
 * Wrapper to add specified transition css animation to children
 * @param {Object} props
 * @param {string} props.divClass the class of the div wrapper for the children
 * @param {JSX.Element} props.children
 */
export const TransWrap = ({divClass, children, ...transProps}) => {
   const divRef = useRef(null);
   return (
      <CSSTransition
         nodeRef={divRef}
         timeout={250}
         unmountOnExit
         {...transProps}
      >
         <div ref={divRef} className={divClass}>
            {children}
         </div>
      </CSSTransition>
   );
};

export const TransSpan = ({children, ...transProps}) => {
   const spanRef = useRef(null);
   return (
      <SwitchTransition>
         <CSSTransition
            key={children}
            nodeRef={spanRef}
            timeout={200}
            {...transProps}
         >
            <span ref={spanRef}>{children}</span>
         </CSSTransition>
      </SwitchTransition>
   )
};