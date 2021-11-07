import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function LeftArm() {
  const myMesh = useRef();
  const foot = useRef();

  useFrame(() => {
    myMesh.current.rotation.x = -0.5;
  });
  return (
    <>
      <mesh ref={myMesh} position={[-0.7, 0.2, 0.5]}>
        <boxBufferGeometry args={[1, 4, 1]} />
        <meshPhongMaterial color="0x6ecccc" />
      </mesh>
      <mesh ref={foot} position={[-0.7, -1, 1.8]}>
        <boxBufferGeometry args={[1, 0.6, 0.4]} />
        <meshPhongMaterial color="0x6ecccc" />
      </mesh>
    </>
  );
}

export default LeftArm;
