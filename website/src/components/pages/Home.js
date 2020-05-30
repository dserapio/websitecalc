import React from 'react';
import '../../App.css';
import Slider from '../slider/Slider';
 
export default function Home () {
   const images = [
      'https://s3files.core77.com/blog/images/lead_n_spotlight/477276_title__52109_cnNbfrAUP.jpg',
      'https://icdn2.digitaltrends.com/image/digitaltrends/technological-waste.jpg',
      'https://www.rd.com/wp-content/uploads/2019/09/mobile-devices.jpg'
   ]

   return <>
      <div className="slider">
         <Slider slides={images} autoPlay={10}/>
      </div>

      <div className="title">
         <h1>
            e-Stewards is the 
            globally responsible way to 
            recycle your electronics.
         </h1>
      </div>

      <div className="moreinfo">
         <div className="littlebox">
            <h2>FOR ENTERPRISES</h2>
            <p>
               Use the highest industry 
               standard for your asset 
               disposition.
            </p>
            <a href="http://e-stewards.org/learn-more/for-enterprises/"> Learn More</a>
         </div>

         <div className="littlebox">
            <h2>FOR RECYCLERS</h2>
            <p>
               Differentiate your business 
               with the e-Stewards Standard.
            </p>
            <a href="http://e-stewards.org/learn-more/for-recyclers/"> Learn More</a>
         </div>

         <div className="littlebox">
            <h2>FOR CONSUMERS</h2>
            <p>
               Join us today in creating a 
               cleaner, more just world. 
            </p>
            <a href="http://e-stewards.org/learn-more/for-consumers/"> Learn More</a>
         </div>
      </div>
         
   </>;
}