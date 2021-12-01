import React, { useRef, useLayoutEffect } from 'react';

function Spark({ data }) {
  const meshRef = useRef();
  useLayoutEffect(() => {
    meshRef.current.position.x = data.position[0];
    meshRef.current.position.y = data.position[1];
    meshRef.current.position.z = data.position[2];
  });

  return (
    <mesh ref={meshRef}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 30, 30]} />
      <meshStandardMaterial color={data.color} />
    </mesh>
  );
}

export default Spark;
