import React, { useState } from 'react';
import {fieldNames, fieldStarts} from '../Calculator';
import '../../App.css';


const checkValue = (value) => {
   const num = +value; //cast to num
   return Number.isInteger(num) && num>=0;
};

const Input = ({inputs, setInputs, toResults, toAbout}) => {
   const [valid, setValid] = useState(true);

   const handleChange = ({target}) => {
      setValid(true); //reset
      if (checkValue(target.value))
         setInputs(inputs => ({...inputs, [target.name]: target.value}));
   };

   const submitInput = (event) => {
      event.preventDefault();
      const allBlank = fieldNames.every(field => {
         const value = inputs[field];
         return value==='' || value==='0'
      });

      if (!allBlank)
         toResults();
      else
         setValid(false);
   }

   const resetInput = () => {
      setValid(true);
      setInputs(fieldStarts);
   }

   const toggleForm = () => {};

   return <>
      <section className="sidebar">
         <button type="button" onClick={toAbout}>About</button>
         <button type="button" onClick={toggleForm}>With Quantities</button>
      </section>

      <section className="main">
         <h1>Find Out Material Yields</h1>
         <p>Enter in any electronic, and we'll breakdown what it's made of</p>

         <form id="calc-input" onSubmit={submitInput} noValidate>
            {fieldNames.map((field, i) => (
               <NumField key={field+i} name={field} value={inputs[field]} change={handleChange}/>
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
}

const NumField = ({name, value, change}) => (
   <label>
      Total {name.concat(name[name.length-1]==='s' || name[name.length-1]===')' ? '' : 's')}
      <input className="textfield" value={value} name={name} onChange={change}/>
   </label>
);

 export default Input;