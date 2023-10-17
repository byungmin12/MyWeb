import React from 'react'
import { Sky } from '@react-three/drei'
import { IEffectController } from './Sun'

interface ISunView {
  skyRef: any
}
function SunView({ skyRef }: ISunView) {
  return (
    <>
      <Sky ref={skyRef} />
    </>
  )
}

export default SunView
