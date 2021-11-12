import * as THREE from 'three';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

function Planet({ zoomToView }) {
  return (
    <mesh position={[0, 0, -150]} onClick={(e) => zoomToView(e.object.position)}>
      <sphereGeometry args={[30, 60, 30]} />
      <meshPhongMaterial attach="material" color="red" />
    </mesh>
  );
}

export default Planet;
