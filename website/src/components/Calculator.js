import React from 'react';
import '../App.css';
 
export default function Calculator() {
    return (
       <div className="content">
         <form>
            <label for="laptops"> 
               Total Laptops 
               <input className="TextField" type="text" name="Laptop"/>
            </label>

            <label for="desktops"> 
               Total Desktops and Servers 
               <input className="TextField" type="text" name="Desktops" />   
            </label>

            <label for="lcd"> 
               Total Flat Panel Displays (LCDs) 
               <input className="TextField" type="text" name="LCD"/>
            </label>

            <label for="phones"> 
               Total Mobile Phones 
               <input className="TextField" type="text" name="Phones" />
            </label>

            <label for="image"> 
               Total Imaging Devices 
               <input className="TextField" type="text" name="Image"/>
            </label>

            <label for="others"> 
               Total Others(Mice, Keyboards, etc.) 
               <input className="TextField" type="text" name="Others"/>
            </label>

         </form>

         <button>Calculate</button>
       </div>
    );
}