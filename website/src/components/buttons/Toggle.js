/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const width = '60px';
const ratio = 26/60;

const ToggleCSS = css`
  .switch {
    position: relative;
    display: inline-block;
    width: ${width};
    height: 34px;
    margin: 0;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: calc(${width} * ${ratio});
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #41911f;
  }
  
  input:checked + .slider {
    background-color: #41911f;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(calc(${width} * ${ratio}));
    -ms-transform: translateX(calc(${width} * ${ratio}));
    transform: translateX(calc(${width} * ${ratio}));
  }
`;

const Toggle = ({ ...inputs }) => (
  <div css={ToggleCSS}>
    <label className="switch">
      <input type="checkbox" {...inputs}/>
      <span className="slider"></span>
    </label>
  </div>
);

export default Toggle;