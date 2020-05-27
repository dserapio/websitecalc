import React, { useState, useEffect, useCallback } from 'react';

import {fieldNames, fieldStarts} from '../Calculator';
import '../../App.css';

const checkValue = (value) => {
   const num = +value;
   return Number.isInteger(num) && num>=0;
};

const Input = ({start, buffer, about}) => {
   const [inputs, setInputs] = useState({...start});
   const [valid, setValid] = useState(-1);

   const callBuffer = useCallback(buffer, []); //keep eye on

   const toAbout = () => {
      callBuffer(inputs, false); //save state, and come back
      about();
   }

   const handleChange = ({target}) => {
      setValid(-1); //reset check
      if (checkValue(target.value))
         setInputs(inputs => ({...inputs, [target.name]: target.value}));
   };

   const submitInput = (event) => {
      event.preventDefault();
      const allBlank = fieldNames.every(field => {
         let value = inputs[field];
         return value==='' || value===0
      });
      setValid(!allBlank ? 1 : 0);
   }

   const resetInput = () => {
      setValid(-1);
      setInputs(fieldStarts);
   }

   useEffect(() => {
      if (valid === 1) callBuffer(inputs);
   }, [valid, inputs, callBuffer]);


   return <>
      <div className="sidebar">
         <button type="button" onClick={toAbout}>About</button>
      </div>

      <section>
         <h1>Find Out Material Yields</h1>
         <p>Enter in any electronic, and we'll breakdown what it's made of</p>

         <form id="calc-input" onSubmit={submitInput} noValidate>
            {fieldNames.map((field, i) => (
               <NumField key={field+i} valid={valid} inputs={inputs} change={handleChange} name={field}/>
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
   </>
}

const NumField = ({name, valid, inputs, change}) => {
   const value = inputs[name];
   return <label>
      Total {name.concat(name[name.length-1]==='s' ? '' : 's')}
      {!valid && !checkValue(value) && <span className="error">Invalid value</span>}
      <input
         className="textfield"
         value={value} name={name} 
         onChange={change}
      />
   </label>
 }

 export default Input;