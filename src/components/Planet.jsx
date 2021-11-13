import * as THREE from 'three';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Ecliptic from './Ecliptic';

function Planet({ zoomToView, position, color }) {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });
  return (
    <mesh ref={myMesh} position={position} onClick={(e) => zoomToView(e.object.position)}>
      <sphereGeometry args={[30, 15, 10]} />
      <meshLambertMaterial attach="material" color={color} />
      <Ecliptic xRadius={120} zRadius={60} />
    </mesh>
  );
}

export default Planet;
