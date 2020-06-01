import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable'
import { BrowserRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import Navigation, { menuZone } from './components/Navigation';
import Pages from './components/Pages';

import './App.css';

const App = () => {
  const [hide, setHide] = useState(isMobile); //hide if mobile
  const menuRef = useRef();

  const pullMenu = ({initial}) => {
    if (initial[0] >= menuZone())
      setHide(false);
  }

  const hideMenu = ({event}) => {
    if (menuRef.current.contains(event.target))
      setHide(true);
  }

  const swipeCheck = ({event, dir}) => {
    if (menuRef.current.contains(event.target))
      event.preventDefault();
    else if (dir!=='Right')
      setHide(true);
  }

  const swipes = useSwipeable({
    onSwipedLeft: pullMenu,
    onSwipedRight: hideMenu,
    onSwiping: swipeCheck
  });

  return (
    <div {...swipes}>
      <BrowserRouter>
        <Navigation menuRef={menuRef} hide={hide} setHide={setHide}/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
