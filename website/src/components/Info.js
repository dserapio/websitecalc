import React from 'react';
import '../App.css';

export default function Information() {
   return (
      <div className="content">
         <h1>Information</h1>

         <h2>General Information</h2>

         <p>
            80% of our collective e-waste is wasted by being left in landfills. Electronics are filled
            with recoverable resources such as copper, gold, platinum, and steel among other metals.
            However, electronics are packed with materials that are toxic to us and the environment.
            Electronics are filled with lead, mercury, cadmium, and arsenic. In 2018, 1.5 billion cell
            phones were manufactured. On average, Americans tend to keep their cell phones for about 34 months.
            While the amount of materials is small for individual electronics they add up considering that
            cell phones alone are in the billions. These materials are left in landfills to only plague the
            environment and the people around.
         </p>

         <h2>Developing Countries</h2>

         <p>
            Most electronics are thrown away because they are broken and people aren’t sure how to fix them.
            These electronics are being thrown away at such a high rate there aren't enough recyclers to handle
            all the e-waste. This leads to exporting all the e-waste we can’t handle to developing countries.
            People living in these developing countries have to go through fields of toxic e-waste looking for
            recoverable materials. The people who live in these developing countries have to deal with all the
            health risks that arise from our e-waste.
         </p>

         <h2>Refurbishment</h2>

         <p>
            Much of our generated e-waste is because we perceive these electronics as broken. A good amount of
            e-waste that is thrown away can be fixed. There are many places online that can show you how to fix
         your electronics. <a href="https://www.ifixit.com/Right-to-Repair/E-waste#">ifixit</a> is one example
         of showing you how to fix your broken electronics. By doing this you can help the environment and others
         by not adding to the vast ocean of e-waste that has accumulated over the years
         </p>
      </div>
   );
}