import React from 'react';

function DogBody() {
  return (
    <mesh position={[0, 0, -1]}>
      <cylinderBufferGeometry color="red" args={[0.5, 1, 4, 8]} />
      <meshPhongMaterial color="0x6ecccc" />
    </mesh>
  );
}

export default DogBody;
