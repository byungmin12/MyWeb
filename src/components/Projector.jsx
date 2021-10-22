import React, { useRef, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import ToggleButton from './ToggleButton';

const appearProjector = keyframes`
    to{
        top: 150% ;
    }
`;

const ProjectSection = styled.div`
  /* background-color: blue; */
  width: 15%;
  height: 30%;
  transform: translate(-50%, -100%);
  position: fixed;
  top: 110%;
  left: 50%;
  min-width: 300px;
  min-height: 300px;
  animation: ${appearProjector} 1s forwards;
  animation-direction: reverse;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const ProjectTopWrap = styled.div`
  filter: drop-shadow(0px 2px 0px black) drop-shadow(0px -2px 0px black) drop-shadow(2px 0px 0px black)
    drop-shadow(-2px 0px 0px black);
`;

const TopOfProjector = styled.div`
  background-color: white;
  clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  div:nth-child(1) {
    font-size: 40px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000000;
    -webkit-text-fill-color: #ffb700;
    letter-spacing: 2px;
    font-family: Impact, Charcoal, sans-serif;
  }
`;

const BackOfProjector = styled.div`
  background-color: #d3d3d3;
  width: 100%;
  height: 50%;
  filter: drop-shadow(0px 3px 0px black) drop-shadow(0px -3px 0px black) drop-shadow(3px 0px 0px black)
    drop-shadow(-3px 0px 0px black);
  position: relative;
`;

const LeftWheel = styled.div`
  width: 20px;
  height: 10px;
  background-color: black;
  position: absolute;
  top: 100%;
  border-radius: 0px 0px 3px 3px;
`;

const RightWheel = styled(LeftWheel)`
  left: 100%;
  transform: translate(-100%, 0%);
`;

const Trapezoid = styled.div`
  background-image: -webkit-radial-gradient(
    50% 100%,
    ellipse cover,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 67%
  );

  position: absolute;
  top: -50%;
  left: 50%;
  clip-path: polygon(0 0, 100% 0, 45% 100%, 55% 100%);
  width: 60vw;
  height: 60%;
  transform: translate(-50%, 0%);
  transition-duration: 0.2s;
  ${({ on }) => {
    return on === 'true' ? `opacity: 0.5;` : `opacity: 0;`;
  }};
`;

const XRotateText = styled.div`
  transform: rotateX(60deg);
  perspective: 500px;
  height: 50px;
`;

function Projector({ isOnOff, handleOnOff, setIsCheckPage, setIsOnOff }) {
  const refCheckbox = useRef();
  const projectorFunc = () => {
    const timeout = () => {
      setTimeout(() => {
        if (isOnOff === 'false') {
          setIsOnOff('true');
        }
        setIsCheckPage(0);
      }, 3000);
    };
    timeout();
  };

  const handleOnOffCallback = useCallback(projectorFunc, [isOnOff, setIsCheckPage, setIsOnOff]);

  useEffect(() => {
    refCheckbox.current.checked = true;
    handleOnOffCallback();
  }, [handleOnOffCallback]);

  return (
    <ProjectSection>
      <Trapezoid></Trapezoid>
      <ProjectTopWrap>
        <TopOfProjector>
          <XRotateText></XRotateText>
        </TopOfProjector>
      </ProjectTopWrap>
      <BackOfProjector>
        <ToggleButton handleOnOff={handleOnOff} refCheckbox={refCheckbox} />
        <LeftWheel></LeftWheel>
        <RightWheel></RightWheel>
      </BackOfProjector>
    </ProjectSection>
  );
}

export default Projector;
