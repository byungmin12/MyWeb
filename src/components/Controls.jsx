import { useState, useMemo } from 'react';
import CameraControls from 'camera-controls';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

CameraControls.install({ THREE });

function Controls({ zoom, focus, pos = new THREE.Vector3(), look = new THREE.Vector3(), setState }) {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), []);
  return useFrame((state, delta) => {
    // zoom ? pos.set(focus.x, focus.y, focus.z - 100) : pos.set(0, 50, 500);
    // zoom ? look.set(focus.x, focus.y, focus.z - 0.2) : look.set(0, 0, 4);
    if (zoom) {
      pos.set(focus.x, focus.y, focus.z - 100);
      look.set(focus.x, focus.y, focus.z - 0.2);
      state.camera.position.lerp(pos, 0.3);
      state.camera.updateProjectionMatrix();

      controls.setLookAt(
        state.camera.position.x,
        state.camera.position.y,
        state.camera.position.z,
        look.x,
        look.y,
        look.z,
        true,
      );
      return controls.update(delta);
    } else {
      setState(state);
      // console.log(state.camera);
      // state.camera.rotateTo(Math.PI / 2, Math.PI / 4, true);
    }
  });
}

export default Controls;
