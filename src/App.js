import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import styled from 'styled-components';
import Planet from './components/Planet';
import Controls from './components/Controls';
import * as THREE from 'three';

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
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState({});
  const [state, setState] = useState(null);

  useEffect(() => {
    const vec = new THREE.Vector3();

    if (!zoom && state) {
      console.log(state);
      vec.set(0, 500, 2000);
      //
      state.camera.position.lerp(vec, 0.3, 0.3);
      state.camera.lookAt(0, 0, 0);
      // Update to new position/lookAt
      state.camera.updateProjectionMatrix();
    }
  }, [zoom]);

  return (
    <AppBody>
      <Canvas camera={{ position: [0, 50, 500] }}>
        <ambientLight intensity={0.3} />
        <OrbitControls autoRotate={true} autoRotateSpeed={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        {/* <mesh
          ref={testRef}
          position={[0, 0, -150]}
          onClick={() => {
            handleCameraCenter(testRef.current);
          }}>
          <sphereGeometry args={[30, 60, 30]} />
          <meshPhongMaterial attach="material" color="red" />
        </mesh> */}

        <Planet zoomToView={(focusRef) => (setZoom(!zoom), setFocus(focusRef))} />
        <mesh position={[150, 0, 150]}>
          <sphereGeometry args={[30, 60, 30]} />
          <meshPhongMaterial attach="material" color="white" />
        </mesh>
        <mesh position={[-150, 0, 150]}>
          <sphereGeometry args={[30, 60, 30]} />
          <meshPhongMaterial attach="material" color="black" />
        </mesh>
        <Controls zoom={zoom} focus={focus} setState={setState} />
      </Canvas>
    </AppBody>
  );
}

export default App;
