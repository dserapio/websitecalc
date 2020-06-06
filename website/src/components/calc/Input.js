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

      if ( !(fieldVal.value && fieldVal.default) )
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
      const allBlank = fieldNames.every(field => (
         !inputs[field].amount
      ));

      if (allBlank)
         setValid(false);
      else 
         toResults();
   }

   const resetInput = () => {
      setValid(true);
      setInputs({type: 'reset'});
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
         <p>
            By default, you enter in the the total of individual electronics.
            Clicking "By Total Weight" you can choose to enter the total weight
            of each of the electronics
         </p>

         <p>
            "Set Avg. Weight" brings out a new field where you enter the 
            average weight of each of the electronics. "# of Containers" also 
            brings out a new field where you enter the number of that electronic
            can fit into a specific container.
         </p>

         <form id="calc-input" onSubmit={submitInput} noValidate>
            {fieldNames.map((field, i) => (
               <MaterialField key={field+i}
                  name={field} value={inputs[field]}
                  change={handleChange}
                  weight={weight} boxes={boxes}
                  focus={fieldFocus} blur={fieldBlur}
               />
            ))}
         </form>

         <div className="submit">
            {!valid && <span className="error">All Fields are Empty or 0</span>}
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
      name, value,
      weight, boxes, 
      change, focus, blur} = props;

   return (
      <div className="fields">
         <label>
            Total {pluralize(name)} {weight && "(Weight)"}
            <input
               className="textfield" 
               name={`${name}-amount`} 
               value={value.amount} 
               onChange={change}
               onFocus={focus}
               onBlur={blur}
            />
         </label>
         {!weight && <label className="subfield">
            Average Weight
            <input
               className="textfield" 
               name={`${name}-weight`} 
               value={value.weight.value} 
               onChange={change}
               onFocus={focus}
               onBlur={blur}
            />
         </label>}
         {boxes && <label className="subfield">
            Number Per Container
            <input
               className="textfield"
               name={`${name}-boxes`} 
               value={value.boxes} 
               onChange={change}
               onFocus={focus}
               onBlur={blur}
            />
         </label>}
      </div>
   );
};
