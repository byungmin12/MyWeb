import { Euler, Vector3 } from '@react-three/fiber'
import React from 'react'
import Cloud from './Cloud'
import CustomPerspectiveCamera, { TInitialArgs } from '../common/CustomPerspectiveCamera'

function Clouds() {
  const rotation = [1.16, -0.12, 0.27]
  const position = [0, 0, 1]
  const args: TInitialArgs = [45, 1, 1, 1000]
  return (
    <>
      <CustomPerspectiveCamera
        initialRotation={rotation}
        initialPosition={position}
        initialArgs={args}
      />
      <ambientLight color={'#555555'} />
      <directionalLight position={[0, 0, 1]} color={'#FFEEDD'} />
      <pointLight
        color={'#9E9E9E'}
        position={[200, 300, 100]}
        intensity={50}
        distance={450}
        decay={1.7}
      />
      <pointLight
        color={'#787777'}
        position={[100, 300, 100]}
        intensity={50}
        distance={450}
        decay={1.7}
      />
      <pointLight
        color={'#5a5a5a'}
        position={[300, 300, 200]}
        intensity={50}
        distance={450}
        decay={1.7}
      />
      <fogExp2 color={'#00354e'} density={0.001} />
      <color attach='background' args={['#434343']} />
      {Array(50)
        .fill(true)
        .map((_, idx) => {
          const position: Vector3 = [Math.random() * 800 - 400, 500, Math.random() * 500 - 500]
          const rotation: Euler = [1.16, -0.12, Math.random() * 2 * Math.PI]

          return <Cloud position={position} rotation={rotation} key={idx} />
        })}
    </>
  )
}

export default Clouds
