import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import '../../App.css';


export default function Results (props) {
   const {
      unit, tolbs, tokg, 
      toAbout, toBack, values} = props;

   const colors = ['#444444', '#FFC300', '#FF5733', '#C70039', '#900C3F',
      '#1A08FF', '#83FF0C','#000000', '#00ECFF', '#201015', '#581845'];

   // Units default to kg
   const theme = useContext(ThemeContext);

   const nonMaterials = ["GHG Emissions", "Total Input", "Total Output"];

   const pieData = Object.entries(values)
      .filter(([name, _]) => !nonMaterials.includes(name))
      .map(([name, value], index) => 
         ({'name': name, 'value': value}) );

   const getTotal = () =>
      pieData.reduce((sum, data) => sum + data.value, 0);

   return <>
      <section className="sidebar">
         <div className="button-group">
            <button type="button" onClick={toAbout}>About</button>
            <button
               className={unit.name==='kg' ? "active" : ""}
               type="button" 
               onClick={tokg}>kg</button>
            <button
               className={unit.name==='lbs' ? "active" : ""}
               type="button"
               onClick={tolbs}>lbs</button>
         </div>
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
                  {Object.entries(values).map(([name, value], i) =>
                     <tr key={name+i} 
                        style={{backgroundColor: i%2===0 ? theme.mainAlt : theme.main}}
                     >
                        <td className="output">{name} </td>
                        <td className="output-value">{(value * unit.convert).toLocaleString(undefined, {maximumFractionDigits:4})} {unit.name} </td>
                     </tr>
                  )}
               </tbody>
            </table>

            <div data-tip="" data-for="chart">
               <PieChart width={400} height={400}>
                  <Pie 
                     dataKey="value" 
                     isAnimationActive={false}
                     data={pieData}
                     cx={200}
                     cy={200}
                     outerRadius={80}
                     fill="#8884d8"
                     label
                     />
               </PieChart>
            </div>
         </div>

         <div className="buttons">
            <button type="button" onClick={toBack}>Back</button>
         </div>
      </section>
   </>;
 };
