import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Input from './calc/Input';
import Results from './calc/Results';
import About from './calc/About';
import recycleData from '../data/recycle-info.json';
import '../App.css';


export default function Calculator() {
   const [about, setAbout] = useState(false);
   const [enter, setEnter] = useState(false);
   const [inputs, setInputs] = useState(fieldStarts);
   const [results, setResults] = useState({});

   const toResults = () => {
      setResults(findTotals(inputs));
      setEnter(true);
   }
   const toBack = () => setEnter(false);
   const onAbout = () => setAbout(about => !about);

   return (
      <TransitionGroup>
         <FadeWrap check={about}>
            <About calc={onAbout}/>
         </FadeWrap>

         <FadeWrap check={!about && !enter}>
            <Input inputs={inputs} setInputs={setInputs} toResults={toResults} toAbout={onAbout}/>
         </FadeWrap>

         <FadeWrap check={!about && enter}>
            <Results values={results} toAbout={onAbout} toBack={toBack}/>
         </FadeWrap>

      </TransitionGroup>
    );
}

export const fieldNames = recycleData.map(obj => obj.title);

export const fieldStarts = () => (
   fieldNames.reduce((obj, name) => ({...obj, [name]: ''}), {})
);

const findTotals = (inputs) => {
   const materialNames = Object.keys(recycleData[0]).filter((material) => (
      material!=="id" && material!=="title"
   ));

   let totals = materialNames.reduce((obj, material) => (
      {...obj, [material] : 0}
   ), {});

   recycleData.forEach(obj => {
      const title = obj.title;
      const amount = inputs[title];
      materialNames.forEach(material => {
         totals[material] += obj[material] * amount;
      })
   });
   return totals;
};

const FadeWrap = ( {check, children} ) => (
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
