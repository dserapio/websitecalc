import React, { useState, useContext, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';
import ThemeContext from '../../contexts/ThemeContext';
import emissionData from '../../data/ghg-info.json';
import '../../App.css';


const printNumber = (num, fracDigits=4) =>
   num.toLocaleString(undefined, {maximumFractionDigits: fracDigits});


export default function Results (props) {
   const {
      unit, tolbs, tokg, 
      toAbout, toBack, values} = props;

   const colors = ['#444444', '#FFC300', '#FF5733', '#C70039', '#900C3F',
      '#1A08FF', '#83FF0C','#000000', '#00ECFF', '#201015', '#581845'];

   // Units default to kg
   const [selected, setSelected] = useState(0);
   const [hovered, setHovered] = useState(null);
   const [goldPrice, setPrice] = useState(55652.94); //usd per kilo, 6/12/2020

   const theme = useContext(ThemeContext);

   const nonMaterials = ["GHG Emissions", "Total Input", "Total Output"];

   const pieData = Object.entries(values)
      .filter(([name, _]) => !nonMaterials.includes(name))
      .map(([name, value], index) => 
         ({'title': name, value, 'color': colors[index]}) );

   const total = pieData.reduce((sum, data) => sum + data.value, 0);

   const infoBoxContent = (pieData) => (
      pieData.title + ' : ' + Math.round((pieData.value/total)*100) + '%'
   );

   const ghg = "GHG Emissions";
   const LaNyTrips = values[ghg] 
      / (emissionData.co2PerMile * 1000)
      / emissionData.LaToNyMiles;

   useEffect(() => {
      const toText = (response => response.text());

      const extractKiloPrice = (data) => {
         const parse = new DOMParser();
         const doc = parse.parseFromString(data, 'text/html');
         const price = doc.getElementById("spotKilo").textContent;
         
         if (price)
            setPrice(parseFloat(price));
      };
      const goldUrl = 'https://www.monex.com/gold-prices/';

      fetch(goldUrl)
         .then(toText)
         .then(extractKiloPrice)
         .catch(error => {
            console.log(error);
            fetch("https://cors-anywhere.herokuapp.com/" + goldUrl)
               .then(toText)
               .then(extractKiloPrice);
         });
   }, [values]);

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
                        <td className="output-value">{printNumber(value * unit.convert)} {unit.name} </td>
                     </tr>
                  )}
               </tbody>
            </table>

            <p>
               The {printNumber(values[ghg] * unit.convert)} {unit.name} of greenhouse gas emissions is as much gas used 
               in {printNumber(LaNyTrips, 0)} car trips between New York and Los Angeles!
            </p>

            <p>
               The output amount is currently worth around ${printNumber(goldPrice * values.Gold)}!
            </p>

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
