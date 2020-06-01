import React, { useEffect, useMemo } from 'react';
import { Route, matchPath, withRouter } from 'react-router-dom';

import { TransWrap } from './wraps/Transitions';
import Home from './pages/Home';
import Information from './pages/Info';
import Calculator from './pages/Calculator';
import FindRecycler from './pages/FindRecycler';
import Error from './pages/Error';
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

   const divClass = (rel, fill) => {
      let ret = "";
      if (rel)
         ret = ret.concat(" rel");
      //if (fill)
      //   ret = ret.concat(" fill");
      return ret;
   }

   useEffect(() => {
      document.title = `e-Stewards - ${linkNames[path]}`;
   }, [linkNames, path]);

   return <>
      {Object.entries(paths).map(( [path, {Comp, trans, rel, fill}] ) => (
         <Route key={path} exact path={path}>
            {() => ( //will always render
               <TransWrap 
                  active={Comp===matchComp} trans={trans} 
                  divClass={divClass(rel, fill)}
               >
                  <Comp/>
               </TransWrap>
            )}
         </Route>
      ))}
   </>;
};


export const paths = {
   "/": {
      Comp: Home, trans: "zoom", rel: true, fill: false },
   "/information": {
      Comp: Information, trans: "fade", rel: true, fill: true },
   "/calculator": {
      Comp: Calculator, trans: "fade", rel: true, fill: true },
   "/find-recycler": {
      Comp: FindRecycler, trans: "fade", rel: false, fill: true },
   "/error": {
      Comp: Error, trans: "fade", rel: true, fill: false }
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
