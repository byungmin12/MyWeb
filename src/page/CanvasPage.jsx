import React, { useState, useRef, useCallback, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import Sea from '../components/Object/Sea';
import Sky from '../components/Object/Sky';
import Plane from '../components/Object/Plane';
import Scene from '../components/Scene/Scene';
import SparksScene from '../components/Stars/SparksScene';
import Sparks from '../components/Stars/Sparks';
import { OrbitControls, Text } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

const CanvasPageCss = styled.div`
  width: 100vw;
  height: 100vh;
`;

function CanvasPage() {
  const rotationSpeed = 0.01;
  const mesh = useRef(null);

  // configure font geometry
  const textOptions = {
    font: 'Philosopher',
    fontSize: 1200,
    color: '#99ccff',
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'justify',
    materialType: 'MeshPhongMaterial',
  };
  return (
    <CanvasPageCss>
      <Canvas camera={{ position: [50, 50, 190] }} shadowMap>
        <Scene>
          <ambientLight intensity={0.3} />
          <OrbitControls enableZoom={false} />
          <spotLight position={[150, 151, 1]} intensity={0.2} />
          <pointLight intensity={0.3} position={[140, -25, 0]} />
          <Suspense fallback={null}>
            <Sea position={[0, -300, 0]} rotation-speed={rotationSpeed} />
            <Sky position={[-5, -300, -90]} rotation-speed={rotationSpeed} />
            <Plane scale={[0.25, 0.25, 0.25]} position={{ x: -5, y: 0, z: 0 }} />
          </Suspense>
        </Scene>
        <Scene>
          <ambientLight intensity={0.3} />
          <OrbitControls enableZoom={false} />
          <spotLight position={[150, 151, 1]} intensity={0.2} />
          <Text
            // ref={ref}
            color={'white'}
            position={[0, -2.5, -150]}
            fontSize={30}
            maxWidth={300}
            lineHeight={2}
            letterSpacing={0.3}
            textAlign={'left'}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle"
            outlineOffsetX={'10%'}
            outlineOffsetY={'10%'}
            outlineBlur={'30%'}
            outlineOpacity={0.3}
            outlineColor="#EC2D2D">
            Hello world
          </Text>
        </Scene>
        <SparksScene>
          <Suspense fallback={null}>
            <spotLight position={[150, 151, 1]} intensity={0.2} />
            <ambientLight intensity={0.3} />
            <pointLight intensity={0.3} position={[140, -25, 0]} />
            <Sparks />
          </Suspense>
        </SparksScene>
      </Canvas>
    </CanvasPageCss>
  );
}

export default CanvasPage;
