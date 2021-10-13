import React, { useState, useRef } from 'react';

import styled from 'styled-components';

import ToggleButton from './components/ToggleButton';
import RemoteController from './components/RemoteController';
import Screen from './components/Screen';
import Projector from './components/Projector';
//keyframes

//CSS
//CSS
//CSS
//CSS

const AppBody = styled.div`
  width: 100vw;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  perspective: 500px;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const Perspective = styled.div`
  width: 100vw;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* transform-style: preserve-3d; */
  transform: translateZ(-50px);
`;

//app
//app
//app
//app
//app
//app
//app

function App() {
  const [isOnOff, setIsOnOff] = useState(false);
  const [isCheckPage, setIsCheckPage] = useState(0);
  const refCheckbox = useRef();

  const handleOnOff = () => {
    setIsOnOff(!isOnOff);
    setIsCheckPage(0);
  };

  const handleRemotePage = (num) => {
    setIsCheckPage(num);
  };

  return (
    <AppBody>
      <Perspective>
        <Screen isOnOff={isOnOff} isCheckPage={isCheckPage} setIsCheckPage={setIsCheckPage} />

        <Projector isOnOff={isOnOff} handleOnOff={handleOnOff} />
        <RemoteController
          handleRemotePage={handleRemotePage}
          setIsCheckPage={setIsCheckPage}
          isCheckPage={isCheckPage}
          refCheckbox={refCheckbox}
          isOnOff={isOnOff}
        />
      </Perspective>
    </AppBody>
  );
}

export default App;
