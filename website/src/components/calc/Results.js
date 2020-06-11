import React, { useState, useContext } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';
import ThemeContext from '../../contexts/ThemeContext';
import '../../App.css';


export default function Results (props) {
   const {
      unit, tolbs, tokg, 
      toAbout, toBack, values} = props;

   const colors = ['#444444', '#FFC300', '#FF5733', '#C70039', '#900C3F',
   '#1A08FF', '#83FF0C','#000000', '#00ECFF', '#201015', '#581845'];

   // Units default to kg
   const [selected, setSelected] = useState(0);
   const [hovered, setHovered] = useState(null);

   const theme = useContext(ThemeContext);

   const getColor = (index) => {
      return colors[index];
   }

   const pieData = Object.entries(values).map(([name, value], index) => (
      { 'title': name, 'value': value, 'color': getColor(index) }
   ));

   const getTotal = () => {
      var total = 0;
      for (var i in pieData) {
         total += parseFloat(pieData[i].value);
      }
      return total;
   };

   const infoBoxContent = (pieData) => (
      pieData.title + ' : ' + Math.round((pieData.value/getTotal())*100) + '%'
   );

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
                  {Object.entries(values).map(([name, value], i) => (
                     <tr key={name+i} 
                        style={{backgroundColor: i%2===0 ? theme.mainAlt : theme.main}}
                     >
                        <td className="output">{name} </td>
                        <td className="output-value">{(value * unit.convert).toFixed(4)} {unit.name} </td>
                     </tr>
                  ))}
               </tbody>
            </table>

            <div data-tip="" data-for="chart">
               <PieChart 
                  data={pieData}
                  className="piechart"
                  radius={PieChart.defaultProps.radius - 6}
                  lineWidth={60}
                  segmentsStyle={{ transition: 'stroke .10s', cursor: 'pointer' }}
                  segmentsShift={ (index) => (index === selected ? 6 : 1) }
                  animate                  
                  onClick={(_, index) => {
                     setSelected(index === selected ? undefined : index);
                     setHovered(index === selected ? undefined : index);
                  }}
                  onMouseOver={(_, index) => {
                     setHovered(index);
                  }}
                  onMouseOut={(_, index) => {
                     setHovered(null);
                  }}
               />
               <ReactTooltip
                  id="chart"
                  getContent={() => 
                     hovered ? infoBoxContent(pieData[hovered]) : null
                  }
               />
            </div>
         </div>

         <div className="buttons">
            <button type="button" onClick={toBack}>Back</button>
         </div>
      </section>
   </>;
 };
