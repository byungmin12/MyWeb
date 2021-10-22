import React from 'react';
import styled, { keyframes } from 'styled-components';

import OpenLogo from './OpenLogo';
import Intro from './Intro';
import Mypage from './Mypage';
import Projects from './Projects';
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
  @media screen and (max-width: 750px) {
    width: 100%;
  }
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
      return on === 'true'
        ? `box-shadow: rgba(255, 255, 255, 0.19) 0px 0px 40px 14px;transition-duration: 0.2s;`
        : null;
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
    opacity: 0.08;
  }
`;

const InnerScratch = styled.div`
  width: 97%;
  height: 97%;
  overflow-x: hidden;
  scroll-padding: 100px;
  ::-webkit-scrollbar {
    display: none;
  }
  ::after {
    width: 97%;
    height: 97%;
    position: absolute;
    top: 0;
    left: 0;
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
      return isOnOff === 'true' ? `content: '';` : null;
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
      content: `첫 직장 생활을 시작했지만, 업계 특성상 성취감이나 개인적인 성장을 위한 기회가 많이 없는 환경이었습니다. 맞지 않는 일을 한다는 것, 그리고 현실에 안주하는 제 모습은 큰 고통이었기에 퇴사를 결정하게 되었습니다. 여러 경험을 거치며 제가 행복하게 할 수 있는 일이 ‘개발자’라는 확신을 하게 되었습니다. 코딩의 개념조차 몰랐지만, 친구들과 놀기 위해 게임 프리서버를 운영했던 기억, 전공과목 중 R을 배웠던 수업, 스크래치를 이용한 교내 애플리케이션 제작 대회, 교내 IoT 벤처관 인턴 등의 활동들을 통해 많은 시간과 에너지가 소요되고 지치고 힘들기도 했었지만, 코드를 실행해 나오는 결과를 통해 직, 간접적으로 성취감을 느낄 수 있었습니다. 당시 기억을 떠올리며 성취감을 얻을 수 있는 분야를 배워야겠다는 확신이 생겼으며 '프런트 엔드 개발자'라는 직종이 저에게 이러한 것들을 줄 수 있다고 생각했기에 길을 걷게 되었습니다.`,
    },
    {
      title: '개발 경험이 있으시다면 어떤 역할을 수행하셨나요?',
      content: `학창 시절 특수반 도우미 활동과 카페 아르바이트 경험을 통해 다양한 위치에서 타인에 대한 관심과 대화를 바탕으로 성공적인 커뮤니케이션을 이뤄낸 경험이 있었기에 코드스테이츠 과정 중 두 번의 팀 프로젝트 모두 팀장으로 역할을 수행했습니다. 팀 프로젝트는 많은 의사소통 속에서 더 좋은 생각과 결속력이 만들어진다고 생각했습니다. 팀원들의 동의를 받고 항상 모각코를 진행하였고 쉬는 시간에는 이야기를 통해 단합을 하였습니다. 이러한 시간이 있었기에 더 자유롭게 의견을 피력할 수 있었으며 그 과정들을 통해 더욱 완성도 있는 SR을 기획할 수 있었습니다.하지만 팀 프로젝트와는 다르게 저는 아직 신입 개발자입니다. 그렇기에 신입 개발자의 입장에서 클라이언트의 니즈를 파악하고, 동료의 이야기를 경청하여 일의 능률을 올리며, 상급자의 지시사항을 배움으로 삼아 문제를 해결할 수 있는 개발자가 되겠습니다.`,
    },
    {
      title: '되고 싶은 개발자는 무엇인가요?',
      content: `첫 번째로 소통하는 개발자가 되고 싶습니다. 개발자는 결국 컴퓨터가 아닌 ‘사람들’과 함께 일하는 직업이라 생각합니다. 아무리 뛰어난 개발자라도 혼자서는 한계가 있다고 생각합니다. 그러나 함께 일하며 소통한다면 막혔던 문제를 풀 수 있을 것이며, 새로운 아이디어를 얻을 수 있을 것입니다. 이러한 결과는 생산성을 높일 수 있을 것입니다.

        두 번째로 변화를 두려워하지 않고 지속해서 발전해가는 개발자가 되고 싶습니다. 개발이라는 환경은 빠르게 변화해 가기에 개발자는 항상 받아들이고 배울 자세가 되어있어야 한다고 생각합니다. 이러한 자세는 새로운 것에 국한되는 것이 아닌 현재 나의 코드, 커뮤니케이션, 생산성 등에 관한 능력이 발전하는 데도 도움을 줄 것입니다.
       
        마지막으로 영어를 잘하는 개발자입니다. 영어는 제가 인생에서 꼭 이루고 싶은 꿈 중 하나입니다. 번역기를 사용하는 것이 아닌, 만든 이의 의도를 정확하게 파악할 수 있는 외국어 능력을 길러 개발 쪽에서도 내 삶의 영역에서도 성공한, 능력있는 개발자, 사람이 될 것입니다.`,
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
          {isOnOff === 'true' && isCheckPage === 1 ? (
            <OuterScratch className="outer-scratch">
              <InnerScratch className="inner-scratch" style={{ backgroundColor: 'white' }}>
                <Intro setIsCheckPage={setIsCheckPage} />
              </InnerScratch>
            </OuterScratch>
          ) : isOnOff === 'true' && isCheckPage === 2 ? (
            <OuterScratch className="outer-scratch">
              <InnerScratch className="inner-scratch" style={{ backgroundColor: 'white', overflowY: 'scroll' }}>
                <Mypage />
                <div style={{ marginBottom: '100px' }}>
                  {resume.map((el, idx) => {
                    return <Question index={idx} key={idx} title={el.title} content={el.content} />;
                  })}
                </div>
              </InnerScratch>
            </OuterScratch>
          ) : isOnOff === 'true' && isCheckPage === 3 ? (
            <OuterScratch className="outer-scratch">
              <InnerScratch className="inner-scratch" style={{ backgroundColor: 'white' }}>
                <Projects />
              </InnerScratch>
            </OuterScratch>
          ) : (
            <OuterScratch className="outer-scratch">
              <InnerScratch className="inner-scratch">
                <BackgroundGrain className="background grain" isOnOff={isOnOff}>
                  {isOnOff === 'true' ? <OpenLogo /> : null}
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
