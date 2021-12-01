import React, { useRef } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader, useFrame } from '@react-three/fiber';
const n = 20;
var stepAngle = (Math.PI * 2) / n;

export default function Sky({ position, 'rotation-speed': rotationSpeed }) {
  const r = useRef();

  useFrame(() => {
    r.current.rotation.z += rotationSpeed;
  });
  return (
    <group position={position} ref={r}>
      {new Array(n).fill(0).map((_, i) => {
        let angle = stepAngle * i;
        // distance from center
        let h = 300 + Math.random() * 80;
        let position = [Math.cos(angle) * h, Math.sin(angle) * h, Math.random() * 100];
        return <Cloud key={i} position={position} />;
      })}
    </group>
  );
}

function Cloud({ position, rotationZ }) {
  let nBlocs = 2 + Math.floor(Math.random() * 3);
  const obj = useLoader(OBJLoader, '../../cloud.obj');

  return (
    <group position={position} rotation-z={rotationZ} dispose={null}>
      {new Array(1).fill(0).map((_, i) => {
        let pos = [i * 15, Math.random() * 20, Math.random() * 20];
        let rotationX = Math.random() * Math.PI * 2;
        let rotationY = Math.random() * Math.PI * 2;
        let s = 0.4 + Math.random() * 0.9;
        const cloneObj = obj.clone();

        return (
          <mesh receiveShadow position={pos} rotation-x={rotationX} rotation-y={rotationY} key={i}>
            <boxGeometry attach="geometry" args={[20, 20, 20]}></boxGeometry>
            <meshPhongMaterial attach="material" color={0xb6b6b4} flatShading />
          </mesh>
        );
      })}
    </group>
  );
}
