import React from 'react';
import { Route, matchPath, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Home from './Home';
import Information from './Info';
import Calculator from './Calculator';
import FindRecycler from './FindRecycler';
import Error from './Error';
import '../App.css';


export const paths = {
    "/": Home,
    "/information": Information,
    "/calculator": Calculator,
    "/find-recycler": FindRecycler,
    "/error": Error
};

const Pages = () => {
   const currLoc = useLocation();

   const valid = Object.keys(paths).reduce((accum, path) => (
      accum || matchPath(currLoc.pathname, {path: path, exact: true})
   ), false);

   const comp = valid ? paths[valid.path] : paths["/error"];
   const trans = comp===Home ? "zoom" : "fade";
   const pos = comp!==FindRecycler ? "trans" : "";

   return (<>
      {Object.entries(paths).map( ( [path, Component] ) => (
         <Route key={path} exact path={path}>
            {() => (
               <CSSTransition
                  in={Component===comp}
                  timeout={350}
                  classNames={trans}
                  unmountOnExit
               >
                  <div className={pos}>
                     <Component />
                  </div>
               </CSSTransition>
            )}
         </Route>
      ))}
   </>);
};

export default Pages;
