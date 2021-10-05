import React, { useState, useRef } from 'react';

import styled, { keyframes } from 'styled-components';

import ToggleButton from './components/ToggleButton';
import OpenLogo from './components/OpenLogo';
import RemoteController from './components/RemoteController';
import Intro from './components/Intro';
import Mypage from './components/Mypage';
import Myskill from './components/Myskill';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

//keyframes
const grain = keyframes`

  0%, 100% {
    transform: translate(0, 0, 0);
  }

  10% {
    transform: translate(-0.1%, -0.1%);
  }

  20% {
    transform: translate(0.1%, 0.1%);
  }

  30% {
    transform: translate(-0.2%, -0.2%);
  }

  40% {
    transform: translate(0.3%, 0.3%);
  }

  50% {
    transform: translate(-0.3%, -0.3%);
  }

  60% {
    transform: translate(0.4%, 0.4%);
  }

  70% {
    transform: translate(-0.4%, -0.4%);
  }

  80% {
    transform: translate(0.2%, 0.2%);
  }

  90% {
    transform: translate(-0.3%, -0.3%);
  }

`;

const innerScrat = keyframes`
0% {
    transform: translateX(0);
    opacity: 0.3;
  }

  10% {
    transform: translateX(-0.1%);
  }

  20% {
    transform: translateX(0.1%);
  }

  30% {
    transform: translateX(-0.2%);
  }

  40% {
    transform: translateX(0.3%);
  }

  50% {
    transform: translateX(-0.3%);
    opacity: 0.06;
  }

  60% {
    transform: translateX(0.8%);
  }

  70% {
    transform: translateX(-0.3%);
  }

  80% {
    transform: translateX(1%);
    opacity: 0.03;
  }

  90% {
    transform: translateX(2%);
  }

  100% {
    transform: translateX(3%);
  }
`;

//CSS
//CSS
//CSS
//CSS

const AppBody = styled.div`
  width: 100vw;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* perspective: 500px; */
`;

const Test = styled.div`
  width: 100vw;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* transform-style: preserve-3d; */
  transform: translateZ(-50px);
`;

const ScreenSection = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 1%;
`;

const ScreenBody = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopStick = styled.div`
  width: 100%;
  height: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div:nth-child(1) {
    background-color: grey;
    height: 15%;
  }
  div:nth-child(2) {
    background-color: white;
    height: 100%;
  }
  div:nth-child(3) {
    background-color: #d3d3d3;
    clip-path: polygon(0 0, 100% 0, 99% 100%, 1% 100%);
    height: 40%;
  }
`;

const MainScreen = styled.div`
  width: 98%;
  height: 95%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .outer-scratch {
    width: 97%;
    height: 97%;
    ${({ on }) => {
      return on ? `box-shadow: rgba(255, 255, 255, 0.19) 0px 0px 40px 14px;transition-duration: 0.2s;` : null;
    }};

    .background {
      width: 100%;
      height: 100%;
      background-color: white; //바꿔주기
    }

    .outer-scratch,
    .inner-scratch {
      height: 100%;
      width: 100%;
    }
  }
`;

const OuterScratch = styled.div`
  ::after {
    width: 97%;
    height: 97%;
    position: absolute;
    top: 0;
    left: 0;
    /* padding-left: 100px; */
    opacity: 0.08;
  }
`;

const InnerScratch = styled.div`
  width: 97%;
  height: 97%;
  ::after {
    width: 97%;
    height: 97%;
    position: absolute;
    top: 0;
    left: 0;
    /* padding-left: 100px; */
    opacity: 0.08;
    left: 30%;
    -webkit-animation: ${innerScrat} 2s infinite;
    animation: ${innerScrat} 2s infinite;
  }
`;

const BackgroundGrain = styled.div`
  ::after {
    content: '';
    width: 98%;
    height: 98%;
    position: absolute;
    top: 1%;
    left: 1%;
    opacity: 0.11;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/662025/grain.jpg') repeat center center;
    -webkit-animation: ${grain} 0.5s steps(1) infinite;
    animation: ${grain} 0.5s steps(1) infinite;
  }
`;

const BottomStick = styled.div`
  width: 99%;
  height: 2%;
  background-color: white;
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
  /* background-image: -moz-radial-gradient(50% 100%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 47%); */

  position: absolute;
  top: -50%;
  left: 50%;
  clip-path: polygon(0 0, 100% 0, 45% 100%, 55% 100%);
  width: 60vw;
  height: 60%;
  transform: translate(-50%, 0%);
  transition-duration: 0.2s;
  ${({ on }) => {
    return on ? `opacity: 0.5;` : `opacity: 0;`;
  }};
`;

const XRotateText = styled.div`
  transform: rotateX(60deg);
  perspective: 500px;
  height: 50px;
`;

//app
//app
//app
//app
//app
//app
//app

function App() {
  const [isOnOff, setIsOnOff] = useState(false);
  const [isCheckPage, setIsCheckPage] = useState(0);
  const refCheckbox = useRef();

  const handleOnOff = () => {
    setIsOnOff(!isOnOff);
    setIsCheckPage(0);
  };

  const handleRemotePage = (num) => {
    setIsCheckPage(num);
  };

  return (
    <AppBody>
      <Test>
        <ScreenSection>
          <ScreenBody>
            <TopStick>
              <div></div>
              <div></div>
              <div></div>
            </TopStick>
            <MainScreen on={isOnOff}>
              {isOnOff === true && isCheckPage === 1 ? (
                <OuterScratch className="outer-scratch">
                  <InnerScratch className="inner-scratch" style={{ backgroundColor: 'white' }}>
                    <Intro />
                  </InnerScratch>
                </OuterScratch>
              ) : isOnOff === true && isCheckPage === 2 ? (
                <OuterScratch className="outer-scratch">
                  <InnerScratch className="inner-scratch" style={{ backgroundColor: 'white' }}>
                    <Navbar page={2} />
                    <Mypage />
                  </InnerScratch>
                </OuterScratch>
              ) : isOnOff === true && isCheckPage === 3 ? (
                <OuterScratch className="outer-scratch">
                  <InnerScratch className="inner-scratch" style={{ backgroundColor: 'white' }}>
                    <Navbar page={3} />
                    <Myskill />
                  </InnerScratch>
                </OuterScratch>
              ) : isOnOff === true && isCheckPage === 4 ? (
                <OuterScratch className="outer-scratch">
                  <InnerScratch className="inner-scratch" style={{ backgroundColor: 'white' }}>
                    <Navbar page={4} />
                    <Projects />
                  </InnerScratch>
                </OuterScratch>
              ) : (
                <OuterScratch className="outer-scratch">
                  <InnerScratch className="inner-scratch">
                    <BackgroundGrain className="background grain">{isOnOff ? <OpenLogo /> : null}</BackgroundGrain>
                  </InnerScratch>
                </OuterScratch>
              )}
            </MainScreen>
            <BottomStick></BottomStick>
          </ScreenBody>
        </ScreenSection>

        <ProjectSection>
          <Trapezoid on={isOnOff}></Trapezoid>
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
        <RemoteController
          handleRemotePage={handleRemotePage}
          setIsCheckPage={setIsCheckPage}
          isCheckPage={isCheckPage}
          refCheckbox={refCheckbox}
        />
      </Test>
    </AppBody>
  );
}

export default App;
