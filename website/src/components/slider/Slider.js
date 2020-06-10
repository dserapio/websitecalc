/** @jsx jsx */
import { useState, useEffect, useRef, useContext } from 'react'
import { css, jsx } from '@emotion/core'
import { useSwipeable } from 'react-swipeable'
import { isMobile } from 'react-device-detect';

import NavContext from '../../contexts/NavContext'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

const getWidth = () => window.innerWidth

/**
 * @function Slider
 */
const Slider = ({ autoPlay, slides }) => {
  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
    updating: false,
    signal: false
  })

  const { 
    activeSlide, translate, _slides,
    transition, updating, signal 
  } = state;

  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()


  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const smoothTransition = () => {
    let newSlides = []

    if (activeSlide === slides.length - 1) // We're at the last slide.
      newSlides = [slides[slides.length - 2], lastSlide, firstSlide]
    else if (activeSlide === 0) // We're back at the first slide. Just reset to how it was on initial render
      newSlides = [lastSlide, firstSlide, secondSlide]
    else // Create an array of the previous last slide, and the next two slides that follow it.
      newSlides = slides.slice(activeSlide - 1, activeSlide + 2)

    setState({
      ...state,
      _slides: newSlides,
      transition: 0,
      translate: getWidth()
    });
  }

  const nextSlide = () => {
    if (!updating) {
      setState({
        ...state,
        translate: translate + getWidth(),
        activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
        updating: true
      })
    }
  }

  const prevSlide = () => {
    if (!updating) {
      setState({
        ...state,
        translate: 0,
        activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
        updating: true
      })
    }
  }


  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  })


  useEffect(() => {
    let mounted = true;

    const play = () => {
      if (mounted)
        autoPlayRef.current()
    }

    let interval = autoPlay
      ? setInterval(play, autoPlay * 1000)
      : null;

    const smooth = e => {
      if (mounted && e.target.className.includes('SliderContent')) {
        transitionRef.current()

        if (interval !== null) { //reset timer
          clearInterval(interval);
          interval = setInterval(play, autoPlay * 1000)
        }
      }
    }

    const resize = () => {
      if (mounted)
        resizeRef.current();
    }

    const transitionEnd = window.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)
    setState(state => ({...state, signal: true}));

    return () => {
      mounted = false;
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)

      if (autoPlay) {
        clearInterval(interval)
      }
    }
  }, [autoPlay])

  useEffect(() => {
    setState(state => (
      state.transition === 0
        ? { ...state, transition: 0.45, updating: false }
        : state
    ))
  }, [transition])

  useEffect(() => {
    //immediately go to next slide
    if (signal)
      autoPlayRef.current();
  }, [signal]);


  const navInfo = useContext(NavContext);

  const swipeNext = ({initial}) => {
    if (initial[0] < navInfo.area)
      nextSlide();
  }

  const swipePrev = () => {
    if (navInfo.hide)
      prevSlide();
  }

  const swipes = useSwipeable({
    onSwipedLeft: swipeNext, 
    onSwipedRight: swipePrev
  });

  return (
    <div {...swipes} css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide width={getWidth()} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>

      { !isMobile && <div>
        <Arrow direction="left" handleClick={prevSlide} />
        <Arrow direction="right" handleClick={nextSlide} />
      </div>}

      <Dots slides={slides} activeSlide={activeSlide} />
    </div>
  )
}

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`
export default Slider