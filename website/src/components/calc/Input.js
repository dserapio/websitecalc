import React, { useState, useEffect, useCallback } from 'react';

import {fieldNames, fieldStarts} from '../Calculator';
import '../../App.css';


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
       setInputs({...inputs, [target.name]: target.value})
    };
 
    const submitInput = () => {
       const res = fieldNames.every(field => {
          const value = inputs[field];
          return value && value>=0;
       });
       setValid(res ? 1 : 0);
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
          <form>
             {fieldNames.map((field, i) => (
                <NumField key={field+i} valid={valid} inputs={inputs} change={handleChange} name={field}/>
             ))}
          </form>
 
          <div className="submit">
             {!valid && <span className="error">Invalid Input Given</span>}
             <div className="buttons">
                <button type="button" onClick={submitInput}>Calculate</button>
                <button type="button" onClick={resetInput}>Reset</button>
             </div>
          </div>
       </section>
    </>
}

const NumField = ({name, valid, inputs, change}) => {
    const value = inputs[name];
    return <label>
       Total {name.concat(name[name.length-1]==='s' ? '' : 's')}
       {!valid && !value && <span className="error">Missing required field</span>}
       {!valid && value<0 && <span className="error">Invalid value</span>}
       <input
          className="textfield"
          type="number" value={value} min={0} name={name} 
          onChange={change}
       />
    </label>
 }

 export default Input;