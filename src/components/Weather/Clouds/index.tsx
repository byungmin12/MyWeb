import { Euler, Vector3 } from '@react-three/fiber'
import React from 'react'
import Cloud from './Cloud';

function Clouds() {
  return (
    <>
      {
        Array(50).fill(true).map((_,idx)=>{
          const position : Vector3 = [Math.random()* 800 - 400, 500 , Math.random()*500  - 500]
          const rotation : Euler = [1.16, -0.12, Math.random()*2*Math.PI];

          return <Cloud position={position} rotation={rotation} key={idx}   />
        })
      }
    </>
  )
}

export default Clouds