import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Header() {
  const upHeader = useRef();
  const downHeader = useRef();

  useFrame(() => {
    upHeader.current.rotation.y = -0.8;
    // upHeader.current.rotation.x = -0.8;

    downHeader.current.rotation.y = -0.8;
    // downHeader.current.rotation.x = ;

    // console.log(upHeader.current);
  });

  return (
    <>
      <mesh ref={upHeader} position={[0, 3.1, 0]}>
        <boxBufferGeometry args={[2, 0.6, 2]} />
        <meshPhongMaterial color="0x6ecccc" />
      </mesh>
      <mesh ref={downHeader} position={[0, 2.5, 0]}>
        <boxBufferGeometry args={[2, 0.6, 2]} />
        <meshPhongMaterial color="red" />
      </mesh>
    </>
  );
}

export default Header;
