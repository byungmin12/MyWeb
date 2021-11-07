import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function RightFoot() {
  const myMesh = useRef();
  const foot = useRef();

  useFrame(() => {
    myMesh.current.rotation.y = 2;
    foot.current.rotation.y = 2;
  });

  return (
    <>
      <mesh ref={myMesh} position={[1.2, -1.2, 0]}>
        <boxBufferGeometry args={[2, 2, 1]} />
        <meshPhongMaterial color="0x6ecccc" />
      </mesh>
      <mesh ref={foot} position={[1.3, -1.9, 0.2]}>
        <boxBufferGeometry args={[2.5, 0.6, 1]} />
        <meshPhongMaterial color="0x6ecccc" />
      </mesh>
    </>
  );
}
export default RightFoot;
