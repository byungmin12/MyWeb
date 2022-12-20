import React, { useState } from 'react'
import { Cloud, Sky, Stars } from '@react-three/drei'

function Bright({isCloud = 0}: {isCloud : number}) {
  const hours = new Date().getHours()
  const [inclination ] = useState( ((1 / 24) * hours)+ 0.5)
  return (
    <>
      {
        (inclination >=13 || inclination <= 0.66) ?
        <>
          <Stars radius={100} depth={50} count={5000} factor={8} saturation={0} fade speed={1} />
          <color attach="background" args={["#141852"]} />
        </>
          :
          <>
          <Sky
        distance={3000}
        turbidity={1.8}
        rayleigh={1}
        mieCoefficient={0.007}
        mieDirectionalG={0.7}
        inclination={inclination}
        azimuth={0.28}
      />

          </>
      }
      {
        isCloud >0 &&
        <>
          <Cloud position={[-4, -2, 0]} width={0.00001} opacity={isCloud} />
          <Cloud position={[4, -2, 0]} width={0.00001} opacity={isCloud} />
          <Cloud position={[4, 2, 0]} width={0.00001} opacity={isCloud} />
          <Cloud position={[-4, 2, 0]} width={0.00001} opacity={isCloud} />
        </>
      }

    </>
  )
}

export default Bright
