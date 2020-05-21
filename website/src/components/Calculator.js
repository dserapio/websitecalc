import React, { useState } from 'react';
import '../App.css';

const fieldNames = ["Laptop", "Desktops", "LCD", "Phones", "Image", "Others"];
const fieldLabels = [
   "Total laptops",
   "Total Desktops and Servers",
   "Total Flat Panel Displays (LCDs)",
   "Total Mobile Phones",
   "Total Imaging Devices",
   "Total Others(Mice, Keyboards, etc.)"
];

const fieldStarts = () => (
   fieldNames.reduce((obj, name) => ({...obj, [name]: ''}), {})
);

export default function Calculator() {
   const [about, setAbout] = useState(false);
   const [enter, setEnter] = useState(false);
   const [inputs, setInputs] = useState(fieldStarts);
   const [results, setResults] = useState({});

   const bufferInput = (newInputs, leave=true) => {
      setInputs(newInputs);
      if (leave) {
         //calculate based on inputs
         let value = newInputs; //temp
         setResults(value);
         setEnter(true);
      }
   };
   const back = () => {
      setInputs(fieldStarts);
      setEnter(false);
   }
   const onAbout = () => setAbout(about => !about);

   return (
      <div className="content">
         {about && <About calc={onAbout}/>}
         {!about && !enter && <Input about={onAbout} buffer={bufferInput} start={inputs}/>}
         {!about && enter && <Results about={onAbout} back={back} values={results}/>}
      </div>
    );
}


const Input = ({start, buffer, about}) => {
   const [inputs, setInputs] = useState({...start});
   const [valid, setValid] = useState(true);

   const toAbout = () => {
      buffer(inputs, false); //save state, and come back
      about();
   }

   const handleChange = ({target}) => {
      setValid(true); //reset check
      setInputs({...inputs, [target.name]: target.value})
   };

   const submitInput = () => {
      const res = fieldNames.every(field => {
         const value = inputs[field];
         return value && value>=0;
      });
      setValid(res);
      if (res) buffer(inputs);
   }

   const resetInput = () => {
      setValid(true);
      setInputs(fieldStarts);
   }

   return <>
      <div className="sidebar">
         <button className="page-link" type="button" onClick={toAbout}>About</button>
      </div>

      <section>
         <h1>Find Out Material Yields</h1>
         <p>Enter in any electronic, and we'll breakdown what it's made of</p>
         <form>
            {fieldNames.map((field, i) => (
               <NumField key={field + i} valid={valid} inputs={inputs} change={handleChange} name={field} label={fieldLabels[i]}/>
            ))}
         </form>

         <div className="submit">
            {!valid && <span className="error">Missing required fields</span>}
            <button type="button" onClick={submitInput}>Calculate</button>
            <button type="button" onClick={resetInput}>Reset</button>
         </div>
      </section>
   </>
}

const NumField = ({name, label, valid, inputs, change}) => {
   const value = inputs[name];
   return <label>
      {label}
      {!valid && !value && <span className="error">Missing required field</span>}
      {!valid && value<0 && <span className="error">Invalid value</span>}
      <input
         className="textfield"
         type="number" value={value} min={0} name={name} 
         onChange={change}
      />
   </label>
}

const Results = (props) => (
   //use props.values
   <>
      <div className="sidebar">
         <button className="page-link" type="button" onClick={props.about}>About</button>
      </div>

      <section>
         <h1>Calculated Totals</h1>
         <p>1,305,750,960.06 lbs.</p>
         <p>GHG Emissions Reduced</p>

         <p>510,566.48 lbs.</p>
         <p>Total Metals Diverted</p>

         <p>509,222.72 lbs.</p>
         <p>of Lead</p>

         <p>333.92 lbs.</p>
         <p>of Mercury</p>

         <p>946.4 lbs.</p>
         <p>of Arsenic</p>

         <p>63.44 lbs.</p>
         <p>of Cadmium</p>

         <p>138,027,019.96 lbs.</p>
         <p>Total (Metals)</p>
         <button type="button" onClick={props.back}>Back</button>
      </section>
   </>
);

const About = (props) => (
   <>
      <div className="sidebar">
         <button className="page-link" type="button" onClick={props.calc}>Calculator</button>
      </div>
      
      <section>
         <h1>About the Calculator</h1>
         <p>
            Welcome to the e-Stewards Global Impact Calculator. This tool is designed to estimate
            the environmental benefits of recycling your electronic waste with e-Stewards Certified Recyclers.
         </p>
         <h2>The environmental benefits are measured in three critical areas:</h2>
         <ol>
            <li>Green house gas avoidance</li>
            <li>Toxic metals diverted from export, dumping or disposal</li>
            <li>Valuable metals diverted from landfill or disposal</li>
         </ol>
         <p>These figures can be used to demonstrate and measure individual or corporate responsibility</p>
      </section>
   </>
);
