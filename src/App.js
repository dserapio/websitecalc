import React, { useRef, useReducer, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'
import { BrowserRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import ThemeContext, { toggleTheme, lightTheme } from './contexts/ThemeContext';
import NavContext, { navChange, navStart }from './contexts/NavContext';
import Navigation from './components/Navigation';
import Pages from './components/Pages';

import mainInfo from '../package.json';
import './App.css';


export default function App() {
  const [theme, swapTheme] = useReducer(toggleTheme, lightTheme);
  const [navInfo, setNavBase] = useReducer(navChange, navStart(isMobile)); // hide if mobile
  const listRef = useRef(); //the sliding nav elem


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

  const swipes = useSwipeable({
    onSwipedLeft: pullMenu,
    onSwipedRight: hideMenu,
    onSwiping: swipeCheck
  });

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = theme.main;
    body.style.color = theme.off;
  }, [theme]);


  return (
    <div {...swipes}>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Navigation ref={listRef} 
            hide={navInfo.hide} setNav={setNav} swapTheme={swapTheme}/>
        
          <NavContext.Provider value={navInfo}>
            <Pages />
          </NavContext.Provider>

        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export const siteName = mainInfo.homepage
  .replace('https://github.com', '')
  .slice(0, -1);
