import React, { Suspense } from 'react';
import Plane from '../components/Object/Plane';
import Scene from '../components/Scene/Scene';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import styled from 'styled-components';

const GradientContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 20%, rgba(0, 0, 0, 1) 74%);
`;

function GradientPage({ position }) {
  return (
    <GradientContainer>
      <Canvas camera={{ position: [100, 200, 0] }} shadowMap>
        <Scene>
          <ambientLight intensity={0.3} />
          <OrbitControls enableZoom={false} />
          <spotLight position={[150, 151, 1]} intensity={0.2} />
          <pointLight intensity={0.3} position={[140, -25, 0]} />
          <Suspense fallback={null}>
            <Plane scale={[0.5, 0.5, 0.5]} position={{ x: -300, y: 0, z: 0 }} scroll={position} />
          </Suspense>
        </Scene>
      </Canvas>
    </GradientContainer>
  );
}

export default GradientPage;
