import React, { useEffect, useMemo } from 'react';
import { Route, matchPath, useLocation } from 'react-router-dom';

import Calculator from './pages/Calculator';
import About from './pages/About';

import { TransDiv } from './utils/Transitions';
import { siteName } from '../App';
import '../App.css';


export default function Pages() {
   const linkNames = useMemo(() => {
      const links = Object.keys(paths);
      return pathNames()
         .reduce((obj, name, i) => ({...obj, [links[i]]: name}), {});
   }, []);
   
   const urlPaths = useMemo(urls, []);
   const location = useLocation();

   //find valid route before for name for title
   const valid = Object.entries(urlPaths).reduce((match, [path, {exact}]) => (
      match || matchPath(location.pathname, {path, exact})
   ), false);

   console.log(`is valid ${valid}`)
   const path = valid ? urlPaths[valid.path].name : "/";
   const matchComp = paths[path].Comp;

   useEffect(() => {
      document.title = `e-Stewards - ${linkNames[path]}`;
   }, [linkNames, path]);

   return <>
      {Object.entries(paths).map(( [path, {Comp, trans, rel}] ) => (
         <Route key={path} exact path={path}>
            {() => ( //will always render
               <TransDiv 
                  in={Comp===matchComp} classNames={trans} 
                  divClass={rel ? "rel" : ""}
               >
                  <Comp />
               </TransDiv>
            )}
         </Route>
      ))}
   </>;
};


const paths = {
   "/": {
      Comp: Calculator, trans: "fade", rel: true, exact: true },
   "/about": {
      Comp: About, trans: "fade", rel: true, exact: true }
};

export const toUrl = (path) => `${siteName}${path}`;

export const urls = () => (
   Object.entries(paths)
      .map(([path, {exact}]) => [toUrl(path), path, exact])
      .reduce((obj, [url, name, exact]) => (
         {...obj, [url]: {name, exact}}
      ), {})
);

export const pathNames = () => (
   Object.keys(paths)
      .map(name => name.replace('/', ''))
      .map(name => name==="" ? "calculator" : name)
      .map(name => name.replace('-', ' '))
      .map(name => name.replace(/ ([a-z])/, r => r.toUpperCase()))
      .map(name => name.replace(/^./, f => f.toUpperCase()))
);
