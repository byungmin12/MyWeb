import React, { useState, useRef, useCallback } from 'react';

import styled from 'styled-components';

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

  perspective: 500px;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const Perspective = styled.div`
  width: 100vw;
  height: 100vh;

  transform: translateZ(-50px);
  position: absolute;
  perspective: 500px;
`;

//app
//app
//app
//app
//app
//app
//app

function App() {
  const [isOnOff, setIsOnOff] = useState('false');
  const [isCheckPage, setIsCheckPage] = useState(0);
  const refCheckbox = useRef();

  const useCallbackFunc = useCallback(() => {
    const handleOnOff = () => {
      if (isOnOff === 'false') {
        setIsOnOff('true');
      } else {
        setIsOnOff('false');
      }
      setIsCheckPage(0);
    };
    handleOnOff();
  }, [isOnOff, setIsCheckPage, setIsOnOff]);

  const handleRemotePage = (num) => {
    setIsCheckPage(num);
  };

  return (
    <AppBody>
      <Perspective>
        <Screen isOnOff={isOnOff} isCheckPage={isCheckPage} />

        <Projector
          isOnOff={isOnOff}
          handleOnOff={useCallbackFunc}
          setIsCheckPage={setIsCheckPage}
          setIsOnOff={setIsOnOff}
        />
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
