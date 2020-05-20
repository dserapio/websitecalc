import React from 'react';
import '../App.css';
 
export default function Calculator() {
    return (
       <div className="content">
         <form>
            <input className="TextField" defaultValue="Total Laptops" />
            <input className="TextField" defaultValue="Total Desktop and Servers" />
            <input className="TextField" defaultValue="Total Flat Panel Displats (LCDs)" />
            <input className="TextField" defaultValue="Total Mobile Phones" />
            <input className="TextField" defaultValue="Total Imaging Devices" />
            <input className="TextField" defaultValue="Total Others(Mice, Keyboards, etc.)" />
         </form>

         <button>Calculate</button>
       </div>
    );
}