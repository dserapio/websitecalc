import React from 'react';
import '../App.css';
import Slider from './slider/Slider';
 
export default function Home () {
   const images = [
      'https://s3files.core77.com/blog/images/lead_n_spotlight/477276_title__52109_cnNbfrAUP.jpg',
      'https://icdn2.digitaltrends.com/image/digitaltrends/technological-waste.jpg',
      'https://media.npr.org/assets/artslife/arts/2010/12/electronic-computer-waste/jim-puckett-096290b7435a25075e8cfdf71ff79eb5240e1f01-s800-c85.jpg',
      'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
    ]

    return (
       <div>
          <Slider slides={images}/>
       </div>
    );
}