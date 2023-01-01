import React, { useRef, useState } from 'react'
import { useFrame, Vector3 } from '@react-three/fiber'

function Flash() {
  const flash = useRef(null)
  const [position, setPosition] =useState<Vector3>([600,300,200])
  const [power ,setPower ] = useState(628)

  useFrame(() => {
    if(Math.random() > 0.93 || power > 100) {
      if(power < 100){
        setPosition(()=>([( Math.random() * (600 - (- 300)) + (-300) ),300 + Math.random() *200 ,( Math.random() * (300 - (-600)) + (-600) )]))
      }
      setPower(()=>(50 + Math.random() * 500))
    }
  });
  return <pointLight ref={flash} color={"#062d89"} power={power} position={position} intensity={50} distance={500} decay={1.7}  />
}

export default Flash