import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useInterval from 'use-interval';

const SVG = styled.svg`
  transition-duration: 0.6s;
  position: relative;

  :hover {
    transform: scale(1.2);

    .circle-percentage {
      width: 100%;
      font-weight: bold;
      font-size: 2rem;
    }
  }
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: #ddd;
`;
const CircleProgress = styled.circle`
  fill: none;
  stroke: #488cc4;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const TextColor = styled.text`
  fill: #488cc4;
  font-size: 2.2rem;
  font-weight: bold;
  white-space: pre-line;
  position: relative;
  z-index: -1;
`;

const TextColorLengthUp = styled.text`
  fill: #87ceeb;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: pre-line;
`;

const TextPercentage = styled.text`
  :hover {
    font-weight: bold;
    font-size: 2.5rem;
  }
`;

function Circle({ percent, skill }) {
  const [addPercentage, setAddPercentage] = useState(0);

  useEffect(() => {
    setAddPercentage(0);
  }, [percent]);

  useInterval(
    () => {
      setAddPercentage(addPercentage + 1);
    },
    addPercentage >= percent ? null : 20,
  );
  // Size of the enclosing square
  let FirstSkillName;

  if (skill.includes(' ')) {
    FirstSkillName = skill.split(' ');
  }

  const sqSize = 200;
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (150 - 10) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * `${addPercentage}`) / 100;
  return (
    <SVG width="100%" height="100%" viewBox={viewBox}>
      <CircleBackground
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${10}px`}
      />
      <CircleProgress
        className="circle-progress"
        cx={`${sqSize}` / 2}
        cy={`${sqSize}` / 2}
        r={radius}
        strokeWidth={`${10}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />

      {skill.includes(' ') ? (
        <>
          <TextColorLengthUp className="circle-text" x="50%" y="35%" dy=".3em" textAnchor="middle">
            {FirstSkillName[0]}
          </TextColorLengthUp>
          <TextColorLengthUp className="circle-text" x="50%" y="45%" dy=".3em" textAnchor="middle">
            {FirstSkillName[1]}
          </TextColorLengthUp>
        </>
      ) : (
        <TextColor className="circle-text" x="50%" y="45%" dy=".3em" textAnchor="middle">
          {skill}
        </TextColor>
      )}
      <TextPercentage className="circle-percentage" x="50%" y="55%" dy=".3em" textAnchor="middle">
        {`${addPercentage}%`}
      </TextPercentage>
    </SVG>
  );
}

export default Circle;
