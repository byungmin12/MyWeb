import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Circle from './Circle.jsx';
import Question from './Question';

const spin = keyframes`
  from{
    color: #63656e; 
  }
  50%{
    color: transparent; 

  }
  to{
    color: #63656e;
  }
`;

const AboutMeAndSkill = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const AboutMe = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const Skill = styled.div`
  width: 50%;
  text-align: left;
`;

const MainSubSkillContainer = styled.div`
  width: 100%;
  position: relative;
  height: 150px;
`;

const MainSkill = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
  font-size: calc(3vw + 3vh);
  white-space: nowrap;
  font-weight: 800;
  color: #488cc4;
  z-index: 20;
  transition-duration: 1s;
  :hover {
    cursor: pointer;
  }
  ${({ skillName }) => {
    return skillName !== 'Main'
      ? `position: absolute; top: 50%; left: 50%;  transform: scale(0.5); color: #63656e; 
  z-index: 1;
`
      : null;
  }};

  animation: ${(props) =>
    props.skillName === 'Sub'
      ? css`
          ${spin} 1s infinite
        `
      : ''};

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;

const SubSkill = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
  font-size: calc(3vw + 3vh);

  white-space: nowrap;
  font-weight: 800;
  color: #488cc4;
  z-index: 20;
  /* color: #63656e; */
  transition-duration: 1s;
  :hover {
    cursor: pointer;
  }

  ${({ skillName }) => {
    return skillName !== 'Sub'
      ? `position: absolute; top: 50%; left: 50%;  transform: scale(0.5); color: #63656e; 
  z-index: 1;
`
      : null;
  }};
  animation: ${(props) =>
    props.skillName === 'Main'
      ? css`
          ${spin} 1s infinite
        `
      : ''};

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;

const SkillContainer = styled.div`
  width: 100%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, 250px);
`;

const InfoText = styled.div`
  width: 70%;
  font-size: 2rem;
  line-height: 1em;
  color: #5b5b5b;
  margin-top: 30px;
  .name {
    font-size: 3vw;
    font-weight: 800;
    color: #488cc4;
  }
`;

const MyImgContainer = styled.div`
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 250px;
  height: 250px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

const InfoContainer = styled.div`
  width: 70%;
  margin-bottom: 30px;
`;

function Mypage() {
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
  const [skillName, setSkillName] = useState('Main');

  const skillData = [
    { skill: 'HTML', proficiency: 75 },
    { skill: 'CSS', proficiency: 75 },
    { skill: 'JS', proficiency: 83 },
    { skill: 'REACT', proficiency: 87 },
    { skill: 'REDUX', proficiency: 60 },
    { skill: `STYLED COMPONENTS`, proficiency: 75 },
  ];
  const subSkillData = [
    { skill: 'Node.js', proficiency: 55 },
    { skill: 'Express', proficiency: 50 },
    { skill: 'MySQL', proficiency: 50 },
    { skill: 'Sequelize', proficiency: 50 },
  ];

  const handleSkillName = (name) => {
    setSkillName(name);
  };

  return (
    <>
      <AboutMeAndSkill>
        <AboutMe>
          <InfoText>
            <div>미소가 아름다운</div>
            <div>프론트엔드 개발자</div>
            <div className="name">BYUNGMIN, KIM</div>
          </InfoText>
          <MyImgContainer>
            <img src="../../증명사진.jpg" alt="mypic" />
          </MyImgContainer>
          <InfoContainer>
            <div>
              ▶ <span style={{ color: '#488cc4' }}>책임감</span>이 강하며{' '}
              <span style={{ color: '#488cc4' }}>문제 파악 및 해결 능력</span>이 뛰어납니다.
            </div>
            <div>
              ▶ 구성원들과 <span style={{ color: '#488cc4' }}>소통</span>하고 팀의 분위기를 이끄는 것이 뛰어납니다.
            </div>
            <div>
              ▶ 지속적인 학습을 통해 <span style={{ color: '#488cc4' }}>발전을 추구</span>합니다.
            </div>
            <br />
            <div>📲 Mobile: 010-7426-2619</div>
            <div>📧 E-mail: byungminkim12@gmail.com</div>
          </InfoContainer>
          <div style={{ marginBottom: '100px' }}>
            {resume.map((el, idx) => {
              return <Question index={idx} key={idx} title={el.title} content={el.content} />;
            })}
          </div>
        </AboutMe>
        <Skill>
          <MainSubSkillContainer>
            <MainSkill
              className="mainSkill"
              onClick={() => {
                if (skillName === 'Main') {
                  handleSkillName('Sub');
                }
              }}
              skillName={skillName}>
              <span>MAIN SKILL</span>
            </MainSkill>
            <SubSkill
              className="subSkill"
              onClick={() => {
                if (skillName === 'Sub') {
                  handleSkillName('Main');
                }
              }}
              skillName={skillName}>
              <span>SUB SKILL</span>
            </SubSkill>
          </MainSubSkillContainer>
          <SkillContainer>
            {skillName === 'Main'
              ? skillData.map((el, idx) => {
                  return (
                    <div key={idx}>
                      <Circle percent={el.proficiency} skill={el.skill} />
                    </div>
                  );
                })
              : subSkillData.map((el, idx) => {
                  return (
                    <div key={idx}>
                      <Circle percent={el.proficiency} skill={el.skill} />
                    </div>
                  );
                })}
          </SkillContainer>
        </Skill>
      </AboutMeAndSkill>
    </>
  );
}

export default Mypage;
