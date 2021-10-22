import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background-image: repeating-linear-gradient(to right, #aaa, #aaa 3vh, #bbb 3vh, #bbb 6vh);
  background-color: #362f3f;
  background-blend-mode: multiply;
`;

function Background() {
  return <BackgroundContainer></BackgroundContainer>;
}

export default Background;
