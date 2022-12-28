import React, { Suspense, useEffect, useMemo } from 'react'
import { OBJLoader } from 'three-stdlib'
import {  Fog,  Object3D } from 'three'
import { useLoader, useThree } from '@react-three/fiber'
import CustomPerspectiveCamera, { TInitialArgs } from '../common/CustomPerspectiveCamera'
const color = '#D4CC9A'

const Buildings = () => {
  const { scene } = useThree()
  const url ="https://raw.githubusercontent.com/iondrimba/images/master/buildings.obj"
  const obj = useLoader(OBJLoader,url ,(loader)=>{
    const near = 1
    const far = 208
    scene.fog = new Fog(color, near, far)
  })

  const memoizationObj = useMemo(()=>{
      const models = [...obj.children].map((model) => {
        const scale = 0.01

        model.scale.set(scale, scale, scale)
        model.receiveShadow = true
        model.castShadow = true

        return model
      })

      const boxSize = 3
      const max = 0.009
      const min = 0.001

      const buildings = new Object3D()
      const gridSize = 60

      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const model = models[Math.floor(Math.random() * Math.floor(models.length))].clone();
          model.scale.y = Math.random() * (max - min + 0.01)
          model.position.x = i * boxSize
          model.position.z = j * boxSize
          buildings.add(model)
        }
      }
      return buildings
  },[obj])

  useEffect(()=>{
    scene.traverse((obj)=>{
      if ((obj as any).isMesh === true) {
        (obj as any).material.color.setHex( 0x404040 );
      }
    })
  },[memoizationObj])

  return <primitive object={memoizationObj} dispose={null}  castShadow={true} receiveShadow={true}  />
}

const DustStorm = () => {
  const rotation = [-0.4239391588266323, 0.7010640463834621, 0.2832774959276831]
  const position = [127.45293777867074, 62.11080512264083, 137.6247069251716]
  const args : TInitialArgs = [20, 2, 1, 1000]
  return (
    <>
      <CustomPerspectiveCamera initialPosition={position} initialRotation={rotation} initialArgs={args} />
      <group>
        <Suspense fallback={null}>
        <Buildings />
        </Suspense>
        <directionalLight position={[-8, 12, 0]} castShadow={true} color="#272727" />
        <directionalLight position={[8, 1200, 8]} color="#d3263a" castShadow={true} />
        <mesh
          rotation={[0, 0, -Math.PI / 2]}
          position={[0, 0, 0]}
        >
          <planeBufferGeometry attach="geometry" args={[400, 400]} />
          <meshPhysicalMaterial transparent={true} attach="material" color={color} />
        </mesh>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[50, 0, 50]}
        >
          <planeBufferGeometry attach="geometry" args={[100, 100, 10, 10]} />
          <meshPhysicalMaterial transparent={true} attach="material" color={color} />
        </mesh>
      </group>
    </>

  )
}


export default DustStorm