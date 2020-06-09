import React, { useRef, useReducer, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'
import { BrowserRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { ThemeContext, toggleTheme, lightTheme, darkTheme } from './components/utils/Styles';
import Navigation, { NavContext, navChange, navStart } from './components/Navigation';
import Pages from './components/Pages';

import './App.css';

export default function App() {
  // hide if mobile
  const [navInfo, setNavBase] = useReducer(navChange, navStart(isMobile));
  const [theme, setTheme] = useReducer(toggleTheme, lightTheme);
  const listRef = useRef(); //the sliding elem


  const setNav = (type) =>
    setNavBase({type, menu: listRef.current});


  const pullMenu = ({initial}) => {
    if (navInfo.hide && initial[0] >= navInfo.area)
      setNav('open');
  }

  const hideMenu = ({initial, deltaX}) => {
    const currX = initial[0] - deltaX;
    if (!navInfo.hide && currX >= navInfo.area)
      setNav('close');
  }

  const swipeCheck = ({event, dir}) => {
    if (listRef.current.contains(event.target)) {
      if (event.cancelable)
        event.preventDefault();

    } else if (!navInfo.hide && (dir==='Up' || dir==='Down'))
      setNav('close');
  }

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.backgroundColor = theme.main;
    body.style.color = theme.off;
  });

  const swipes = useSwipeable({
    onSwipedLeft: pullMenu,
    onSwipedRight: hideMenu,
    onSwiping: swipeCheck
  });

  return (
    <div {...swipes}>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Navigation ref={listRef} hide={navInfo.hide} setNav={setNav}/>
        
          <NavContext.Provider value={navInfo}>
            <Pages />
          </NavContext.Provider>
        </ThemeContext.Provider>

      </BrowserRouter>
    </div>
  );
};

