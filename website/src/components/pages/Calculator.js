import React, { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';

import { FadeWrap } from '../wraps/Transitions';
import { ContentWrap } from '../wraps/Styles';
import recycleData from '../../data/recycle-info.json';
import '../../App.css';

import Input from '../calc/Input';
import Results from '../calc/Results';
import About from '../calc/About';


export default function Calculator() {
   const [about, setAbout] = useState(false);
   const [enter, setEnter] = useState(false);
   const [inputs, setInputs] = useState(fieldStarts);
   const [results, setResults] = useState({});

   const toResults = () => {
      setResults(findTotals(inputs));
      setEnter(true);
   };
   const toBack = () => setEnter(false);
   const onAbout = () => setAbout(about => !about);

   return (
      <TransitionGroup>
         <FadeWrap active={about}>
            <ContentWrap>
               <About calc={onAbout}/>
            </ContentWrap>
         </FadeWrap>

         <FadeWrap active={!about && !enter}>
            <ContentWrap>
               <Input
                  inputs={inputs} setInputs={setInputs}
                  toResults={toResults} toAbout={onAbout}
               />
            </ContentWrap>
         </FadeWrap>

         <FadeWrap active={!about && enter}>
            <ContentWrap>
               <Results values={results} toAbout={onAbout} toBack={toBack}/>
            </ContentWrap>
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
