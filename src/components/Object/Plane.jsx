import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function normalize(v, vmin, vmax, tmin, tmax) {
  var nv = Math.max(Math.min(v, vmax), vmin);
  var dv = vmax - vmin;
  var pc = (nv - vmin) / dv;
  var dt = tmax - tmin;
  var tv = tmin + pc * dt;
  return tv;
}

function Plane({ position, scale, where, scroll, heightRef }) {
  let plane = useRef();
  let { x, z } = position;
  const a = heightRef;
  const [y, setY] = useState(0);
  const [xPosition, setXPosition] = useState(0);

  useFrame(({ mouse }) => {
    if (where === 'top') {
      const targetY = normalize(mouse.y, -0.75, 1.75, -50, 105);
      const newY = y + (targetY - y) * 0.1;
      setY(newY);
      plane.current.rotation.set((y - targetY) * 0.0064, 0, (targetY - y) * 0.0064);
    } else if (where === 'side') {
      if (plane.current.position.x >= 450) {
        plane.current.position.x = -350;
      } else {
        const targetY = normalize(mouse.y, -0.75, 1.75, -50, 105);
        const newY = y + (targetY - y) * 0.1;
        plane.current.position.x = plane.current.position.x + 1;
        plane.current.rotation.set((y - targetY) * 0.0064, 0, (targetY - y) * 0.0064);
      }
    } else {
      let planePosition = scroll / (a.current.clientHeight / 1050) - 700 + 40;
      let planeRotation = scroll / (a.current.clientHeight / (180 / 100));
      plane.current.position.x = planePosition;

      const targetX = normalize(-mouse.x, -0.75, 1.75, -50, 105);
      const newX = xPosition + (targetX - xPosition) * 0.1;
      setXPosition(newX);
      plane.current.rotation.set(0, -(xPosition - targetX) * 0.01, planeRotation);
      plane.current.position.z = (targetX - xPosition) * 1;
      if ((xPosition - targetX) * 1 > -0.5) {
        plane.current.position.y = (xPosition - targetX) * 0.5;
      } else {
        plane.current.position.y = (xPosition - targetX) * -0.5;
      }
    }
  });

  return (
    <group ref={plane} position={[x, y, z]} scale={scale} dispose={null}>
      <CockPit />
      <Engine />
      <Tail />
      <Wing />
      <Propeller />
    </group>
  );
}

export function CockPit() {
  let r = useRef();

  return (
    <mesh castShadow receiveShadow ref={r}>
      <boxGeometry attach="geometry" args={[60, 50, 50, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial attach="material" color={0xf25346} flatShading />
    </mesh>
  );
}

function Engine() {
  return (
    <mesh position-x={40} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[20, 50, 50, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial attach="material" color={0xd8d0d1} flatShading />
    </mesh>
  );
}

function Tail() {
  return (
    <mesh position={[-35, 25, 0]} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[15, 20, 5, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial attach="material" color={0xf25346} flatShading />
    </mesh>
  );
}

function Wing() {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[40, 8, 150, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial attach="material" color={0xf25346} flatShading />
    </mesh>
  );
}

function Propeller() {
  return (
    <mesh position-x={50} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[20, 10, 10, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial attach="material" color={0x59332e} flatShading />
      <Blades />
    </mesh>
  );
}

function Blades() {
  let r = useRef();
  useFrame(() => {
    r.current.rotation.x += 0.8;
  });

  return (
    <mesh position-x={6} castShadow receiveShadow ref={r}>
      <boxGeometry attach="geometry" args={[1, 100, 13, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial attach="material" color={0x23190f} flatShading />
    </mesh>
  );
}
export default Plane;
