import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import styled from 'styled-components';
// import LeftFoot from './components/LeftFoot';
// import RightFoot from './components/RightFoot';
// import DogBody from './components/DogBody';
// import LeftArm from './components/LeftArm';
// import RightArm from './components/RightArm';
// import Header from './components/Header';
// import RemoteController from './components/RemoteController';
// import Screen from './components/Screen';
// import Projector from './components/Projector';
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

const CanvasCss = styled(Canvas)`
  width: 100%;
  height: 100%;
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
  // const [xPoint, setXPoint] = useState(null);
  // const [yPoint, setYPoint] = useState(null);
  // const [pageWidth, setPageWidth] = useState(null);
  const cameraTestRef = useRef();

  const [xPoint, setXPoint] = useState(0);
  const [yPoint, setYPoint] = useState(50);
  const [zPoint, setZPoint] = useState(500);

  const testRef = useRef();
  console.log(testRef.current);

  const handleCameraCenter = (e) => {
    console.log(e);
    setXPoint(e.position.x);
    setYPoint(e.position.y);
    setZPoint(e.position.z);
  };

  useEffect(() => {}, [xPoint]);

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
    <AppBody>
      <Canvas ref={cameraTestRef} camera={{ position: [xPoint, yPoint, zPoint] }}>
        <ambientLight intensity={0.3} />
        <OrbitControls autoRotate={true} autoRotateSpeed={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        <mesh
          ref={testRef}
          position={[0, 0, -150]}
          onClick={() => {
            handleCameraCenter(testRef.current);
          }}>
          <sphereGeometry args={[30, 60, 30]} />
          <meshPhongMaterial attach="material" color="red" />
        </mesh>
        <mesh position={[150, 0, 150]}>
          <sphereGeometry args={[30, 60, 30]} />
          <meshPhongMaterial attach="material" color="white" />
        </mesh>
        <mesh position={[-150, 0, 150]}>
          <sphereGeometry args={[30, 60, 30]} />
          <meshPhongMaterial attach="material" color="black" />
        </mesh>
      </Canvas>
    </AppBody>
  );
}

export default App;
