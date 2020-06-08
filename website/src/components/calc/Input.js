import React, { useState } from 'react';
import { fieldNames } from '../pages/Calculator';
import '../../App.css';


const checkInt = (value) => {
   const num = +value; //cast to num
   return Number.isInteger(num) && num>=0;
};

const checkPos = (value) => {
   const num = +value;
   return num>=0;
};

const parseTarget = (target) => {
   const name = target.name;
   const loc = name.indexOf('-');
   const field = name.substring(0, loc===-1 ? name.length : loc);
   const attr = name.substring(loc+1, name.length);
   return [field, attr];
};

const pluralize = (str) => {
   const last = str[str.length-1];
   return str.concat(last==='s' || last===')' ? '' : 's');
};


export default function Input (props) {
   const {
      inputs, setInputs, toResults,
      weight, swapWeight, toAbout,
      unit, tolbs, tokg } = props;

   const [valid, setValid] = useState(true);
   const [avg, setAvg] = useState(true);
   const [boxes, setBoxes] = useState(false);
   const [store, setStore] = useState('');


   const fieldFocus = ({target}) => { //clear default
      setValid(true);
      const [field, attr] = parseTarget(target);
      const fieldVal = inputs[field][attr];

      if (!fieldVal.value || !fieldVal.default)
         return;

      setStore(fieldVal.value);
      setInputs({type: attr, field: field, value: ''});
   };

   const fieldBlur = ({target}) => {
      if (store && !target.value) {
         const [field, attr] = parseTarget(target);
         setInputs({
            type: attr, field: field, 
            value: store, default: true
         });
      }
      setStore('');
   };

   const handleChange = ({target}) => {
      if (!checkPos(target.value))
         return;

      const [field, attr] = parseTarget(target);

      if (attr!=='weight' && !checkInt(target.value))
         return; //extra check

      setInputs({
         type: attr,
         field: field,
         value: target.value
      });
   };

   const submitInput = (event) => {
      event.preventDefault();
      const allBlank = fieldNames.every(field => {
         const amount = inputs[field].amount;
         return !(amount && amount>0);
      });

      const allWeights = fieldNames.reduce((res, field) => {
         const weight = inputs[field].weight.value;
         return res && Boolean(weight) && weight>0;
      }, true);

      if (allBlank)// || !allWeights)
         setValid(false);
      else 
         toResults();
   }

   const resetInput = () => {
      setValid(true);
      setInputs({type: 'reset', value: unit.convert});
   }

   const toggleAvg = () => {
      setValid(true);
      setAvg(avg => !avg);
   }

   const toggleBox = () => {
      setValid(true);
      setBoxes(box => !box);
   }

   return <>
      <section className="sidebar">
         <div className="button-group">
            <button type="button" onClick={toAbout}>About</button>
            <button 
               className={avg ? " active" : ""} type="button"
               onClick={toggleAvg}>Set Avg. Weight</button>
            <button 
               className={boxes ? " active" : ""} type="button"
               onClick={toggleBox}># of Containers</button>
         </div>

         <div className="button-group">
            <button 
               className={weight ? " active" : ""} type="button"
               onClick={swapWeight}>By Total Weight</button>
            <button
               className={unit.name==='kg' ? "active" : ""}
               type="button" 
               onClick={tokg}>kg</button>
            <button
               className={unit.name==='lbs' ? "active" : ""}
               type="button"
               onClick={tolbs}>lbs</button>
         </div>
      </section>

      <section className="main">
         <h1>Find Out Material Yields</h1>
         <p>Enter in any electronic, and we'll breakdown what it's made of.</p>
         <p>Click the "About" button for more help on how to use the calculator.</p>

         <form id="calc-input" onSubmit={submitInput} noValidate>
            {fieldNames.map((field, i) => (
               <MaterialField key={field+i}
                  name={field} value={inputs[field]}
                  weight={weight} avg={avg} boxes={boxes}
                  unit={unit.name}
                  onChange={handleChange} onFocus={fieldFocus} onBlur={fieldBlur}
               />
            ))}
         </form>

         <div className="submit">
            <div className="buttons">
               <input className="button" type="submit" form="calc-input" value="Calculate"/>
               <input className="button" type="button" onClick={resetInput} value="Reset"/>
            </div>
            {!valid && <span className="error">
               Require at least one "Total" field and all "Average Weight" fields not zero
            </span>}
         </div>
      </section>
   </>;
};


const MaterialField = (props) => {
   const {
      name, value, unit, weight, avg, boxes, ...ons} = props;

   return (
      <div className="fields">
         <TextField
            label={`Total ${pluralize(name)}${weight ? ` (${unit})` : ""}`}
            name={`${name}-amount`}
            value={value.amount}
            {...ons}
         />
         <div className="subfields">
            {avg && 
               <TextField
                  label={`Average Weight (${unit})`}
                  name={`${name}-weight`} subfield
                  value={value.weight.value}
                  {...ons}
               />}
            {boxes && 
               <TextField
                  label="Number Per Container"
                  name={`${name}-boxes`} subfield
                  value={value.boxes.value}
                  {...ons}
               />}
         </div>
      </div>
   );
};

const TextField = ({label, subfield, ...input}) => (
   <div className={"text-container".concat(subfield ? " subfield" : "")}>
      <label> 
         {label}
         <input className="textfield" {...input}/>
      </label>
   </div>
)
