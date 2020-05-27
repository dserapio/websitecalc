import React, { useState } from 'react';
import '../../App.css';

const Results = ({about, back, values}) => {
   const kiloUnits = {
      convert: 1,
      name: "kg"
   };
   const poundUnits = {
      convert: 2.20462,
      name: "lbs."
   };

   // Units default to kg
   const [unit, setUnit] = useState(kiloUnits);

   const changeTolbs = () => setUnit(poundUnits);
   const changeTokg = () => setUnit(kiloUnits);

   const activeAttr = (buttonName) => (
      unit.name===buttonName ? "active-button" : ""
   );
   
   return (
      <div className="content">
         <section className="sidebar">
            <button type="button" onClick={about}>About</button>
         </section>

         <section className="main">
            <h1>Total Material Yields</h1>
            <table>
               <thead>
                  <tr>
                     <th className="output">Material</th>
                     <th className="output">Amount Yield ({unit.name})</th>
                  </tr>
               </thead>

               <tbody>
                  {Object.entries(values).map(([name, value], i) => (
                     <tr key={name+i}>
                        <td className="output">{name}</td>
                        <td className="output-value">{(value * unit.convert).toFixed(4)} {unit.name} </td>
                     </tr>
                  ))}
               </tbody>
            </table>

            <div className="buttons">
               <button type="button" onClick={back}>Back</button>
               <button
                  className={activeAttr('kg')}
                  type="button" 
                  onClick={changeTokg}>kg</button>
               <button
                  className={activeAttr('lbs.')}
                  type="button"
                  onClick={changeTolbs}>lbs</button>
            </div>
         </section>
      </div>
   );
 };

 export default Results;