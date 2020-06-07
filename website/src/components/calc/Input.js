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
      const [field, attr] = parseTarget(target);

      if (store && !target.value) {
         setInputs({
            type: attr, field: field, 
            value: store, default: true
         });
      }
      setStore('');
   };

   const handleChange = ({target}) => {
      if (checkPos(target.value)) {
         const [field, attr] = parseTarget(target);

         if (attr!=='weight' && !checkInt(target.value))
            return; //extra check

         setInputs({
            type: attr,
            field: field,
            value: target.value
         });
      }
   };

   const submitInput = (event) => {
      event.preventDefault();
      const allBlank = fieldNames.every(field => {
         const amount = inputs[field].amount;
         return !(amount && amount>0);
      });

      if (allBlank)
         setValid(false);
      else 
         toResults();
   }

   const resetInput = () => {
      setValid(true);
      setInputs({type: 'reset', value: unit.convert});
   }

   const toggleBox = () => {
      setValid(true);
      setBoxes(box => !box);
   }

   return <>
      <section className="sidebar">
         <button type="button" onClick={toAbout}>About</button>
         <button 
            className={weight ? " active" : ""} type="button"
            onClick={swapWeight}>By Total Weight</button>
         <button 
            className={boxes ? " active" : ""} type="button"
            onClick={toggleBox}># of Containers</button>
         <button
            className={unit.name==='kg' ? "active" : ""}
            type="button" 
            onClick={tokg}>kg</button>
         <button
            className={unit.name==='lbs' ? "active" : ""}
            type="button"
            onClick={tolbs}>lbs</button>
      </section>

      <section className="main">
         <h1>Find Out Material Yields</h1>
         <p>Enter in any electronic, and we'll breakdown what it's made of</p>
         <p>Click the "About" button for more help on how to use the calculator</p>

         <form id="calc-input" onSubmit={submitInput} noValidate>
            {fieldNames.map((field, i) => (
               <MaterialField key={field+i}
                  name={field} value={inputs[field]}
                  weight={weight} boxes={boxes}
                  onChange={handleChange}
                  onFocus={fieldFocus} onBlur={fieldBlur}
               />
            ))}
         </form>

         <div className="submit">
            {!valid && <span className="error">All "Total" Fields are Empty or 0</span>}
            <div className="buttons">
               <input className="button" type="submit" form="calc-input" value="Calculate"/>
               <input className="button" type="button" onClick={resetInput} value="Reset"/>
            </div>
         </div>
      </section>
   </>;
};


const MaterialField = (props) => {
   const {
      name, value, weight, boxes, ...ons} = props;

   return (
      <div className="fields">
         <TextField
            label={`Total ${pluralize(name)}${weight ? " (Weight)" : ""}`}
            name={`${name}-amount`}
            value={value.amount} {...ons}
         />
         {!weight && 
            <TextField
               label="Average Weight"
               name={`${name}-weight`} subfield
               value={value.weight.value} {...ons}
            />}
         {boxes && 
            <TextField
               label="Number Per Container"
               name={`${name}-boxes`} subfield
               value={value.boxes.value} {...ons}
            />}
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
