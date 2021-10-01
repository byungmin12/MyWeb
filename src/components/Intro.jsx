import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
   from {
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
    font-size: 5vw;
  font-weight: 1000;
  }

  to {
    top: 5%;
    font-size: 2vw;
  font-weight: 800;
  }
`;

const textDown = keyframes`
   from {
    top: 45%;
    font-size: 5vw;
  font-weight: 1000;
  }

  to {
    top: 90%;
    font-size: 2vw;
  font-weight: 800;
  }
`;

const leftImgKeyframe = keyframes`
   from {
    opacity: 0;
    width: 0% ; 
  }
  to {
    opacity: 1;
    width: 50% ; 
  }
`;
const leftDisappearImgKeyframe = keyframes`
   from {
    opacity: 1;
    width: 50% ;
    left: 100%
  }
  to {
    opacity: 0;
    width: 0% ; 
    left: 0%;

  }
`;

const leftTextFirstKeyframe = keyframes`
   from {
    opacity: 0;
    transform: translate3d(-3%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const RightTextFirstKeyframe = keyframes`
   from {
    opacity: 0;
    transform: translate3d(-47%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
  }
`;

const disappearAnimationTag = keyframes`
   from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const appearAnimationTag = keyframes`
   from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const flipInX = keyframes`
from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
    opacity: 1;

  }
`;

const flipOutX = keyframes`
  from {
    transform: perspective(400px);
    opacity: 1;

  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
`;

const startMysubwayTextKeyframes = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity:1;
  }
`;
const keepMysubwayTextKeyframes = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity:0.5;
  }
`;
const finishMysubwayTextKeyframes = keyframes`
  
  from{
    opacity: 0.5;
  }
  to{
   opacity: 0;
  }
`;
const startMysubwayGif = keyframes`
  from{
    background:  linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1)), url('../../mysubway.gif');
  background-size: contain;
  }
  to{
    background:  linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('../../mysubway.gif');
  background-size: contain;
  }
`;

const keepMysubwayGif = keyframes`
 from{
    background:  linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('../../mysubway.gif');
  background-size: contain;
  }
  to{
    background:  linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url('../../mysubway.gif');
  background-size: contain;
  }
`;
const finishMysubwayGif = keyframes`
 from{
    background:  linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url('../../mysubway.gif');
  background-size: contain;
  }
  to{
    background:  linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1)), url('../../mysubway.gif');
  background-size: contain;
  }
`;

const startIsthisrightTextKeyframes = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity:1;
  }
`;
const keepIsthisrightTextKeyframes = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity:0.5;
  }
`;
const finishIsthisrightTextKeyframes = keyframes`
  
  from{
    opacity: 0.5;
  }
  to{
   opacity: 0;
  }
`;
const startIsthisrightGif = keyframes`
  from{
    background:  linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1)), url('../../isthisright.gif');
  background-size: contain;
  }
  to{
    background:  linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('../../isthisright.gif');
  background-size: contain;
  }
`;

const keepIsthisrightGif = keyframes`
 from{
    background:  linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('../../isthisright.gif');
  background-size: contain;
  }
  to{
    background:  linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url('../../isthisright.gif');
  background-size: contain;
  }
`;
const finishIsthisrightGif = keyframes`
 from{
    background:  linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url('../../isthisright.gif');
  background-size: contain;
  }
  to{
    background:  linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1)), url('../../isthisright.gif');
  background-size: contain;
  }
`;

const changeColor = keyframes`
  from{
    color: red;
  }
  50%{
    color: black;
  }
  to{
    color: red;
  }
`;
// 요기 까지가 애니메이션
// 요기 까지가 애니메이션
// 요기 까지가 애니메이션
// 요기 까지가 애니메이션
// 요기 까지가 애니메이션
// 요기 까지가 애니메이션

const IntroSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  display: flex;
`;

const WideScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  .lastText {
    animation-name: ${appearAnimationTag}, ${changeColor};
    animation-delay: 22.5s, 23.3s;
    animation-duration: 1s, 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1, infinite;
    opacity: 0;
  }
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
  animation-delay: 0.8s, 2.3s;
  animation-duration: 0.7s, 0.3s;
  animation-fill-mode: forwards;
`;

const LeftImg = styled.img`
  width: 0%;
  height: 80%;
  position: absolute;
  /* left: 50%; */
  top: 10%;
  left: 100%;
  opacity: 0;
  transform: translate(-100%, 0%);

  animation-name: ${leftImgKeyframe}, ${leftDisappearImgKeyframe};
  animation-delay: 2.6s, 6s;
  animation-duration: 1s, 1s;
  animation-fill-mode: forwards;
`;

const RightImg = styled(LeftImg)`
  left: 50%;
  opacity: 1;
  transform: translate(-100%, 0%);
  animation-name: ${leftImgKeyframe}, ${disappearAnimationTag};
  animation-delay: 6s, 8.8s;
  animation-duration: 1s, 1s;
`;

const IntroText = styled.div`
  font-size: 6vw;
  font-weight: 1000;
  position: absolute;
  top: 55%;
  left: 0%;
  width: 100%;
  opacity: 0;
  animation-name: ${appearAnimationTag}, ${bounceOutLeft};
  animation-delay: 0.8s, 2.3s;
  animation-duration: 0.7s, 0.3s;
  animation-fill-mode: forwards;
`;
const IntroUpText = styled.div`
  width: 100%;
  position: absolute;
  font-size: 5vw;
  font-weight: 1000;
  top: 35%;
  animation-name: ${textUp}, ${bounceOutLeft};
  animation-delay: 0.8s, 2.3s;
  animation-duration: 0.7s, 0.3s;
  animation-fill-mode: forwards;
`;
const IntroDownText = styled.div`
  width: 100%;
  position: absolute;
  font-size: 5vw;
  font-weight: 1000;
  top: 45%;
  animation-name: ${textDown}, ${bounceOutLeft};
  animation-delay: 0.8s, 2.3s;
  animation-duration: 0.7s, 0.3s;
  animation-fill-mode: forwards;
`;

const LeftText = styled.div`
  position: absolute;
  font-size: 3vw;
  font-weight: 1000;
  width: 100%;
  opacity: 0;
  animation-name: ${leftTextFirstKeyframe}, ${disappearAnimationTag};
  animation-delay: 2.6s, 5.8s;
  animation-duration: 1s, 1s;
  animation-fill-mode: forwards;
`;

const LeftTextFirst = styled(LeftText)`
  top: 20%;
  left: -30%;
`;

const LeftTextSecond = styled(LeftText)`
  top: 40%;
  left: -20%;
  animation-delay: 2.8s, 6s;
`;
const LeftTextThird = styled(LeftText)`
  top: 60%;
  left: -22%;
  animation-delay: 2.7s, 6.9s;
`;

const RightText = styled.div`
  position: absolute;
  width: 100%;
  left: 75%;
  transform: translate(-50%, 0%);
  font-size: 3vw;
  font-weight: 1000;
  opacity: 0;
  animation-name: ${RightTextFirstKeyframe}, ${disappearAnimationTag};
  animation-delay: 5.8s, 8.2s;
  animation-duration: 1s, 1s;
  animation-fill-mode: forwards;
`;

const RightTextFirst = styled(RightText)`
  animation-delay: 6s, 8.4s;

  top: 18%;
`;
const RightTextSecond = styled(RightText)`
  animation-delay: 6.4s, 8.8s;

  top: 33%;
  left: 88%;
`;
const RightTextThird = styled(RightText)`
  animation-delay: 6.2s, 8.6s;

  top: 50%;
  left: 70%;
`;
const RightTextFourth = styled(RightText)`
  animation-delay: 6.6s, 9s;
  top: 75%;
  left: 78%;
`;

const CenterText = styled.span`
  opacity: 0;
  backface-visibility: visible !important;
  animation-name: ${flipInX}, ${flipOutX};
  animation-delay: 8.8s, 11.2s;
  animation-duration: 1s, 1s;
  animation-fill-mode: forwards;
`;

const CenterTextSecond = styled(CenterText)`
  animation-delay: 9s, 11.4s;
`;
const CenterTextThird = styled(CenterText)`
  animation-delay: 9.2s, 11.6s;
`;
const CenterTextFourth = styled(CenterText)`
  animation-delay: 9.4s, 11.8s;
`;
const CenterTextFifth = styled(CenterText)`
  animation-delay: 9.6s, 12s;
`;

const ProjectFirst = styled(CenterText)`
  animation-delay: 11.8s, 13s;
`;
const ProjectSecond = styled(CenterText)`
  animation-delay: 11.9s, 13.1s;
`;
const ProjectThird = styled(CenterText)`
  animation-delay: 12s, 13.2s;
`;
const ProjectFourth = styled(CenterText)`
  animation-delay: 12.1s, 13.3s;
`;
const ProjectFifth = styled(CenterText)`
  animation-delay: 12.2s, 13.4s;
`;
const ProjectSixth = styled(CenterText)`
  animation-delay: 12.3s, 13.5s;
`;
const ProjectSeventh = styled(CenterText)`
  animation-delay: 12.4s, 13.6s;
`;

const WideScreenMysubway = styled(WideScreen)`
  animation-name: ${startMysubwayGif}, ${keepMysubwayGif}, ${finishMysubwayGif};
  animation-delay: 14s, 14.6s, 18s;
  animation-duration: 1s, 1s, 1s;
  animation-fill-mode: forwards;
  opacity: 1;
`;

const MysubwayText = styled.span`
  font-size: 10vw;
  font-weight: 1000;
  width: 100%;
  text-align: center;
  vertical-align: center;
  background-color: #d3d3d3;
  opacity: 0;
  animation-name: ${startMysubwayTextKeyframes}, ${keepMysubwayTextKeyframes}, ${finishMysubwayTextKeyframes};
  animation-delay: 14s, 14.6s, 18s;
  animation-duration: 1s, 1s, 1s;
  animation-fill-mode: forwards;
`;
const WideScreenIsthisright = styled(WideScreenMysubway)`
  animation-name: ${startIsthisrightGif}, ${keepIsthisrightGif}, ${finishIsthisrightGif};
  animation-delay: 18s, 19s, 22s;
`;
const IsthisrightText = styled(MysubwayText)`
  animation-name: ${startIsthisrightTextKeyframes}, ${keepIsthisrightTextKeyframes}, ${finishIsthisrightTextKeyframes};
  animation-delay: 18s, 19s, 22s;
`;

function Intro() {
  return (
    <IntroSection>
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FirstImg src="../../pic1.jpeg" />
      </div>
      <IntroText>INTRODUCE MYSELF</IntroText>
      <WideScreen>
        <IntroUpText>Byungmin Kim</IntroUpText>
        <IntroDownText>Front-end developer</IntroDownText>
      </WideScreen>

      <LeftImg src="../../typing.gif" />
      <LeftTextFirst>BE INTENSE</LeftTextFirst>
      <LeftTextSecond>
        BE A LIFE OF
        <span>
          <br />
          THE PARTY
        </span>
      </LeftTextSecond>
      <LeftTextThird>
        <span>
          <br />
          IMPROVEMENT
        </span>
      </LeftTextThird>
      <RightImg src="../../typing.gif" />
      <RightTextFirst>JS HTML CSS</RightTextFirst>
      <RightTextSecond>REACT</RightTextSecond>
      <RightTextThird>
        STYLED
        <br />
        COMPONENTS
      </RightTextThird>
      <RightTextFourth>REDUX</RightTextFourth>
      <WideScreen
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '4vw',
          fontWeight: '1000',
        }}>
        <CenterText>NODE.JS</CenterText>
        <CenterTextSecond>EXPRESS</CenterTextSecond>
        <CenterTextThird>SEQUELIZE</CenterTextThird>
        <CenterTextFourth>GITHUB</CenterTextFourth>
        <CenterTextFifth>POSTMAN</CenterTextFifth>
      </WideScreen>
      <WideScreen
        style={{
          fontSize: '10vw',
          fontWeight: '1000',
        }}>
        <ProjectFirst>P</ProjectFirst>
        <ProjectSecond>R</ProjectSecond>
        <ProjectThird>O</ProjectThird>
        <ProjectFourth>J</ProjectFourth>
        <ProjectFifth>E</ProjectFifth>
        <ProjectSixth>C</ProjectSixth>
        <ProjectSeventh>T</ProjectSeventh>
      </WideScreen>
      <WideScreenMysubway>
        <MysubwayText>MYSUBWAY</MysubwayText>
      </WideScreenMysubway>
      <WideScreenIsthisright>
        <IsthisrightText>이거맞아?</IsthisrightText>
      </WideScreenIsthisright>
      <WideScreen style={{ fontWeight: '800' }}>
        <span className="lastText">
          Click
          <br />
          for detail
        </span>
      </WideScreen>
    </IntroSection>
  );
}

export default Intro;
