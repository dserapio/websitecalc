import React from 'react';
import { ContentWrap } from '../utils/Styles'
import '../../App.css';
 
export default function Error() {
   return (
      <ContentWrap>
         <section className="main">
            <h1>Error: Page does not exist!</h1>
         </section>
      </ContentWrap>
   );
}