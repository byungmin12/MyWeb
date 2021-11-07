import React, { useState, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import LeftFoot from './components/LeftFoot';
import RightFoot from './components/RightFoot';
import DogBody from './components/DogBody';
import LeftArm from './components/LeftArm';
import RightArm from './components/RightArm';
import Header from './components/Header';
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
  margin: 0;
  padding: 0;
  /* 
  perspective: 500px;
  text-align: center;
  position: relative;
  z-index: 10; */
`;

// const Perspective = styled.div`
//   width: 100vw;
//   height: 100vh;

//   transform: translateZ(-50px);
//   position: absolute;
//   perspective: 500px;
// `;

//app
//app
//app
//app
//app
//app
//app

function App() {
  // const [isOnOff, setIsOnOff] = useState('false');
  // const [isCheckPage, setIsCheckPage] = useState(0);
  // const refCheckbox = useRef();

  // const useCallbackFunc = useCallback(() => {
  //   const handleOnOff = () => {
  //     if (isOnOff === 'false') {
  //       setIsOnOff('true');
  //     } else {
  //       setIsOnOff('false');
  //     }
  //     setIsCheckPage(0);
  //   };
  //   handleOnOff();
  // }, [isOnOff]);

  // const handleRemotePage = (num) => {
  //   setIsCheckPage(num);
  // };

  // const projectorFunc = (checked) => {
  //   const timeout = (checked) => {
  //     setTimeout(() => {
  //       if (isOnOff === 'false') {
  //         setIsOnOff('true');
  //       }
  //       setIsCheckPage(0);
  //       checked.checked = true;
  //     }, 3000);
  //   };
  //   timeout(checked);
  // };

  return (
    <AppBody
      onMouseMove={(e) => {
        console.log(e.clientX, e.clientY);
      }}>
      <Canvas camera={{ position: [0, 5, 5] }}>
        <pointLight position={[0, 20, 5]} />
        <LeftFoot />
        <RightFoot />
        <DogBody />
        <LeftArm />
        <RightArm />
        <Header />
      </Canvas>
    </AppBody>
  );
}

export default App;
