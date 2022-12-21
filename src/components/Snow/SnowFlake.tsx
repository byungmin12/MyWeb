import React, { useState } from 'react'
import { Vector3 as Vector } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

function SnowFlake({ position }: { position: number[] }) {
  const texture = useTexture({ snowFlake: '../snowFlake.png' })
  const [newPosition, setPosition] = useState(position)
  const [speed] = useState([Math.floor(Math.random() * (2 + 1) - 1), Math.floor(Math.random() * 10 + 3) * -0.05, Math.floor(Math.random() * 6 - 3) * 0.1])
  const [randomX] = useState(Math.random() * (2 + 1) - 1)
  const [randomZ] = useState(Math.random() * (2 + 1) - 1)

  const { clock } = useThree()

  useFrame(() => {
    setPosition((prev) => {
      if (prev[1] < -100) {
        return position
      } else {
        return [prev[0] + (Math.sin(clock.elapsedTime + speed[0]) * randomX), prev[1] + speed[1], prev[2] + (Math.cos(clock.elapsedTime + speed[0]) * randomZ)]
      }
    })

  })

  return (
    <mesh position={new Vector(...newPosition)} rotation={[1.16, -0.12, 0.27]}>
      <circleGeometry attach='geometry' args={[5, 64]} />
      <meshBasicMaterial color='#ffffff' map={texture.snowFlake} transparent={true} attach='material' />
    </mesh>
  )
}

export default SnowFlake