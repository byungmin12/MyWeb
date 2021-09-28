import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
   80% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const bounceOutLeft = keyframes`
   80% {
    opacity: 1;
    transform: translate(0%, 0) ;
  }

  to {
    opacity: 0;
    transform: translate(-3%, 0) ;
  }
`;

const textUp = keyframes`
   from {
    top: 40%;
  }

  to {
    top: 5%;
  }
`;

const textDown = keyframes`
   from {
    top: 45%;
  }

  to {
    top: 90%;
  }
`;

const leftImgKeyframe = keyframes`
   from {

    opacity: 0;
    left: 0%;

  }

  to {

    opacity: 1;
    left: 50%;

  }
`;

const IntroSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  display: flex;
`;

//Image Section
//Image Section
//Image Section
//Image Section

const FirstImg = styled.img`
  width: 50%;
  height: 70%;

  opacity: 0;

  animation-name: ${fadeIn}, ${bounceOutLeft};
  animation-delay: 0.2s, 0.2s;
  animation-duration: 1s, 2s;
  animation-fill-mode: forwards;
`;

const LeftImg = styled.img`
  width: 50%;
  height: 80%;
  position: absolute;
  left: 50%;
  top: 10%;
  opacity: 0;

  animation-name: ${leftImgKeyframe};
  animation-delay: 2s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

//text Section
//text Section
//text Section

const IntroText = styled.div`
  font-size: 6vw;
  font-weight: 1000;
  position: absolute;
  top: 55%;
  left: 0%;
  width: 100%;
  animation: ${bounceOutLeft} 2s forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;
const IntroUpText = styled.div`
  width: 100%;
  position: absolute;
  font-size: 2vw;
  font-weight: 800;
  top: 40%;
  animation-name: ${textUp}, ${bounceOutLeft};
  animation-delay: 0.3s, 0s;
  animation-duration: 0.3s, 2.3s;
  animation-fill-mode: forwards;
`;
const IntroDownText = styled.div`
  width: 100%;
  position: absolute;
  font-size: 2vw;
  font-weight: 800;
  top: 45%;
  animation-name: ${textDown}, ${bounceOutLeft};
  animation-delay: 0.3s, 0s;
  animation-duration: 0.3s, 2.3s;
  animation-fill-mode: forwards;
`;

function Intro() {
  return (
    <IntroSection>
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FirstImg src="../../pic1.jpeg" />
      </div>
      <IntroText>INTRODUCE MYSELF</IntroText>
      <IntroUpText>Byungmin Kim</IntroUpText>
      <IntroDownText>Front-end developer</IntroDownText>

      <LeftImg src="../../typing.gif" />
    </IntroSection>
  );
}

export default Intro;
