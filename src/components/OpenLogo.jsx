import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import useInterval from 'use-interval';
import Logo from './Logo.jsx';

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

function OpenLogo() {
  const [pathNameNum, setPathNameNum] = useState(0);
  const [pathPortFolioNum, setPathPortFolioNum] = useState(0);
  const [pathWebsiteNum, setPathWebsiteNum] = useState(0);

  useInterval(
    () => {
      setPathNameNum(pathNameNum + 1);
    },
    pathNameNum >= 300 ? null : 2,
  );
  useInterval(
    () => {
      if (pathNameNum >= 300) {
        setPathPortFolioNum(pathPortFolioNum + 1);
      }
    },
    pathPortFolioNum >= 300 ? null : 2,
  );
  useInterval(
    () => {
      if (pathPortFolioNum >= 300) {
        setPathWebsiteNum(pathWebsiteNum + 1);
      }
    },
    pathWebsiteNum >= 300 ? null : 2,
  );

  return (
    <svg width="100%" height="100%" viewBox="30 -50 600 500">
      <path id="test" d={`m100, 150 h${pathNameNum}`} />
      <path id="test1" d={`m100, 200 h${pathPortFolioNum}`} />
      <path id="test2" d={`m100, 250 h${pathWebsiteNum}`} />
      <path id="test3" d={`m105, 270 h400`} />

      <Logo />
      <Text>
        <textPath href="#test">BYUNGMIN's</textPath>
        <textPath href="#test1">PORTFOLIO</textPath>
        <textPath href="#test2">WEBSITE</textPath>
        <PressAnimation href="#test3">press power button in a remote controller</PressAnimation>
      </Text>
    </svg>
  );
}

export default OpenLogo;
