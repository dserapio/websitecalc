import React, { useState, useReducer, useEffect, useRef } from 'react';
import { TransitionGroup } from 'react-transition-group';

import { FadeWrap } from '../utils/Transitions';
import { ContentWrap } from '../utils/Styles';
import { convertObj } from '../utils/UnitConvert';
import recycleData from '../../data/recycle-info.json';
import '../../App.css';

import Input from '../calc/Input';
import Results from '../calc/Results';
import About from '../calc/About';


export default function Calculator() {
   const [flags, setFlags] = useState({
      about: false,
      enter: false,
      weight: false
   });
   const [unit, setUnit] = useState( convertObj('kg') );
   const [inputs, setInputs] = useReducer(setField, undefined, fieldStarts);
   const [results, setResults] = useState( {} );

   const defCheck = useRef();

   const tolbs = () => setUnit(convertObj('lbs'));
   const tokg = () => setUnit(convertObj('kg'));

   const toResults = () => {
      setResults( findTotals(
         flags.weight ? convertWeight(inputs) : inputs, 
         unit.convert
      ));
      setFlags(flags => ({...flags, enter: true}));
   };

   const toBack = () => 
      setFlags(flags => ({...flags, enter: false}))

   const swapWeight = () => 
      setFlags(flags => ({...flags, weight: !flags.weight}))

   const onAbout = () => 
      setFlags(flags => ({...flags, about: !flags.about}));


   useEffect(() => { //remove dependency on inputs
      defCheck.current = () =>
         Object.entries(inputs).reduce((accumObj, [field, fieldObj]) => (
            {...accumObj, [field]: fieldObj.weight}  
         ), {})
   }, [inputs]);

   useEffect(() => {
      if (!defCheck.current)
         return;
      const defaults = defCheck.current();
      recycleData.forEach(obj => { //keep eye on
         const field = obj.title;
         const weight = defaults[field];
         if (weight.value && weight.default) {
            setInputs({
               type: 'weight', 
               field: field, 
               value: obj.weight*unit.convert,
               default: true
            });
         }
      });
   }, [unit]);

   const {about, enter, weight} = flags;

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
                  unit={unit} tolbs={tolbs} tokg={tokg} 
                  toResults={toResults}
                  toAbout={onAbout}
               />
            </ContentWrap>
         </FadeWrap>

         <FadeWrap active={!about && enter}>
            <ContentWrap>
               <Results values={results} 
                  unit={unit} tolbs={tolbs} tokg={tokg} 
                  toAbout={onAbout} toBack={toBack}
               />
            </ContentWrap>
         </FadeWrap>

      </TransitionGroup>
    );
}

export const fieldNames = recycleData.map(data => data.title);

const fieldStarts = () => (
   recycleData.reduce((obj, data) => ({
      ...obj, [data.title]: {
         amount: '',
         boxes: '1',
         weight: {
            default: true,
            value: data.weight ? data.weight : ''
         }
      }
   }), {})
);


const setField = (inputs, action) => {
   switch(action.type) {
      case 'reset':
         return fieldStarts();

      case 'amount':
      case 'boxes':
         const obj = inputs[action.field];
         obj[action.type] = action.value;
         return {...inputs, [action.field]: obj};

      case 'weight':
         const wObj = inputs[action.field];
         wObj[action.type].value = action.value;
         if (!action.default)
            wObj[action.type].default = false;
         return {...inputs, [action.field]: wObj};

      default:
         throw new Error();
   }
}


const convertWeight = (convert) => (
   fieldNames.reduce((inputs, field) => {
      const fieldVals = inputs[field];
      fieldVals.amount = fieldVals.amount && fieldVals.weight
         ? parseInt(fieldVals.amount / fieldVals.weight)
         : fieldVals.amount;

      return inputs;
   }, convert)
);


const findTotals = (inputs, convert) => {
   const materialNames = Object.keys(recycleData[0]).filter((material) => (
      !(material==="id" || material==="title" || material==="weight")
   ));
   
   const totals = materialNames.reduce((obj, material) => (
      {...obj, [material] : 0}
   ), {});

   recycleData.forEach(obj => {
      const data = inputs[obj.title];
      const weight = convert * data.weight.value;

      const unitRatio = obj.weight && weight ? weight/obj.weight : 1;
      const amount = data.amount * unitRatio * data.boxes;

      materialNames.forEach(material => {
         totals[material] += obj[material] * amount;
      })
   });

   return totals;
};
