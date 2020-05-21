import React, { useState } from 'react';
import '../App.css';
 
export default function Calculator() {
   const [enter, setEnter] = useState(false);
   const [about, setAbout] = useState(false);
   const [results, setResults] = useState({});

   const calculate = (inputs) => {
      //calculate based on inputs
      let value = inputs; //temp
      setResults(value);
      setEnter(true);
   };
   const back = () => setEnter(false);
   const onAbout = () => setAbout(about => !about);

   const aboutBut = <button className="page-link" type="button" onClick={onAbout}>About</button>;

   return (
      <div className="content">
         {about && <About funct={onAbout}/>}
         {!about && !enter && <Input about={aboutBut} jump={calculate}/>}
         {!about && enter && <Results about={aboutBut} jump={back} values={results}/>}
      </div>
    );
}


const Input = (props) => {
   const [inputs, setInputs] = useState({});

   const handleChange = (event) => {
      const target = event.target;
      setInputs({[target.name]: target.value});
   };
   const submitInput = () => props.jump(inputs);

   return <>
      <div className="sidebar">
         {props.about}
      </div>

      <section>
         <h1>Find Out Material Yields</h1>
         <p>Enter in any electronic, and we'll breakdown what it's made of</p>
         <form>
            <label>
               Total laptops
               <input className="textfield" type="number" name="Laptop" onChange={handleChange}/>
            </label>
            

            <label>
               Total Desktops and Servers
               <input className="textfield" type="number" name="Desktops" onChange={handleChange}/>
            </label>

            <label>
               Total Flat Panel Displays (LCDs)
               <input className="textfield" type="number" name="LCD" onChange={handleChange}/>
            </label>

            <label>
               Total Mobile Phones
               <input className="textfield" type="number" name="Phones" onChange={handleChange}/>
            </label>

            <label>
               Total Imaging Devices
               <input className="textfield" type="number" name="Image" onChange={handleChange}/>
            </label>

            <label>
               Total Others(Mice, Keyboards, etc.)
               <input className="textfield" type="number" name="Others" onChange={handleChange}/>
            </label>
         </form>

         <button type="button" onClick={submitInput}>Calculate</button>
      </section>
   </>
}

const Results = (props) => (
   //use props.values
   <>
      <div className="sidebar">
         {props.about}
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
         <button type="button" onClick={props.jump}>Back</button>
      </section>
   </>
);

const About = (props) => (
   <>
      <div className="sidebar">
         <button className="page-link" onClick={props.funct}>Calculator</button>
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
