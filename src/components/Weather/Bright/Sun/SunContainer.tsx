import React, { useRef } from 'react'
import SunView from './SunView'
import { MathUtils, Vector3 } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { IEffectController } from './Sun'

function SunContainer() {
  const { gl } = useThree()
  //타입을 알 수가 없음
  const skyRef = useRef<any>(null)
  const sun = new Vector3()

  const effectController: IEffectController = {
    turbidity: 10,
    rayleigh: 3,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.7,
    elevation: 0, // 0 ~ 90
    azimuth: 180, // -180 ~ 180
    exposure: 5, // 0.13 ~ 5
  }

  const elevationRange = [0, 90]
  const azimuthRange = [-180, 180]
  const exposureRange = [0.13, 5]

  const mappingTime = (toLow: number, toHigh: number): number => {
    const currentTime = new Date().getHours() * 3600 + new Date().getMinutes() * 60
    const fromLow = 0
    const fromHigh = 24 * 3600
    return ((currentTime - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow) + toLow
  }

  const sunController = () => {
    const uniforms = skyRef.current.material.uniforms
    uniforms['turbidity'].value = effectController.turbidity
    uniforms['rayleigh'].value = effectController.rayleigh
    uniforms['mieCoefficient'].value = effectController.mieCoefficient
    uniforms['mieDirectionalG'].value = effectController.mieDirectionalG

    const phi = MathUtils.degToRad(mappingTime(elevationRange[0], elevationRange[1]))
    const theta = MathUtils.degToRad(mappingTime(azimuthRange[0], azimuthRange[1]) - 180)

    sun.setFromSphericalCoords(1, phi, theta)
    uniforms['sunPosition'].value.copy(sun)
    gl.toneMappingExposure = mappingTime(exposureRange[1], exposureRange[0])
  }

  // Use this hook to update the GUI and rendering
  useFrame(() => {
    sunController()
  })
  return <SunView skyRef={skyRef} />
}

export default SunContainer
