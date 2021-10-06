import React from 'react';
import styled, { keyframes } from 'styled-components';
import Circle from './Circle.jsx';

const spin = keyframes`
 0% { transform: rotate(0); }
  25% { transform: rotate(180deg);
    background-color: greenyellow;
   }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(360deg); }
  100% { transform: rotate(360deg); }
`;

const Screen = styled.div`
  width: 100%;
  height: 90%;
  background-color: #fafafa;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
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
          </InfoContainer>
        </AboutMe>
        <Skill>
          <div style={{ width: '50%', height: '50%' }}>
            <Circle percent={80} skill={`REACT`} />
          </div>
          <div style={{ width: '50%', height: '50%' }}>
            <Circle percent={70} skill={`JS`} />
          </div>
          <div style={{ width: '50%', height: '50%' }}>
            <Circle percent={50} skill={`HTML`} />
          </div>
          <div style={{ width: '50%', height: '50%' }}>
            <Circle percent={20} skill={`CSS`} />
          </div>
        </Skill>
      </AboutMeAndSkill>
    </Screen>
  );
}

export default Mypage;
