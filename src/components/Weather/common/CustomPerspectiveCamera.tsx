import React from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { Euler, Vector3 } from 'three'

export type TInitialArgs = [
  fov?: number | undefined,
  aspect?: number | undefined,
  near?: number | undefined,
  far?: number | undefined,
]

interface ICustomPerspectiveCamera {
  initialRotation?: number[]
  initialPosition?: number[]
  initialArgs?: TInitialArgs
}

function CustomPerspectiveCamera({
  initialRotation,
  initialPosition,
  initialArgs,
}: ICustomPerspectiveCamera) {
  return (
    <PerspectiveCamera
      makeDefault
      rotation={initialRotation && new Euler(...initialRotation)}
      position={initialPosition && new Vector3(...initialPosition)}
      args={initialArgs}
    />
  )
}

export default CustomPerspectiveCamera
