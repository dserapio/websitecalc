import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../App.css';

export const FadeWrap = ( {check, children} ) => (
   <CSSTransition
      in={check}
      timeout={350}
      classNames="fade"
      unmountOnExit
   >
      <div className="trans">
         {children}
      </div>
   </CSSTransition>
);