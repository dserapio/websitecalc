import React, { useState } from 'react';
import '../App.css';
 
export default function Calculator() {
   const [enter, setEnter] = useState(false);
   const [about, setAbout] = useState(false);

   const entered = () => {
      setAbout(false);
      return setEnter(enter => !enter);
   };
   const onAbout = () => setAbout(about => !about);
   const aboutButt = <button className="page-link" type="button" onClick={onAbout}>About</button>;

   return (
      <div className="content">
         {about && <About funct={onAbout}/>}

         {!about && !enter && (<div>
            {aboutButt}
            <Input funct={entered}/>
         </div>)}

         {!about && enter && (<div>
            {aboutButt}
            <button type="button" onClick={entered}>Back</button>
            <Results funct={entered}/>
         </div>)}
      </div>
    );
}

const Input = (props) => (
   <section>
      <h1>Find Out Material Yields</h1>
      <p>Enter in any electronic, and we'll breakdown what it's made of</p>
      <form>
         <label for="laptops"> 
            Total Laptops 
            <input className="textfield" type="text" name="Laptop"/>
         </label>

         <label for="desktops"> 
            Total Desktops and Servers 
            <input className="textfield" type="text" name="Desktops" />   
         </label>

         <label for="lcd"> 
            Total Flat Panel Displays (LCDs) 
            <input className="textfield" type="text" name="LCD"/>
         </label>

         <label for="phones"> 
            Total Mobile Phones 
            <input className="textfield" type="text" name="Phones" />
         </label>

         <label for="image"> 
            Total Imaging Devices 
            <input className="textfield" type="text" name="Image"/>
         </label>

         <label for="others"> 
            Total Others(Mice, Keyboards, etc.) 
            <input className="textfield" type="text" name="Others"/>
         </label>
      </form>

      <button type="button" onClick={props.funct}>Calculate</button>
   </section>
)

const About = (props) => (
   <div>
      <button className="page-link" onClick={props.funct}>Calculator</button>
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
   </div>
);

const Results = (props) => (
   <div>
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
   </div>
);