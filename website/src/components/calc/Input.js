import React, { useState } from 'react';
import {fieldNames, fieldStarts} from '../pages/Calculator';
import '../../App.css';


const checkValue = (value) => {
   const num = +value; //cast to num
   return Number.isInteger(num) && num>=0;
};

const Input = ({inputs, setInputs, toResults, toAbout}) => {
   const [valid, setValid] = useState(true);
   const [weight, setWeight] = useState(false);

   const handleChange = ({target}) => {
      setValid(true); //reset
      
      if (checkValue(target.value)) {
         setInputs(inputs => { //more expensive?
            const obj = inputs[target.name];
            obj.amount = target.value;
            return {...inputs, [target.name]: obj};
         });
      }
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

   const toggleForm = () => setWeight(weight => !weight);

   return <>
      <section className="sidebar">
         <button type="button" onClick={toAbout}>About</button>
         <button 
            className={weight ? " active" : ""}
            type="button"
            onClick={toggleForm}>By Total Weight</button>
      </section>

      <section className="main">
         <h1>Find Out Material Yields</h1>
         <p>Enter in any electronic, and we'll breakdown what it's made of</p>

         <form id="calc-input" onSubmit={submitInput} noValidate>
            {fieldNames.map((field, i) => (
               <label key={field+i}>
                  Total {field.concat(field[field.length-1]==='s' || field[field.length-1]===')' ? '' : 's')}
                  <input
                     className="textfield" 
                     name={field} 
                     value={inputs[field].amount} 
                     onChange={handleChange}
                  />
               </label>
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

 export default Input;