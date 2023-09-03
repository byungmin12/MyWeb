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
  return (
    <Wrapper>
      <Canvas>
        {/*<EffectComposer>*/}
        {/*  <Bloom*/}
        {/*    luminanceSmoothing={0.75}*/}
        {/*    luminanceThreshold={0.3}*/}
        {/*    blendFunction={BlendFunction.COLOR_DODGE}*/}
        {/*    kernelSize={KernelSize.SMALL}*/}
        {/*    opacity={1.5}*/}
        {/*  />*/}
        {/*  <Texture textureSrc={'../stars.jpeg'} blendFunction={BlendFunction.COLOR_DODGE} />*/}
        {/*  <Stars radius={100} depth={50} count={5000} factor={8} saturation={0} fade speed={1} />*/}
        {/*</EffectComposer>*/}

        <Clouds />
        {/*<Rains />*/}
        {/*<Flash />*/}
        {/*<Bright isCloud={0} />*/}
        {/*<Snow />*/}
        {/* <DustStorm /> */}
      </Canvas>
      {/*<Glassmorphism />*/}
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;

  position: relative;
`
