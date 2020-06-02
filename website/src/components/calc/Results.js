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

   const colors = ['#444444', '#FFC300', '#FF5733', '#C70039', '#900C3F',
   '#1A08FF', '#83FF0C','#000000', '#00ECFF', '#201015', '#581845'];

   // Units default to kg
   const [unit, setUnit] = useState(kiloUnits);
   const [selected, setSelected] = useState(0);
   const lineWidth = 60;

   const changeTolbs = () => setUnit(poundUnits);
   const changeTokg = () => setUnit(kiloUnits);
   
   const getColor = (index) => {
      var color = '';
      color = colors[index];
      return color;
   }

   const pieData = Object.entries(values).map(([name, value], index) => (
      { 'title': name, 'value': value, 'color': getColor(index) }
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
         <div className="outputs"> 
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
                        <td className="output">{name} <div className="color-box" style={{ backgroundColor: getColor(i) }}></div></td>
                        <td className="output-value">{(value * unit.convert).toFixed(4)} {unit.name} </td>
                     </tr>
                  ))}
               </tbody>
            </table>

            <PieChart 
               data={pieData}
               className="piechart"
               radius={PieChart.defaultProps.radius - 6}
               lineWidth={60}
               segmentsStyle={{ transition: 'stroke .10s', cursor: 'pointer' }}
               segmentsShift={ (index) => (index === selected ? 6 : 1) }
               animate
               label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
               labelStyle={{
                  fill: '#fff',
                  opacity: 0.75,
                  pointerEvents: 'none',
               }}
               labelPosition = {110 - lineWidth / 2}
               onClick={(_, index) => {
                  setSelected(index === selected ? undefined : index);
               }}
            />

         </div>

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
      </section>
   </>;
 };

 export default Results;