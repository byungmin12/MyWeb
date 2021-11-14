import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import styled from 'styled-components';
import Planet from './components/Planet';
import Controls from './components/Controls';
import * as THREE from 'three';
import Ecliptic from './components/Ecliptic';
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
      vec.set(0, 500, 1500);
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
        <OrbitControls autoRotateSpeed={1} />
        <spotLight position={[150, 151, 1]} intensity={0.2} />
        <Stars radius={200} depth={50} count={5000} factor={4} saturation={0} fade />
        {/* <Planet zoomToView={(focusRef) => (setZoom(!zoom), setFocus(focusRef))} position={[0, 0, 0]} /> */}
        <Planet
          zoomToView={(focusRef) => (setZoom(!zoom), setFocus(focusRef))}
          position={[300, 0, 0]}
          color="red"
          speed={0.2}
        />
        <Planet
          zoomToView={(focusRef) => (setZoom(!zoom), setFocus(focusRef))}
          position={[150, 0, 0]}
          color="blue"
          speed={0.3}
        />
        <Planet
          zoomToView={(focusRef) => (setZoom(!zoom), setFocus(focusRef))}
          position={[250, 0, 0]}
          color="orange"
          speed={0.4}
        />
        <Controls zoom={zoom} focus={focus} setState={setState} />
      </Canvas>
    </AppBody>
  );
}

export default App;
