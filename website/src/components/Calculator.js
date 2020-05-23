import React, { useState, useEffect } from 'react';
import '../App.css';
import recycleData from '../data/recycle-info.json';


const fieldNames = recycleData.map(obj => obj.title);

const fieldStarts = () => (
   fieldNames.reduce((obj, name) => ({...obj, [name]: ''}), {})
);

let unit = 1;
const findTotals = (inputs) => {
   const materialNames = Object.keys(recycleData[0]).filter((material) => (
      material!=="id" && material!=="title"
   ));

   let totals = materialNames.reduce((obj, material) => (
      {...obj, [material] : 0}
   ), {});

   recycleData.forEach(obj => {
      const title = obj.title;
      const amount = inputs[title];
      materialNames.forEach(material => {
         totals[material] += (obj[material] * amount) * unit;
      })
   });
   return totals;
};

export default function Calculator() {
   const [about, setAbout] = useState(false);
   const [enter, setEnter] = useState(false);
   const [inputs, setInputs] = useState(fieldStarts);
   const [results, setResults] = useState({});

   const bufferInput = (newInputs, leave=true) => {
      setInputs(newInputs);
      if (leave) {
         //calculate based on inputs
         setResults(findTotals(newInputs));
      }
   };
   const back = () => {
      setInputs(fieldStarts);
      setEnter(false);
   }
   const onAbout = () => setAbout(about => !about);

   useEffect(() => {
      if (Object.keys(results).length > 0)
         setEnter(true);
   }, [results]);

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
   const [valid, setValid] = useState(-1);

   const toAbout = () => {
      buffer(inputs, false); //save state, and come back
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

   const changeToKg = () => {
      unit = 1;
   }

   const changeToLbs = () => {
      unit = 2.205;
   }

   useEffect(() => {
      if (valid === 1) buffer(inputs);
   }, [valid, buffer, inputs]);


   return <>
      <div className="sidebar">
         <button className="page-link" type="button" onClick={toAbout}>About</button>
      </div>

      <section>
         <h1>Find Out Material Yields</h1>
         <p>Enter in any electronic, and we'll breakdown what it's made of</p>
         <form>
            {fieldNames.map((field, i) => (
               <NumField key={field + i} valid={valid} inputs={inputs} change={handleChange} name={field}/>
            ))}
         </form>

         <div className="submit">
            {!valid && <span className="error">Missing required fields</span>}
            <div className="buttons">
               <button className="page-link" type="button" onClick={submitInput}>Calculate</button>
               <button className="page-link" type="button" onClick={resetInput}>Reset</button>
               <button className="page-link" type="button" onClick={changeToKg}>kg.</button>
               <button className="page-link" type="button" onClick={changeToLbs}>lbs.</button>
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

const Results = (props) => (
   <>
      <div className="sidebar">
         <button className="page-link" type="button" onClick={props.about}>About</button>
      </div>

      <section>
         <h1>Total Material Yields</h1>
         <table>
            <thead>
               <tr>
                  <th className="output">Material</th>
                  <th className="output">Amount Yield (kg)</th>
               </tr>
            </thead>
            <tbody>
            {Object.entries(props.values).map(([name, value], i) => (
               <tr key={name+i}>
                  <td className="output">{name}</td>
                  <td className="output-value">{value} kg</td>
               </tr>
            ))}
            </tbody>
         </table>
         <button className="page-link" type="button" onClick={props.back}>Back</button>
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
