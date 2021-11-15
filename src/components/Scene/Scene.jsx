import React, { useRef } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';

function Scene({ children }) {
  const scene = useRef();
  const { gl, camera } = useThree();
  useFrame(() => {
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(scene.current, camera);
  }, 2);
  return <scene ref={scene}>{children}</scene>;
}

export default Scene;
