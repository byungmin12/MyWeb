import React, { Suspense, useRef, useEffect, useState } from 'react';
import Plane from '../components/Object/Plane';
import Scene from '../components/Scene/Scene';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';

const GradientContainer = styled.div`
  width: 100vw;
  height: 465vh;
  position: absolute;
  top: 100vh;
  left: 0;
  z-index: 1;
`;

function GradientPage({ position }) {
  const [height, setHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (ref) {
      setHeight(ref);
    }
  }, [ref]);

  return (
    <GradientContainer>
      <Canvas ref={ref} camera={{ position: [200, 600, 0] }} shadowMap>
        <Scene>
          <ambientLight intensity={0.3} />
          <OrbitControls enableZoom={false} />
          <spotLight position={[150, 151, 1]} intensity={0.2} />
          <pointLight intensity={0.3} position={[140, -25, 0]} />
          <Suspense fallback={null}>
            <Plane scale={[0.2, 0.2, 0.2]} position={{ x: -700, y: 0, z: 0 }} scroll={position} heightRef={height} />
          </Suspense>
        </Scene>
      </Canvas>
    </GradientContainer>
  );
}

export default GradientPage;
