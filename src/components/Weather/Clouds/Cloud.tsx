import { Euler, useFrame, Vector3 } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import React, { useRef } from 'react'

function Cloud({position,rotation}:{position:Vector3 ; rotation : Euler}) {
  const texture = useTexture({cloud : "../smoke.png"})
  const cloudRef = useRef<any>(null);

  useFrame(() => {
    cloudRef.current.rotation.z = Number(cloudRef.current.rotation.z) - 0.001;
  });



  return ( <mesh ref={cloudRef} position={position} rotation={rotation}>
    <planeBufferGeometry attach="geometry" args={[500, 500]} />
    <meshLambertMaterial opacity={0.55} attach="material" map={texture.cloud} transparent={true} />
  </mesh>)
}

export default Cloud