import React, { useRef, useEffect } from 'react';
import { useFrame } from 'react-three-fiber';

function Sea({ position, 'rotation-speed': rotationSpeed }) {
  let r = useRef();

  useFrame(() => {
    r.current.rotation.y += rotationSpeed;
  });
  return (
    <group>
      <mesh ref={r} castShadow receiveShadow position={position} rotation-x="1.5">
        {/* <cylinderGeometry attach="geometry" args={[200, 200, 500, 30, 10]} /> */}
        {/* <cylinderGeometry attach="geometry" args={[500, 500, 1000, 40, 10]} /> */}
        <sphereGeometry attach="geometry" args={[240, 40, 10]} />
        <meshPhongMaterial attach="material" color={0x68c3c0} transparent flatShading />
      </mesh>
    </group>
  );
}

export default Sea;
