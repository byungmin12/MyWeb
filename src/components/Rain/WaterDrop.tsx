import React, { useRef, useState } from 'react'
import { Vector3 as Vector } from 'three/src/math/Vector3'
import {  Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

interface IWaterDrop {
  position: number[]
}

function WaterDrop({position}:IWaterDrop) {
  const mesh = useRef<Mesh>(null)
  const [newPosition, setPosition] = useState(position)
  const [opacity, setOpacity] = useState(0.2)
  const [scale,setScale] = useState(0)

  useFrame(() => {
    const random  = Math.random() * 0.08
    setOpacity((prev)=>prev - (random/5))
    setScale((prev)=>prev+random)
    if (opacity <= 0) {
      setPosition([Math.random() * 800 - 400, 300, Math.random() * 500 - 500])
      setOpacity(0.2)
      setScale(0)
    }
  })


  return (
    <mesh ref={mesh} position={new Vector(...newPosition)} rotation={[1.16, -0.12, 0.27]} scale={scale} >
      <circleGeometry attach='geometry' args={[ 5, 128]} />
      <meshBasicMaterial color='#fff' opacity={opacity} transparent={true} attach='material' />
    </mesh>
  )
}

export default WaterDrop