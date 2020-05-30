import React, { useState } from 'react';
import '../../App.css';
import { PieChart } from 'react-minimal-pie-chart';

const Results = ({toAbout, toBack, values}) => {
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
   
   const getColor = () => {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   }

   const pieData = Object.entries(values).map(([name, value]) => (
      { 'title': name, 'value': value, 'color': getColor() }
   ));

   const activeAttr = (buttonName) => (
      unit.name===buttonName ? "active" : ""
   );

   return <>
      <section className="sidebar">
         <button type="button" onClick={toAbout}>About</button>
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
               <button type="button" onClick={toBack}>Back</button>
               <button
                  className={activeAttr('kg')}
                  type="button" 
                  onClick={changeTokg}>kg</button>
               <button
                  className={activeAttr('lbs.')}
                  type="button"
                  onClick={changeTolbs}>lbs</button>
            </div>
            
            <PieChart 
               data={pieData}
               radius={PieChart.defaultProps.radius - 7}
               segmentsShift={(index) => (index === 0 ? 7 : 3)}
            />

      </section>
   </>;
 };

 export default Results;