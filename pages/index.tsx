import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import React from 'react'
import { Bloom, EffectComposer, Texture } from '@react-three/postprocessing'
import { BlendFunction, KernelSize } from 'postprocessing'
import Rains from '../src/components/Weather/Rain'
import Clouds from '../src/components/Weather/Clouds'
import Flash from '../src/components/Weather/Flash'
import Bright from '../src/components/Weather/Bright'
import Snow from '../src/components/Weather/Snow'
import DustStorm from '../src/components/Weather/DustStorm'
import Glassmorphism from '../src/components/Glassmorphism'

export default function Home() {

  return <Wrapper>
    <Canvas >
      {/* <ambientLight color={'#555555'} /> */}
      {/* <directionalLight position={[0, 0, 1]} color={'#FFEEDD'} /> */}
      {/* <pointLight color={'#9E9E9E'} position={[200, 300, 100]} intensity={50} distance={450} decay={1.7} /> */}
      {/* <pointLight color={'#787777'} position={[100, 300, 100]} intensity={50} distance={450} decay={1.7} /> */}
      {/* <pointLight color={'#5a5a5a'} position={[300, 300, 200]} intensity={50} distance={450} decay={1.7} /> */}
      {/* <EffectComposer> */}
      {/*   <Bloom luminanceSmoothing={0.75} luminanceThreshold={0.3} blendFunction={BlendFunction.COLOR_DODGE} */}
      {/*          kernelSize={KernelSize.SMALL} opacity={1.5} /> */}
        {/* <Texture textureSrc={'../stars.jpeg'} blendFunction={BlendFunction.COLOR_DODGE} /> */}
        {/* <Stars radius={100} depth={50} count={5000} factor={8} saturation={0} fade speed={1} /> */}
      {/* </EffectComposer> */}
      {/* <color attach='background' args={['#434343']} /> */}
      {/* <fogExp2 color={'#00354e'} density={0.001} /> */}
      {/* <Clouds /> */}
      <Rains />
      {/* <Flash /> */}
      {/* <Bright isCloud={0} /> */}
      {/* <Snow /> */}
      {/* <DustStorm /> */}
    </Canvas>
    <Glassmorphism />
  </Wrapper>
}

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  
  position: relative;
`


