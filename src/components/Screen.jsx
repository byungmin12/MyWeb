import React from 'react';
import styled, { keyframes } from 'styled-components';

import OpenLogo from './OpenLogo';
import Intro from './Intro';
import Mypage from './Mypage';
import Projects from './Projects';
import Navbar from './Navbar';
import Question from './Question';

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

const appearScreen = keyframes`
    to{
        height: 95%;
    }
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
  height: 0%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${appearScreen} 2s forwards;
  animation-delay: 1s;
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
  overflow-x: hidden;
  /* scroll-snap-type: y mandatory; */
  scroll-padding: 100px;

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
    width: 98%;
    height: 98%;
    position: absolute;
    top: 1%;
    left: 1%;
    opacity: 0.11;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/662025/grain.jpg') repeat center center;
    -webkit-animation: ${grain} 0.5s steps(1) infinite;
    animation: ${grain} 0.5s steps(1) infinite;

    ${({ isOnOff }) => {
      return isOnOff ? `content: '';` : null;
    }};
  }
`;

const BottomStick = styled.div`
  width: 99%;
  height: 2%;
  background-color: white;
`;

function Screen({ isOnOff, isCheckPage, setIsCheckPage }) {
  const resume = [
    {
      title: '개발을 시작하게 된 이유와 개발자가 되려는 이유가 무엇인가요?',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!',
    },
    {
      title: '개발 경험이 있으시다면 어떤 역할을 수행하셨나요?',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!',
    },
    {
      title: '되고 싶은 개발자는 무엇인가요?',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquam tenetur deserunt quidem distinctio id itaque rerum odit ad sint explicabo, quis similique, eveniet eius aut nobis necessitatibus. Quibusdam, porro!',
    },
  ];

  return (
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
                <Intro setIsCheckPage={setIsCheckPage} />
              </InnerScratch>
            </OuterScratch>
          ) : isOnOff === true && isCheckPage === 2 ? (
            <OuterScratch className="outer-scratch">
              <InnerScratch className="inner-scratch" style={{ backgroundColor: 'white', overflowY: 'scroll' }}>
                <Navbar page={2} setIsCheckPage={setIsCheckPage} />
                <Mypage />
                <div style={{ marginBottom: '100px' }}>
                  {resume.map((el, idx) => {
                    return <Question index={idx} title={el.title} content={el.content} />;
                  })}
                </div>
              </InnerScratch>
            </OuterScratch>
          ) : isOnOff === true && isCheckPage === 3 ? (
            <OuterScratch className="outer-scratch">
              <InnerScratch className="inner-scratch" style={{ backgroundColor: 'white' }}>
                <Navbar page={3} setIsCheckPage={setIsCheckPage} />
                <Projects />
              </InnerScratch>
            </OuterScratch>
          ) : (
            <OuterScratch className="outer-scratch">
              <InnerScratch className="inner-scratch">
                <BackgroundGrain className="background grain" isOnOff={isOnOff}>
                  {isOnOff ? <OpenLogo /> : null}
                </BackgroundGrain>
              </InnerScratch>
            </OuterScratch>
          )}
        </MainScreen>
        <BottomStick></BottomStick>
      </ScreenBody>
    </ScreenSection>
  );
}

export default Screen;
