import * as THREE from 'three';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Ecliptic from './Ecliptic';

function Planet({ zoomToView, position, color, speed }) {
  const myMesh = useRef();
  const random = (a, b) => a + Math.random() * b;
  const offset = random(0, Math.PI * 2);
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() * speed + offset;
    console.log(a);
    const x = position[0] * Math.sin(a);
    const z = (position[0] / 2) * Math.cos(a);

    // myMesh.current.rotation.y = a;
    myMesh.current.position.x = x;
    myMesh.current.position.z = z;
    // console.log(x,z)
  });
  return (
    <>
      <mesh ref={myMesh} onClick={(e) => zoomToView(e.object.position)}>
        <sphereGeometry args={[30, 32, 32]} />
        <meshLambertMaterial attach="material" color={color} />
      </mesh>
      <Ecliptic xRadius={position[0]} zRadius={position[0] / 2} />
    </>
  );
}

export default Planet;
