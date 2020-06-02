import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable'
import { BrowserRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import Navigation, { openMenu, closeMenu } from './components/Navigation';
import Pages from './components/Pages';

import './App.css';

const App = () => {
  const [hide, setHide] = useState(isMobile); //hide if mobile
  const listRef = useRef(); //the sliding elem

  const pullMenu = ({initial, event}) => {
    if (openMenu(listRef, {checkX: initial[0], target: event.target}))
      setHide(false);
  }

  const hideMenu = ({event, initial, deltaX}) => {
    const currX = initial[0] - deltaX;
    if (closeMenu(listRef, {checkX: currX, target: event.target}))
      setHide(true);
  }

  const swipeCheck = ({event, dir}) => {
    if (listRef.current.contains(event.target)) {
      if (event.cancelable)
        event.preventDefault();

    } else if (dir==='Up' || dir==='Down')
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
        <Navigation listRef={listRef} hide={hide} setHide={setHide}/>
        <Pages navInfo={{listRef: listRef, hide: hide}}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
