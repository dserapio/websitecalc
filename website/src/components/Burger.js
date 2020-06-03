/** @jsx jsx */
import { css, jsx } from '@emotion/core';


export default function Burger({active, onClick}) {
  const bars = ['bar1', 'bar2', 'bar3'];

  return (
    <div css={BurgerCSS}
      className="container"
      onClick={onClick}
    >
      {bars.map((name, i) => (
        <div key={name} className={name.concat(active ? " active" : "")}/>
      ))}
    </div>
  );
}

const BurgerCSS = css`
  .container {
    display: inline-block;
    cursor: pointer;
  }
  
  .bar1, .bar2, .bar3 {
    width: 5vh;
    height: 0.65vh;
    background-color: #888;
    margin: 0.8vh 1.4vh;
    transition: 0.4s;
  }
  
  /* Rotate first bar */
  .bar1.active {
    transform: rotate(-45deg) translate(-1.4vh, 1.2vh) ;
  }
  
  /* Fade out the second bar */
  .bar2.active {
    opacity: 0;
  }
  
  /* Rotate last bar */
  .bar3.active {
    transform: rotate(45deg) translate(-0.7vh, -0.65vh) ;
  }
`;

