/** @jsx jsx */
import { css, jsx } from '@emotion/core';


export default function Burger({active, onClick, color}) {
  const bars = ['bar1', 'bar2', 'bar3'];

  const BurgerCSS = css`
    .container {
      display: inline-block;
      cursor: pointer;
    }
    
    .bar1, .bar2, .bar3 {
      width: 5vh;
      height: 0.6vh;
      background-color: ${color};
      margin: 0.75vh 1.35vh;
      transition: 0.4s;
    }
    
    /* Rotate first bar */
    .bar1.active {
      transform: rotate(-45deg) translate(-1.3vh, 1.15vh) ;
    }
    
    /* Fade out the second bar */
    .bar2.active {
      opacity: 0;
    }
    
    /* Rotate last bar */
    .bar3.active {
      transform: rotate(45deg) translate(-0.6vh, -0.55vh) ;
    }
  `;

  return (
    <div css={BurgerCSS}
      className="container"
      onClick={onClick}
    >
      {bars.map((name, i) => (
        <div key={name} className={`${name} ${active ? "active" : ""}`}/>
      ))}
    </div>
  );
}

