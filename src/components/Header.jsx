import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

function Header({ xPoint, yPoint, pageWidth }) {
  const upHeader = useRef();
  const downHeader = useRef();

  useFrame(() => {
    if (upHeader.current.rotation.y === -1 && xPoint < window.innerWidth / 2) {
      console.log(xPoint, window.innerWidth / 2, '왼쪽');
      console.log(upHeader.current.rotation.y);

      upHeader.current.rotation.y = -1;
      downHeader.current.rotation.y = -1;
    } else if (upHeader.current.rotation.y === 1 && xPoint >= window.innerWidth / 2) {
      console.log(xPoint, window.innerWidth / 2, '오른쪽');
      console.log(upHeader.current.rotation.y);

      upHeader.current.rotation.y = +1;
      downHeader.current.rotation.y = +1;
    } else {
      console.log(xPoint, window.innerWidth / 2, '이동');
      console.log(upHeader.current.rotation.y);
      upHeader.current.rotation.y = xPoint / 100 - 0.8;
      downHeader.current.rotation.y = xPoint / 100 - 0.8;
    }
    // console.log(window);
    // upHeader.current.rotation.x = -0.8;
    // downHeader.current.rotation.x = ;
    // console.log(new Vector3().setFromMatrixPosition(upHeader.current.matrixWorld));
  });

  return (
    <>
      <mesh ref={upHeader} position={[0, 3.5, 0]}>
        <boxBufferGeometry args={[2, 1.4, 2]} />
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
