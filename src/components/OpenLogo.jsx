import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const LastKimNameKeyframes = keyframes`
    0% {
    transform: translateX( -44.8%);
  }
 
  100% {
    transform: translateX( 0%);
  }
`;

const NameKeyframes = keyframes`
    from {
    d: path("m100, 150 h0");
  }
 
  to {
    d: path('m100, 150 h150');
  }
`;

const SVG = styled.svg``;

const Text = styled.text`
  text-align: center;
  /* font-family: 'Montserrat', cursive; */
  font-size: 3em;
  font-weight: 1000;
  stroke: black;
`;
const TextKIM = styled.path`
  animation: ${NameKeyframes} 6s infinite;
`;

const TextBM = styled(Text)``;

function OpenLogo() {
  let [pathNameNum, setPathNameNum] = useState(0);
  let [pathPortFolioNum, setPathPortFolioNum] = useState(0);
  let [pathWebsiteNum, setPathWebsiteNum] = useState(0);

  const addPathNum = () => {
    setPathNameNum(pathNameNum++);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addPathNum();
      if (pathNameNum >= 300) {
        clearInterval(interval);
        const interval1 = setInterval(() => {
          setPathPortFolioNum(pathPortFolioNum++);
          if (pathPortFolioNum >= 300) {
            clearInterval(interval1);
            const interval2 = setInterval(() => {
              setPathWebsiteNum(pathWebsiteNum++);
              if (pathWebsiteNum >= 300) {
                clearInterval(interval2);
              }
            }, 5);
          }
        }, 5);
      }
    }, 5);
  }, []);

  return (
    <SVG width="100%" height="100%" viewBox="30 -50 600 500">
      <path id="test" d={`m100, 150 h${pathNameNum}`} />
      <path id="test1" d={`m100, 200 h${pathPortFolioNum}`} />
      <path id="test2" d={`m100, 250 h${pathWebsiteNum}`} />

      <Text>
        <textPath href="#test">BYUNGMIN's</textPath>
        <textPath y="30%" href="#test1">
          PORTFOLIO
        </textPath>
        <textPath x="8%" y="60%" href="#test2">
          WEBSITE
        </textPath>

        {/* <TextKIM x="90">KIM</TextKIM> */}

        {/* <TextComma x="52">`</TextComma> */}
        {/* <Text x="60">s</Text> */}
        {/* <Text x="0" y="30%">
        RESUME
      </Text> */}
      </Text>
    </SVG>
  );
}

export default OpenLogo;
