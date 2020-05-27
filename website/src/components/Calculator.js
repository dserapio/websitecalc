import React, { useState, useEffect } from 'react';
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

   const bufferInput = (newInputs, leave=true) => {
      setInputs(newInputs);
      if (leave) {
         //calculate based on inputs
         setResults(findTotals(newInputs));
      }
   };
   const back = () => {
      //setInputs(fieldStarts);
      setResults({});
      setEnter(false);
   }
   const onAbout = () => setAbout(about => !about);

   useEffect(() => {
      if (Object.keys(results).length > 0)
         setEnter(true);
   }, [results]);

   return (
      <div className="content">
         <TransitionGroup>
            <FadeWrap
               check={about}
               comp={() => <About calc={onAbout}/>}
            />
            <FadeWrap
               check={!about && !enter}
               comp={() => <Input about={onAbout} buffer={bufferInput} start={inputs}/>}
            />
            <FadeWrap 
               check={!about && enter}
               comp={() => <Results about={onAbout} back={back} values={results}/>}
            />
         </TransitionGroup>
      </div>
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

const FadeWrap = ( {check, comp} ) => (
   <CSSTransition
      in={check}
      timeout={350}
      classNames="fade"
      unmountOnExit
   >
      <div className="trans">
         {comp()}
      </div>
   </CSSTransition>
);
