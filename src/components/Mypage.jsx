import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Circle from './Circle.jsx';

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

const Screen = styled.div`
  width: 100%;
  height: 90%;
  background-color: #fafafa;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AboutMeAndSkill = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: left;
`;

const AboutMe = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Skill = styled.div`
  width: 50%;
  background-color: #fafafa;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainSubSkillContainer = styled.div`
  width: 100%;
  position: relative;
  height: 10%;
`;

const MainSkill = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
  font-size: 3vw;
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
    font-size: 25px;
  }
`;

const SubSkill = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
  font-size: 3vw;
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
    font-size: 25px;
  }
`;

const SkillContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
`;

const InfoText = styled.div`
  width: 70%;
  font-size: 2vw;
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
  border-radius: 70%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 70%;
  height: 70%;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const InfoContainer = styled.div`
  width: 70%;
  margin-bottom: 30px;
`;

function Mypage() {
  const [skillName, setSkillName] = useState('Main');

  const skillData = [
    { skill: 'HTML', proficiency: 70 },
    { skill: 'CSS', proficiency: 75 },
    { skill: 'JS', proficiency: 83 },
    { skill: 'REACT', proficiency: 87 },
    { skill: 'REDUX', proficiency: 60 },
    { skill: `STYLED COMPONENTS`, proficiency: 60 },
  ];
  const subSkillData = [
    { skill: 'Node.js', proficiency: 50 },
    { skill: 'Express', proficiency: 50 },
    { skill: 'MySQL', proficiency: 50 },
    { skill: 'Sequelize', proficiency: 50 },
  ];
  const [skillInfo, setSkillInfo] = useState(skillData);

  const handleSkillName = (name) => {
    setSkillName(name);
  };

  return (
    <Screen>
      <AboutMeAndSkill>
        <AboutMe>
          <InfoText>
            <div>미소가 아름다운</div>
            <div>프론트엔드 개발자</div>
            <div className="name">BYUNGMIN, KIM</div>
          </InfoText>
          <MyImgContainer>
            <img src="../../증명사진.jpg" />
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
              ? skillData.map((el) => {
                  return (
                    <div style={{ width: '50%', height: '30%' }}>
                      <Circle percent={el.proficiency} skill={el.skill} />
                    </div>
                  );
                })
              : subSkillData.map((el) => {
                  return (
                    <div style={{ width: '50%', height: '50%' }}>
                      <Circle percent={el.proficiency} skill={el.skill} />
                    </div>
                  );
                })}
          </SkillContainer>
        </Skill>
      </AboutMeAndSkill>
    </Screen>
  );
}

export default Mypage;
