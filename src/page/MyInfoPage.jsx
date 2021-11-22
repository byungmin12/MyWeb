import React from 'react';
import styled, { keyframes } from 'styled-components';
import Question from '../components/Question';
import CloudContainer from '../components/CloudContainer';
import Fade from 'react-reveal/Fade';

const textKeyframes = keyframes`
  30%{
    color: white;
  }
  60%{
    color: rgb(104, 82, 242);
  }
  90%{
    color: white;
  }
  100%{
    color: rgb(104, 82, 242);
  }
`;

const SkillPage = styled.div`
  width: 100vw;
  height: auto;
  padding-bottom: 300px;
  min-height: 100vh;
  scroll-snap-align: start;
  font-size: 24px;
  position: relative;
  .bold {
    font-weight: 800;
    color: rgb(104, 82, 242);
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 75px 50px;
  @media screen and (max-width: 600px) {
    padding: 0px;
  }
`;

const Title = styled.div`
  width: 500px;
  font-size: 48px;
  font-weight: 1000;
  white-space: nowrap;

  .color {
    color: rgb(104, 82, 242);
  }
  @media screen and (max-width: 600px) {
    font-size: 24px;
    white-space: normal;
    padding: 15px;
  }
`;

const MyInfoContainer = styled.div`
  width: auto;
  height: auto;

  .inner {
    div {
      margin-bottom: 20px;
    }
    .explain {
      margin-bottom: 50px;
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
  ul {
    font-size: 24px;
    @media screen and (max-width: 600px) {
      margin-bottom: 15px;
      font-size: 14px;
    }
  }
`;

const HoverModal = styled.span`
  position: absolute;
  top: 50%;
  left: -50%;
  color: black;
  animation: ${textKeyframes} 2s infinite;
  display: none;
  border: 1px solid rgb(104, 82, 242);
  border-radius: 3px;
`;

const HoverText = styled.span`
  cursor: pointer;
  position: relative;
  color: rgb(104, 82, 242);
  :hover {
    ${HoverModal} {
      display: block;
    }
  }
`;

const ConContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const QuestionContainer = styled.div``;

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

function MyInfoPage() {
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
    <SkillPage>
      <InnerContainer>
        <Title>
          <span>
            <span className="color">미소</span>가 아름다운
          </span>
          <br />
          <span>
            <span className="color">집념</span> 의 사나이
          </span>
          <br />
          <span>
            <span className="color"> 프론트엔드</span> 개발자 김병민입니다.
          </span>
        </Title>
        <MyInfoContainer>
          <div className="inner">
            <div className="explain">
              <span className="bold">React</span> 기반의 웹 개발이 가능한 프론트엔드 개발자입니다.<br></br>
              <span className="bold">React, Styled components, Redux </span>등을 사용한 웹 애플리케이션 개발 경험이
              있습니다.
            </div>
            <ConContainer>
              <Fade left>
                <ul>
                  <li>
                    책임감이 강하며 문제를 파악하고 해결하기 위해{' '}
                    <HoverText>
                      노력<HoverModal>깃헙에서확인하기</HoverModal>
                    </HoverText>
                    합니다.
                  </li>
                  <li>
                    구성원들과 <HoverText>소통</HoverText>하고 팀의 분위기를 이끄는 것이 뛰어납니다.
                  </li>
                  <li>
                    지속적인{' '}
                    <HoverText>
                      학습과 발전<HoverModal>깃헙에서확인하기</HoverModal>
                    </HoverText>
                    을 추구합니다.
                  </li>
                </ul>
              </Fade>
              <ContactContainer>
                <Fade right>
                  <div>
                    <div>📲 Mobile: 010-7426-2619</div>
                    <div>📧 E-mail: byungminkim12@gmail.com</div>
                  </div>
                  <div>
                    <div>😍 Github: Kim's Github </div>
                    <div>🏠 Blog: Kim's Blog </div>
                  </div>
                </Fade>
              </ContactContainer>
            </ConContainer>
          </div>
        </MyInfoContainer>
        <QuestionContainer>
          <Fade bottom>
            {resume.map((el, idx) => {
              return <Question index={idx} key={idx} title={el.title} content={el.content} />;
            })}
          </Fade>
        </QuestionContainer>
      </InnerContainer>
      <CloudContainer />
    </SkillPage>
  );
}

export default MyInfoPage;
