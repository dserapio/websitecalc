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
}

const pluralize = (str) => {
   const last = str[str.length-1];
   return str.concat(last==='s' || last===')' ? '' : 's');
};


const Input = ({inputs, setInputs, weight, swapWeight, toResults, toAbout}) => {
   const [valid, setValid] = useState(true);
   const [modAvg, setModAvg] = useState(false);
   const [boxes, setBoxes] = useState(false);


   const handleChange = ({target}) => {
      setValid(true); //reset
      if (checkPos(target.value)) {
         const name = target.name;
         const loc = name.indexOf('-');

         const field = name.substring(0, loc===-1 ? name.length : loc);
         const attr = name.substring(loc+1, name.length);

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

   const toggleMod = () => {
      setValid(true);
      setModAvg(mod => !mod);
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
            className={modAvg ? " active" : ""} type="button"
            onClick={toggleMod}>Set Avg. Weight</button>
         <button 
            className={boxes ? " active" : ""} type="button"
            onClick={toggleBox}># of Containers</button>
      </section>

      <section className="main">
         <h1>Find Out Material Yields</h1>
         <p>Enter in any electronic, and we'll breakdown what it's made of</p>

         <form id="calc-input" onSubmit={submitInput} noValidate>
            {fieldNames.map((field, i) => (
               <MaterialField key={field+i}
                  name={field} value={inputs[field]}
                  change={handleChange}
                  avg={modAvg} boxes={boxes}
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


const MaterialField = ({name, value, change, avg, boxes}) => <>
   <label>
      Total {pluralize(name)}
      <input
         className="textfield" 
         name={`${name}-amount`} 
         value={value.amount} 
         onChange={change}
      />
   </label>
   {avg && <label className="subfield">
      Average Weight Per {name}
      <input
         className="textfield" 
         name={`${name}-weight`} 
         value={value.weight} 
         onChange={change}
      />
   </label>}
   {boxes && <label className="subfield">
      Number of {pluralize(name)} Per Container
      <input
         className="textfield"
         name={`${name}-boxes`} 
         value={value.boxes} 
         onChange={change}
      />
   </label>}
</>

 export default Input;