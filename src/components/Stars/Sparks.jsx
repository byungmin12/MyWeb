import React from 'react';
import randomColor from 'randomcolor';
import Spark from './Spark';

function Sparks() {
  const randomPos = () => {
    const min = 500;
    const max = -500;
    return Math.random() * (max - min) + min;
  };

  const sparksArray = [];
  for (let i = 0; i < 2000; i++) {
    sparksArray.push({
      color: randomColor(),
      position: [randomPos(), randomPos(), randomPos()],
    });
  }

  return (
    <>
      {sparksArray.map((el, i) => {
        return <Spark key={i} data={el} />;
      })}
    </>
  );
}

export default Sparks;
