import React from 'react';
import '../../App.css';

const About = ({calc}) => <>
   <section className="sidebar">
      <div className="button-group">
         <button type="button" onClick={calc}>Calculator</button>
      </div>
   </section>
   
   <section className="main">
      <h1>About the Calculator</h1>
      <p>
         Welcome to the e-Stewards Global Impact Calculator. This tool is designed to estimate
         the environmental benefits of recycling your electronic waste with e-Stewards Certified Recyclers.
      </p>

      <h2>Usage</h2>
      <p>
         By default, you enter in the the total of individual electronics.
         Clicking "By Total Weight" you can choose to enter the total weight
         of each of the electronics
      </p>

      <p>
         "Set Avg. Weight" brings out a new field where you enter the 
         average weight of each of the electronics. "# of Containers" also 
         brings out a new field where you enter the number of that electronic
         can fit into a specific container.
      </p>

      <h2>The environmental benefits are measured in three critical areas:</h2>
      <ol>
         <li>Green house gas avoidance</li>
         <li>Toxic metals diverted from export, dumping or disposal</li>
         <li>Valuable metals diverted from landfill or disposal</li>
      </ol>
      <p>These figures can be used to demonstrate and measure individual or corporate responsibility</p>
   </section>
</>;

 export default About;