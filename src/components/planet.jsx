import React from 'react';

function planet() {
  const testRef = useRef();

  useFrame(() => {});

  return (
    <mesh
      ref={testRef}
      position={[0, 0, -150]}
      onClick={() => {
        handleCameraCenter(testRef.current);
      }}>
      <sphereGeometry args={[30, 60, 30]} />
      <meshPhongMaterial attach="material" color="red" />
    </mesh>
  );
}

export default planet;
