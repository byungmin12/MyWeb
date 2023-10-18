import React, { useRef, useState } from 'react'
import SunView from './SunView'
import { MathUtils, Vector3 } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { IEffectController } from './Sun'

function SunContainer() {
  const { gl } = useThree()
  const [time, setTime] = useState(0)
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

  const elevationRange = [-5, 9]
  const azimuthRange = [-180, 180]
  const exposureRange = [0.13, 0.5]

  const mappingTime = (toLow: number, toHigh: number): number => {
    const today = new Date('Wed Oct 18 2023 15:00:00')
    const fromHigh = 12 * 3600
    const halfTime = fromHigh / 2
    let currentTime = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()
    const fromLow = 0

    console.log(currentTime, fromHigh, fromHigh + (fromHigh - currentTime))

    if (currentTime > fromHigh) {
      currentTime = fromHigh + (fromHigh - currentTime)
    }

    return ((currentTime - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow) + toLow
  }

  const sunController = () => {
    const uniforms = skyRef.current.material.uniforms
    uniforms['turbidity'].value = effectController.turbidity
    uniforms['rayleigh'].value = effectController.rayleigh
    uniforms['mieCoefficient'].value = effectController.mieCoefficient
    uniforms['mieDirectionalG'].value = effectController.mieDirectionalG

    const phi = MathUtils.degToRad(90 - mappingTime(elevationRange[0], elevationRange[1]))
    const theta = MathUtils.degToRad(mappingTime(azimuthRange[0], azimuthRange[1]) - 180)
    const theta1 = MathUtils.degToRad(180)

    console.log(mappingTime(elevationRange[0], elevationRange[1]))
    sun.setFromSphericalCoords(1, phi, theta1)
    uniforms['sunPosition'].value.copy(sun)
    // gl.toneMappingExposure = mappingTime(exposureRange[1], exposureRange[0])
  }

  // Use this hook to update the GUI and rendering
  useFrame(() => {
    sunController()
  })
  return <SunView skyRef={skyRef} />
}

export default SunContainer
