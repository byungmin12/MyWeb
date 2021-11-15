import React, { useRef, useState, useEffect } from 'react';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, SMAA, SSAO } from '@react-three/postprocessing';
extend({ EffectComposer, RenderPass, UnrealBloomPass });

function SparksScene({ children }) {
  const { gl, camera, size } = useThree();
  const [scene, setScene] = useState();
  const composer = useRef();
  useEffect(() => void scene && composer.current.setSize(size.width, size.height), [size]);
  useFrame(() => scene && composer.current.render(), 1);
  useFrame(() => composer.current.renderer.setClearAlpha(1), 1);
  useFrame(() => composer.current.renderer.setClearColor('black'), 1);

  // renderer = new THREE.CanvasRenderer({ alpha: true });

  return (
    <>
      <scene ref={setScene}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <unrealBloomPass attachArray="passes" args={[undefined, 30, 1, 0]} />
      </effectComposer>
    </>
  );
}

export default SparksScene;
