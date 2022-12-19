import React from 'react'
import Rain from './Rain';

function Rains() {
  const count = 300; // number point accross one axis ini akan generate point 10.00 dimana count hanya 100 karena multiply
  return (
    <>
      {Array(count).fill(0).map((_,idx)=>{
        return (
          <Rain  key={idx}/>
        )
      })}
    </>
  )
}

export default Rains