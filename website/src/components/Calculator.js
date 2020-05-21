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
   const aboutBut = <button className="page-link" type="button" onClick={onAbout}>About</button>;

   return (
      <div className="content">
         {about && <About funct={onAbout}/>}
         {!about && !enter && <Input about={aboutBut} enter={entered}/>}
         {!about && enter && <Result about={aboutBut} enter={entered}/>}
      </div>
    );
}

const Input = (props) => (
   <div>
      <div className="sidebar">
         {props.about}
      </div>

      <section>
         <h1>Find Out Material Yields</h1>
         <p>Enter in any electronic, and we'll breakdown what it's made of</p>
         <form>
               <label for="laptops">Total laptops</label>
               <input className="textfield" type="text" name="Laptop"/>

               <label for="desktops">Total Desktops and Servers</label>
               <input className="textfield" type="text" name="Desktops" />

               <label for="lcd">Total Flat Panel Displays (LCDs)</label>
               <input className="textfield" type="text" name="LCD"/>

               <label for="phones">Total Mobile Phones</label>
               <input className="textfield" type="text" name="Phones" />

               <label for="image">Total Imaging Devices</label>
               <input className="textfield" type="text" name="Image"/>

               <label for="others">Total Others(Mice, Keyboards, etc.)</label>
               <input className="textfield" type="text" name="Others"/>
         </form>

         <button type="button" onClick={props.enter}>Calculate</button>
      </section>
   </div>
)

const Result = (props) => (
   <div>
      {props.about}
      <button type="button" onClick={props.enter}>Back</button>
   </div>
);

const About = (props) => (
   <div>
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
   </div>
);