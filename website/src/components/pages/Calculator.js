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
   const [weight, setWeight] = useState(false);
   const [inputs, setInputs] = useState(fieldStarts);
   const [results, setResults] = useState({});

   const toResults = () => {
      setResults( weight
         ? findTotals( convertWeight(inputs) )
         : findTotals(inputs)
      );
      setEnter(true);
   };
   const swapWeight = () => setWeight(weight => !weight);
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
                  weight={weight} swapWeight={swapWeight}
                  toResults={toResults}
                  toAbout={onAbout}
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

export const fieldNames = recycleData.map(data => data.title);

export const fieldStarts = () => (
   recycleData.reduce((obj, data) => (
      {...obj, [data.title]: {
         amount: '',
         boxes: '1',
         weight: data.weight ? data.weight : ''
      }}
   ), {})
);

const convertWeight = (convert) => (
   fieldNames.reduce((inputs, field) => {
      const fieldVals = inputs[field];
      fieldVals.amount = fieldVals.amount && fieldVals.weight
         ? parseInt(fieldVals.amount / fieldVals.weight)
         : fieldVals.amount;

      return inputs;
   }, convert)
);

const findTotals = (inputs) => {
   const materialNames = Object.keys(recycleData[0]).filter((material) => (
      !(material==="id" || material==="title" || material==="weight")
   ));
   
   let totals = materialNames.reduce((obj, material) => (
      {...obj, [material] : 0}
   ), {});

   recycleData.forEach(obj => {
      const data = inputs[obj.title];
      const unitRatio = obj.weight && data.weight
         ? data.weight / obj.weight
         : 1;
      const amount = data.amount * unitRatio * data.boxes;

      materialNames.forEach(material => {
         totals[material] += obj[material] * amount;
      })
   });

   return totals;
};
