import React, { useState, useContext, useEffect } from 'react';
import { Pie } from '@nivo/pie';
import { isMobile } from 'react-device-detect';

import ThemeContext from '../../contexts/ThemeContext';
import { aggregates } from '../pages/Calculator';
import '../../App.css';

import emissionData from '../../data/ghg-info.json';
import truck from '../../img/truck.gif';
import trash from '../../img/trash.gif';
import gold from '../../img/gold.gif';


const prettyNum = (num, fracDigits=4) =>
   num.toLocaleString(undefined, {maximumFractionDigits: fracDigits});


const fetchGold = async () => {
   const goldUrl = 'https://www.kitco.com/gold-price-today-usa/';

   const data = await fetch("https://cors-anywhere.herokuapp.com/" + goldUrl)
      .then(response => response.text());

   const parse = new DOMParser();
   const doc = parse.parseFromString(data, 'text/html');

   const table = [...doc.getElementsByTagName('table')]
      .filter(table => 
         table.tBodies.item(0).innerText.includes('Gold Spot Price'))[0];

   const price = [...table.tBodies.item(0).rows]
      .filter(row => row.cells.item(0).innerText.includes('kilo'))[0]
      .cells.item(1).innerText;

   console.log(`got price ${price}`);
   return parseFloat(price.replace(',', ''));
}


export default function Results (props) {
   const {
      unit, tolbs, tokg, 
      toAbout, toBack, values } = props;

   // Units default to kg
   const [goldState, setGold] = useState({price: 55006.71, default: true}); //usd per kilo, 6/15/2020
   const theme = useContext(ThemeContext);

   useEffect(() => {
      if (goldState.default)
         fetchGold()
            .then(price => setGold(state => ({...state, price})))
            .catch(console.log)
            .finally(() => setGold(state => ({...state, default: false}) ));

   }, [goldState.default]);

   const colors = ['#444444', '#FFC300', '#FF5733', '#C70039', '#900C3F',
      '#1A08FF', '#83FF0C','#000000', '#00ECFF', '#201015', '#581845'];

   const [ghg, inTotal] = aggregates;

   const pieData = Object.entries(values)
      .filter(([name, _]) => !aggregates.includes(name))
      .map(([name, value], index) => ({
            id: name,
            label: name, 
            value: value * unit.convert, 
            color: colors[index]
      }));

   const trucks = values[inTotal] / emissionData.trucks;
   const diverts = values[inTotal] / emissionData.divert;
   const LaNyTrips = values[ghg]  / emissionData.co2LANY;

   const pieWidth = () => window.innerWidth * (isMobile ? 0.8 : 0.5);
   const pieHeight = () => window.innerHeight * (isMobile ? 0.4 : 0.6);
   const goldPrice = goldState.price;

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

            <h2>By the Numbers</h2>
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
                        <td className="output-value">{prettyNum(value * unit.convert)} {unit.name} </td>
                     </tr>
                  )}
               </tbody>
            </table>

            {trucks > 0 && <section className="info-stat">
               <img alt="truck-gif"src={truck}/>
               <p className="stat-paragraph">
                  <span className="show-num">{prettyNum(values[inTotal])} {unit.name}</span> is enough e-waste to fill 
                  <span className="show-num"> {prettyNum(trucks, 2)} semi-trucks!</span>
               </p>
            </section>}

            <section className="info-stat">
               <img alt="factory" src={trash}/>
               <p className="stat-paragraph">
                  Diverts <span className="show-num">{prettyNum(diverts, 0)} {unit.name} </span>
                  of valuable and toxic materials from landfills!
               </p>
            </section>

            <section className="info-stat">
               <img alt="driving" src="https://acegif.com/wp-content/gifs/car-driving-7.gif"/>
               <p className="stat-paragraph">
                  The <span className="show-num">{prettyNum(values[ghg] * unit.convert, 0)} {unit.name}</span> of greenhouse
                  gas emissions is as much gas used in <span className="show-num">{prettyNum(LaNyTrips, 0)}</span> car trips
                  between New York and Los Angeles!
               </p>
            </section>

            <section className="info-stat">
               <img alt="gold" src={gold}/>
               <p className="stat-paragraph">
                  The total gold currently worth around <span className="show-num">${prettyNum(values.Gold * goldPrice, 2)}</span>
               </p>
            </section>

            <section>
               <h2>Output Material Breakdown</h2>
               <Pie
                  data={pieData}
                  margin={{ top: 80, right: 120, bottom: 80, left: 20 }}
                  width={pieWidth()}
                  height={pieHeight()}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={5}
                  radialLabelsSkipAngle={isMobile ? 15 : 5}
                  radialLabelsTextXOffset={6}
                  radialLabelsTextColor={theme.off}
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
                        anchor: 'right',
                        direction: 'column',
                        translateX: 100,
                        itemWidth: 60,
                        itemHeight: 16,
                        itemsSpacing: 2,
                        itemTextColor: theme.off,
                        symbolSize: 14,
                        symbolShape: 'circle'
                     }
                  ]}
                  tooltip={({ id, value }) => (
                     <strong>
                        {id} : {value.toFixed(4)} {unit.name}
                     </strong>
                  )}
                  theme={{
                     tooltip: {
                        container: {
                           background: theme.main,
                           color: theme.off
                        },

                     },
                  }}
               />
            </section>
         </div>

         <div className="buttons">
            <button type="button" onClick={toBack}>Back</button>
         </div>
      </section>
   </>;
 };
