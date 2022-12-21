import React from 'react'
import SnowFlake from './SnowFlake'
import { extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Clouds from '../Clouds'

extend({ OrbitControls })

function Snow() {
  return (
    <>
      {
        Array(100).fill(true).map((_, idx) => {
          return <SnowFlake position={[Math.random() * 800 - 400, 500, Math.random() * 500 - 500]} key={idx} />
        })
      }
      <Clouds />
    </>
  )
}

export default Snow