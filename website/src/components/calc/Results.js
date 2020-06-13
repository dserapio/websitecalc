import React, { useState, useContext, useEffect } from 'react';
import { Pie } from '@nivo/pie';

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
   const [goldPrice, setPrice] = useState(55652.94); //usd per kilo, 6/12/2020

   const theme = useContext(ThemeContext);

   const nonMaterials = ["GHG Emissions", "Total Input", "Total Output"];

   const pieData = Object.entries(values)
      .filter(([name, _]) => !nonMaterials.includes(name))
      .map(([name, value], index) => 
         ({'id': name, 'label': name, 'value': value * unit.convert , 'color': colors[index]}) );

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

            <div className="piechart-container">
               <Pie 
                  data={pieData}
                  margin={{ top:80, right: 120, bottom: 80, left: 120 }}
                  width={600}
                  height={600}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={5}
                  radialLabelsSkipAngle={5}
                  radialLabelsTextXOffset={6}
                  radialLabelsLinkOffset={0}
                  radialLabelsLinkDiagonalLength={16}
                  radialLabelsLinkHorizontalLength={24}
                  radialLabelsLinkStrokeWidth={1}
                  slicesLabelsSkipAngle={360}
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
                  legends={[
                     {
                        anchor: 'top',
                        direction: 'row',
                        translateY: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#000000',
                        symbolSize: 18,
                        symbolShape: 'circle',
                     }
                 ]}
                 tooltip={({ id, value }) => (
                    <strong>
                       {id} : {value.toFixed(4)}
                    </strong>
                 )}
                 theme={{
                  tooltip: {
                     container: {
                        background: '#333333',
                        color: "#FF9933"
                     },
                  },
                 }}
               />
            </div>
         </div>

         <div className="buttons">
            <button type="button" onClick={toBack}>Back</button>
         </div>
      </section>
   </>;
 };
