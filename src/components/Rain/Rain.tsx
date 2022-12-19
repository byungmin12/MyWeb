import React, { useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 as Vector } from 'three/src/math/Vector3'
import { BufferGeometry } from 'three'

function Rain() {
  const [position, setPosition] = useState([Math.random() * 400 -200, Math.random() * 500 - 250, Math.random() * 400 - 200])
  const [speed, setSpeed] = useState(0)

  useFrame(()=>{
    setSpeed((prev)=>(prev - 0.1 + Math.random() * 0.1))
    setPosition((prev)=> ([prev[0], prev[1] + speed , prev[2]]))
    if(position[1] < -200){
      setPosition((prev)=> ([prev[0], 200 , prev[2]]))
      setSpeed((prev)=>0)
    }
  })

  const lineGeometry = useMemo(()=>{
    const points = []
    const random = Math.random() * 10 + 2
    points.push(new Vector(0,random,0))
    points.push(new Vector(0,-random,0))
    return new BufferGeometry().setFromPoints(points)
  },[])

  return (
    <group  position={new Vector(...position)} >
      <line_ geometry={lineGeometry}>
        <lineBasicMaterial  attach="material" color={'#aaaaaa'} linewidth={10} linejoin={'round'} />
      </line_>
    </group>
  )
}

export default Rain
