import React from 'react';
import styled from 'styled-components';

const Rocker = styled.label`
  display: inline-block;
  position: relative;
  font-size: 1em;
  font-weight: bold;
  top: 50%;
  left: 30%;

  text-transform: uppercase;
  color: #888;
  width: 7em;
  height: 4em;
  /* overflow: hidden; */
  border-bottom: 0.5em solid #d3d3d3;
  .rocker-small {
    font-size: 0.75em; /* Sizes the switch */
    margin: 1em;
  }
  ::before {
    content: '';
    position: absolute;
    top: 2.5em;
    left: 0.1em;
    right: 0;
    bottom: 0;
    background-color: #999;
    border: 0.5em solid #d3d3d3;
    border-bottom: 0;
    height: 1em;
  }
  .switch-left,
  .switch-right {
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5em;
    width: 3em;
    transition: 0.2s;
  }
  .switch-left {
    height: 2.4em;
    width: 2.75em;
    left: 0.85em;
    bottom: 0.4em;
    background-color: #ddd;
    transform: rotate(15deg) skewX(15deg);
  }
  .switch-right {
    right: 0.5em;
    bottom: 0;
    background-color: #bd5757;
    color: #fff;
  }
  .switch-left::before,
  .switch-right::before {
    content: '';
    position: absolute;
    width: 0.4em;
    height: 2.45em;
    bottom: -0.45em;
    background-color: #ccc;
    transform: skewY(-65deg);
  }
  .switch-left::before {
    left: -0.4em;
  }

  .switch-right::before {
    right: -0.375em;
    background-color: transparent;
    transform: skewY(65deg);
  }
  input:checked + .switch-left {
    background-color: #0084d0;
    color: #fff;
    bottom: 0px;
    left: 0.5em;
    height: 2.5em;
    width: 3em;
    transform: rotate(0deg) skewX(0deg);
  }

  input:checked + .switch-left::before {
    background-color: transparent;
    width: 3.0833em;
  }

  input:checked + .switch-left + .switch-right {
    background-color: #ddd;
    color: #888;
    bottom: 0.4em;
    right: 0.8em;
    height: 2.4em;
    width: 2.75em;
    transform: rotate(-15deg) skewX(-15deg);
  }

  input:checked + .switch-left + .switch-right::before {
    background-color: #ccc;
  }

  /* Keyboard Users */
  input:focus + .switch-left {
    color: #333;
  }

  input:checked:focus + .switch-left {
    color: #fff;
  }

  input:focus + .switch-left + .switch-right {
    color: #fff;
  }

  input:checked:focus + .switch-left + .switch-right {
    color: #333;
  }
  input {
    visibility: hidden;
  }
`;

function ToggleButton({ handleOnOff, refCheckbox }) {
  return (
    <Rocker className="rocker-small">
      <input
        type="checkbox"
        onClick={(e) => {
          handleOnOff();
        }}
        ref={refCheckbox}
      />
      <span className="switch-left">On</span>
      <span className="switch-right">Off</span>
    </Rocker>
  );
}

export default ToggleButton;
