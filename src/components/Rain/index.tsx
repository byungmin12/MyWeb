import React from 'react'
import Rain from './Rain';
import Flash from '../Flash'
import Clouds from '../Clouds'
import CustomPerspectiveCamera, { TInitialArgs } from '../common/CustomPerspectiveCamera'
import WaterDrop from './WaterDrop'

function Rains() {
  const count = 500; // number point accross one axis ini akan generate point 10.00 dimana count hanya 100 karena multiply
  const rotation = [1.16, -0.12, 0.27]
  const position = [0,0,1]
  const args : TInitialArgs = [45, 1, 1, 1000]
  return (
    <>
      <CustomPerspectiveCamera initialRotation={rotation} initialPosition={position} initialArgs={args} />
      {Array(count).fill(0).map((_,idx)=>{
        return (
          <Rain  key={idx}/>
        )
      })}
      {Array(300).fill(0).map((_,idx)=>{
        return (
          <WaterDrop position={[Math.random() * 800 - 400, 300, Math.random() * 500 - 500]}  key={idx}/>
        )
      })}
      {/*<Flash />*/}
      <Clouds />
      <ambientLight color={'#555555'} />
      <directionalLight position={[0, 0, 1]} color={'#FFEEDD'} />
      <pointLight color={'#9E9E9E'} position={[200, 300, 100]} intensity={50} distance={450} decay={1.7} />
      <pointLight color={'#787777'} position={[100, 300, 100]} intensity={50} distance={450} decay={1.7} />
      <pointLight color={'#5a5a5a'} position={[300, 300, 200]} intensity={50} distance={450} decay={1.7} />
    </>
  )
}

export default Rains