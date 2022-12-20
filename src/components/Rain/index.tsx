import React from 'react'
import Rain from './Rain';
import Flash from '../Flash'
import Clouds from '../Clouds'

function Rains() {
  const count = 3000; // number point accross one axis ini akan generate point 10.00 dimana count hanya 100 karena multiply
  return (
    <>
      {Array(count).fill(0).map((_,idx)=>{
        return (
          <Rain  key={idx}/>
        )
      })}
      <Flash />
      <Clouds />
    </>
  )
}

export default Rains