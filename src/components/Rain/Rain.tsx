import React, {  useLayoutEffect,  useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 as Vector } from 'three/src/math/Vector3'

function Rain() {
  const [position, setPosition] = useState([Math.random() * 400 -200, Math.random() * 500 - 250, Math.random() * 400 - 200])
  const [speed, setSpeed] = useState(0)
  const lineRef = useRef<any>(null)

  useFrame(()=>{
    setSpeed((prev)=>(prev - 0.1 + Math.random() * 0.1))
    setPosition((prev)=> ([prev[0], prev[1] + speed , prev[2]]))
    if(position[1] < -200){
      setPosition((prev)=> ([prev[0], 200 , prev[2]]))
      setSpeed((prev)=>0)
    }
  })

  useLayoutEffect(()=>{
      const points = []
      const random = Math.random() * 10 + 2
      points.push(new Vector(0,random,0))
      points.push(new Vector(0,-random,0))
      lineRef.current?.geometry.setFromPoints(points)
  },[])


  return (
    <group  position={new Vector(...position)} >
      <line ref={lineRef} >
        <bufferGeometry/>
        <lineBasicMaterial  attach="material" color={'#aaaaaa'} linewidth={10} linejoin={'round'} />
      </line>
    </group>
  )
}

export default Rain
