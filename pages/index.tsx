import styled from 'styled-components'
import { Canvas, Euler, useFrame, Vector3 } from '@react-three/fiber'
import { PerspectiveCamera, useTexture } from '@react-three/drei'
import React, {  useRef } from 'react'
import { Bloom, EffectComposer,Texture } from '@react-three/postprocessing'
import { BlendFunction, KernelSize } from 'postprocessing'

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

function Clouds() {

  return (
    <>
    {
      Array(50).fill(true).map((_,idx)=>{
        const position : Vector3 = [Math.random()* 800 - 400, 500 , Math.random()*500  - 500]
        const rotation : Euler = [1.16, -0.12, Math.random()*2*Math.PI];
        // const opacity = 0.55;

        return <Cloud position={position} rotation={rotation} key={idx}   />
      })
    }
    </>
    // <Cloud />
  )
}

export default function Home() {
  // loader.load("stars.jpg", function(texture){
  //
  //   const textureEffect = new POSTPROCESSING.TextureEffect({
  //     blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
  //     texture: texture
  //   });
  //   textureEffect.blendMode.opacity.value = 0.2;


  return <Wrapper>
  <Canvas
    camera={{ position: [0,0,1] , rotation: [1.16,-0.12,0.27], fov: 45, near:1,far:1000 }}
  >
    <PerspectiveCamera position={[0,0,1]} rotation={[1.16,-0.12,0.27]} fov={45} near={1} far={1000} />
    <ambientLight color={"#555555"}  />
    <directionalLight position={[0,0,1]} color={"#949ca7"} />
    <pointLight color={"#9E9E9E"} position={[200,300,100]} intensity={50} distance={450} decay={1.7} />
    <pointLight color={"#787777"} position={[100,300,100]} intensity={50} distance={450} decay={1.7} />
    <pointLight color={"#5a5a5a"} position={[300,300,200]} intensity={50} distance={450} decay={1.7} />
    <EffectComposer >
      <Bloom luminanceSmoothing={0.75} luminanceThreshold={0.3} blendFunction={BlendFunction.COLOR_DODGE} kernelSize={KernelSize.SMALL}  opacity={1.5}   />
      <Texture textureSrc={"../stars.jpeg"} blendFunction={BlendFunction.COLOR_DODGE}  />
    </EffectComposer>
    <color attach="background" args={["#434343"]} />
    <fogExp2  color={"#00354e"} density={0.001} />
     <Clouds />
  </Canvas>
  </Wrapper>
}

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
`
