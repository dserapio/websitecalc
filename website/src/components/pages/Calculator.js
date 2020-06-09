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
   const [flags, setFlags] = useState({ about: false, enter: false, weight: false });
   const [unit, setUnit] = useState( convertObj('kg') );
   const [inputs, setInputs] = useReducer(setField, undefined, fieldStarts);
   const [results, setResults] = useState( {} );
   
   const defCheck = useRef();


   const tolbs = () => setUnit(convertObj('lbs'));
   const tokg = () => setUnit(convertObj('kg'));

   const toResults = () => {
      setResults(findTotals(inputs, unit.convert, flags.weight));
      setFlags(flags => ({...flags, enter: true}));
   };

   const toBack = () => 
      setFlags(flags => ({...flags, enter: false}))

   const swapWeight = () => 
      setFlags(flags => ({...flags, weight: !flags.weight}))

   const onAbout = () => 
      setFlags(flags => ({...flags, about: !flags.about}));


   //remove dependency on inputs
   useEffect(() => {
      defCheck.current = () => (
         Object.entries(inputs).reduce((accumObj, [field, fieldObj]) => (
            {...accumObj, [field]: fieldObj.weight}  
         ), {})
      );
   }, [inputs]);

   //update default weight values when unit changed
   useEffect(() => {
      const defaults = defCheck.current();
      recycleData.forEach(data => {
         const field = data.title;
         const weight = defaults[field];

         if (weight.value && weight.default)
            setInputs({
               type: 'weight', 
               field, 
               value: data.weight*unit.convert,
               default: true
            });
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

const fieldStarts = (convert=1) => (
   recycleData.reduce((obj, data) => ({
      ...obj, [data.title]: {
         amount: '',
         boxes: {
            default: true,
            value: '1'
         },
         weight: {
            default: true,
            value: data.weight ? data.weight*convert : ''
         }
      }
   }), {})
);


const setField = (inputs, action) => {
   switch(action.type) {
      case 'reset':
         return action.value
            ? fieldStarts(action.value)
            : fieldStarts();

      case 'amount':
         const aObj = inputs[action.field];
         aObj[action.type] = action.value;
         return {...inputs, [action.field]: aObj};

      case 'boxes':
      case 'weight':
         const obj = inputs[action.field];
         obj[action.type].value = action.value;
         obj[action.type].default = action.default;
         return {...inputs, [action.field]: obj};

      default:
         throw new Error();
   }
}


const findTotals = (inputs, convert, weightAmount=false) => {
   
   const materialNames = Object.keys(recycleData[0]).filter((material) => (
      !(material==="id" || material==="title" || material==="weight")
   ));
   
   const totals = materialNames.reduce((obj, material) => (
      {...obj, [material] : 0}
   ), {});

   recycleData.forEach(data => {
      const obj = inputs[data.title];
      const weight = obj.weight.value;

      const amount = weightAmount && weight //temporary
         ? obj.amount / weight
         : obj.amount;
      const unitRatio = data.weight //temporary
         ? weight / (convert*data.weight)
         : 1;
      const materialAmnt= amount * unitRatio * obj.boxes.value;

      materialNames.forEach(material => {
         totals[material] += data[material] * materialAmnt;
      })
   });

   return totals;
};
