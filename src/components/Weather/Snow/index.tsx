import React from 'react'
import SnowFlake from './SnowFlake'
import { extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Clouds from '../Clouds'
import CustomPerspectiveCamera, { TInitialArgs } from '../common/CustomPerspectiveCamera'

extend({ OrbitControls })

function Snow() {
  const rotation = [1.16, -0.12, 0]
  const position = [0, 0, 1]
  const args: TInitialArgs = [45, 1, 1, 1000]

  return (
    <>
      <CustomPerspectiveCamera
        initialRotation={rotation}
        initialPosition={position}
        initialArgs={args}
      />
      <color attach='background' args={['#434343']} />
      <directionalLight position={[0, 0, 1]} color={'#FFEEDD'} />
      <fogExp2 color={'#00354e'} density={0.001} />

      {Array(100)
        .fill(true)
        .map((_, idx) => {
          return (
            <SnowFlake
              position={[Math.random() * 800 - 400, 500, Math.random() * 500 - 500]}
              key={idx}
            />
          )
        })}
      <Clouds />
    </>
  )
}

export default Snow
