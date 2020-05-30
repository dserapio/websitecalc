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
    z-index: inherit;
  }
  
  .bar1, .bar2, .bar3 {
    width: 40px;
    height: 5px;
    background-color: #888;
    margin: 6px 12px;
    transition: 0.4s;
  }
  
  /* Rotate first bar */
  .bar1.active {
    transform: rotate(-45deg) translate(-9px, 6px) ;
  }
  
  /* Fade out the second bar */
  .bar2.active {
    opacity: 0;
  }
  
  /* Rotate last bar */
  .bar3.active {
    transform: rotate(45deg) translate(-8px, -8px) ;
  }
`;

