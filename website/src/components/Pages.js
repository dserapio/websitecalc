import React, { useEffect, useMemo } from 'react';
import { Route, matchPath, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Home from './Home';
import Information from './Info';
import Calculator from './Calculator';
import FindRecycler from './FindRecycler';
import Error from './Error';
import '../App.css';


const Pages = ({location}) => {
   const linkNames = useMemo(() => {
      const links = Object.keys(paths);
      return pathNames()
         .reduce((obj, name, i) => ({...obj, [links[i]]: name}), {});
   }, []);
   
   //find valid route before for name for title
   const valid = Object.keys(paths).reduce((match, path) => (
      match || matchPath(location.pathname, {path: path, exact: true})
   ), false);

   const path = valid ? valid.path : "/error";
   const matchComp = paths[path].Comp;

   useEffect(() => {
      document.title = `e-Stewards - ${linkNames[path]}`;
   }, [linkNames, path]);

   return (
      <>
         {Object.entries(paths).map(( [path, {Comp, trans, pos}] ) => (
            <Route key={path} exact path={path}>
               {() => ( //will always render
                  <CSSTransition
                     in={Comp===matchComp}
                     timeout={350}
                     classNames={trans}
                     unmountOnExit
                  >
                     <div className={pos ? "trans" : ""}>
                        <Comp />
                     </div>
                  </CSSTransition>
               )}
            </Route>
         ))}
      </>
   );
};

export const paths = {
   "/": {
      Comp: Home, trans: "zoom", pos: true },
   "/information": {
      Comp: Information, trans: "fade", pos: true },
   "/calculator": {
      Comp: Calculator, trans: "fade", pos: true },
   "/find-recycler": {
      Comp: FindRecycler, trans: "fade", pos: false },
   "/error": {
      Comp: Error, trans: "fade", pos: true }
};

export const pathNames = () => (
   Object.keys(paths)
      .filter(path => path!=="/error")
      .map(name => name.replace('/', ''))
      .map(name => name==="" ? "home" : name)
      .map(name => name.replace('-', ' '))
      .map(name => name.replace(/ ([a-z])/, r => r.toUpperCase()))
      .map(name => name.replace(/^./, f => f.toUpperCase()))
);

export default withRouter(Pages);
