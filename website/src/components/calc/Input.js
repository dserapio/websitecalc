import React, { useState } from 'react';
import {fieldNames, fieldStarts} from '../pages/Calculator';
import '../../App.css';


const checkValue = (value) => {
   const num = +value; //cast to num
   return Number.isInteger(num) && num>=0;
};

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
      if (checkValue(target.value)) {
         setInputs(inputs => { //more expensive?
            const name = target.name;
            const loc = name.indexOf('-');
            const field = name.substring(0, loc===-1 ? name.length : loc);
            const obj = inputs[field];

            if (name.includes("weight"))
               obj.weight = target.value;
            else if (name.includes("boxes"))
               obj.boxes = target.value;
            else
               obj.amount = target.value;

            return {...inputs, [target.name]: obj};
         });
      }
   };

   const submitInput = (event) => {
      event.preventDefault();
      const allBlank = fieldNames.every(field => {
         const value = inputs[field].amount;
         return value==='' || value==='0'
      });

      if (allBlank)
         setValid(false);
      else 
         toResults();
   }

   const resetInput = () => {
      setValid(true);
      setInputs(fieldStarts);
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
         name={name} 
         value={value.amount} 
         onChange={change}
      />
   </label>
   {avg && <label>
      Average Weight Per {name}
      <input
         className="textfield subfield" 
         name={`${name}-weight`} 
         value={value.weight} 
         onChange={change}
      />
   </label>}
   {boxes && <label>
      Number of {pluralize(name)} Per Container
      <input
         className="textfield subfield"
         name={`${name}-boxes`} 
         value={value.boxes} 
         onChange={change}
      />
   </label>}
</>

 export default Input;