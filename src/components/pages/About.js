import React from 'react';
import { ContentWrap } from '../utils/Styles';
import '../../App.css';

function About() {
   return <ContentWrap>
      <section className="main">
         <h1>About the Calculator</h1>
         <p>
            Welcome to the e-Stewards Global Impact Calculator. This tool is designed to estimate
            the environmental benefits of recycling your electronic waste with e-Stewards Certified Recyclers.
         </p>

         <section>
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
         </section>

         <section>
            <h2>Default Values</h2>   
            <p> 
               Based on averaged data, the default input of unit weights and compositions are automatically input into the calculator. 
               The user can edit this number to tailor their specific electronics along with the unit values of weight or unit count. 
               The calculator will output the yield of recoverable material and the greenhouse gas savings made by the recovery. 
               Charts will be output to motivate the representative numbers. Alternatively, there is also a greenhouse gas savings yield value that represents the savings made by refurbishing the electronics. 
               Refurbishment and recovery are mutually exclusive results.

               E-stewards ensures that all data within electronics is properly destroyed. 
            </p>
         
         </section>

         <section>
            <h2>Background</h2>
            <p> 
               Due to the accelerating nature of technological advancement, any calculations made on the calculator are averages and approximations. 
               This takes into account of the varying sizes and compositions of technologies such as flat panel TVs and smartphones. 
               Some electronics may contain proprietary material and losses may happen during recovery. </p>

            <p> For more information, sources used to develop the calculations can be found {' '}
               <a href="https://docs.google.com/spreadsheets/d/1ObHDmde5JPeCf04jsK3n6PvsbKxdmbop/edit#gid=993306743"
                  target="_blank" rel="noopener noreferrer">here</a>. </p>

            <h3>The environmental benefits are measured in three critical areas:</h3>
            <ol>
               <li>Green house gas avoidance</li>
               <li>Toxic metals diverted from export, dumping or disposal</li>
               <li>Valuable metals diverted from landfill or disposal</li>
            </ol>
            <p>These figures can be used to demonstrate and measure individual or corporate responsibility</p>
         </section>

         <section>
            <h2>Credits</h2>
            <p> 
               The icons for the theme were provided by <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a>.
               The <a href="https://fontawesome.com/license/free" target="_blank" rel="noopener noreferrer"> license</a> allows us to use these 
               icons in this project.
            </p>

            <p>
               Some of the images from the result page were provided <a href="https://acegif.com/"  target="_blank" rel="noopener noreferrer"> here</a>
            </p>
         </section>
      </section> 

   </ContentWrap>;
}

 export default React.memo(About);                                                                                                                                                                                                                                                                                                                                                                                               