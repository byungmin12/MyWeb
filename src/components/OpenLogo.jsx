import React from 'react';
import styled, { keyframes } from 'styled-components';

const LastKimNameKeyframes = keyframes`
    0% {
    transform: translateX( -44.8%);
  }
 
  
  100% {
    transform: translateX( 0%);
  }
`;

const SVG = styled.svg``;

const Text = styled.text`
  text-align: center;
  font-family: 'Staatliches', cursive;
  font-size: 1.5em;
  font-weight: 1000;
`;
const TextKIM = styled(Text)`
  animation: ${LastKimNameKeyframes} 2s forwards;
  transition-duration: 4s;
  animation-delay: 1s;
  animation-direction: reverse;
`;

function OpenLogo() {
  return (
    <SVG width="100%" height="100%" viewBox="-50 -30 200 100">
      <Text x="-40">ByungMin</Text>

      <TextKIM x="90">KIM</TextKIM>

      {/* <TextComma x="52">`</TextComma> */}
      {/* <Text x="60">s</Text> */}
      <Text x="0" y="30%">
        RESUME
      </Text>
    </SVG>
  );
}

export default OpenLogo;
