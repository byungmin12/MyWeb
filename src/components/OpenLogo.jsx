import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useInterval from 'use-interval';
import Logo from './Logo.jsx';
import NameSVG from './NameSVG.jsx';

const PressButtonMassage = keyframes`
    0% {
      opacity: 1;
  }
  50%{
    opacity: 0;

  }
  100% {
    opacity: 1;
  }
`;

const showTextKeyframes = keyframes`
  to{
    fill: #000000;
    stroke-dashoffset: 0;
  }
`;

const Text = styled.text`
  text-align: center;
  /* font-family: 'Montserrat', cursive; */
  font-size: 3em;
  font-weight: 1000;
  stroke: black;
`;

const PressAnimation = styled.textPath`
  font-size: 20px;
  font-weight: normal;
  fill: red;
  animation: ${PressButtonMassage} 1s infinite;
  animation-delay: 5.6s;
  opacity: 0;
  stroke: red;
`;

const SVG = styled.svg`
  path {
  }
  path:nth-child(1) {
    animation-delay: 0s;
  }
  path:nth-child(2) {
    animation-delay: 0.1s;
  }
  path:nth-child(3) {
    animation-delay: 0.2s;
  }
  path:nth-child(4) {
    animation-delay: 0.3s;
  }
  path:nth-child(5) {
    animation-delay: 0.4s;
  }
  path:nth-child(6) {
    animation-delay: 0.5s;
  }
  path:nth-child(7) {
    animation-delay: 0.6s;
  }
  path:nth-child(8) {
    animation-delay: 0.7s;
  }
  path:nth-child(9) {
    animation-delay: 0.8s;
  }
  path:nth-child(10) {
    animation-delay: 0.9s;
  }
  path:nth-child(11) {
    animation-delay: 1s;
  }
  path:nth-child(12) {
    animation-delay: 1.2s;
  }
  path:nth-child(13) {
    animation-delay: 1.3s;
  }
  path:nth-child(14) {
    animation-delay: 1.5s;
  }
  path:nth-child(15) {
    animation-delay: 1.3s;
  }
  path:nth-child(16) {
    animation-delay: 1.7s;
  }
  path:nth-child(17) {
    animation-delay: 1.6s;
  }
  path:nth-child(18) {
    animation-delay: 2s;
  }
  path:nth-child(19) {
    animation-delay: 1.9s;
  }
  path:nth-child(20) {
    animation-delay: 2.3s;
  }
  path:nth-child(21) {
    animation-delay: 2.1s;
  }
  path:nth-child(22) {
    animation-delay: 2.6s;
  }
  path:nth-child(23) {
    animation-delay: 2.8s;
  }
  path:nth-child(24) {
    animation-delay: 2.5s;
  }
  path:nth-child(25) {
    animation-delay: 2.9s;
  }
  path:nth-child(26) {
    animation-delay: 3s;
  }
  .text {
    opacity: 0;
    fill: red;
    animation: ${PressButtonMassage} 1s infinite;
    animation-delay: 5.2s;
  }
`;

function OpenLogo() {
  return (
    <SVG width="100%" height="100%" viewBox="30 -50 600 500">
      <NameSVG />
      <Logo />
      <text x="130" y="300" className="text">
        please press the button
      </text>
      <text x="131" y="320" className="text">
        in remoteController
      </text>
    </SVG>
  );
}

export default OpenLogo;
