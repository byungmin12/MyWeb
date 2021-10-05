import React from 'react';
import styled, { keyframes } from 'styled-components';

const Screen = styled.div`
  width: 100%;
  height: 90%;
  background-color: #fafafa;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const AboutMeAndSkill = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

const AboutMe = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contact = styled.div`
  width: 50%;
  background-color: green;
  height: 100%;
`;

const InfoText = styled.div`
  width: 70%;
  font-size: 1.7rem;
  line-height: 1em;
  color: #5b5b5b;
  .name {
    font-size: 3rem;
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
`;

const InfoContainer = styled.div`
  width: 70%;
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
        <Contact>
          <div>Mobile</div>
          <div>E-mail</div>
          <div>github</div>
          <div>Blog</div>
          <div>Kakao</div>
        </Contact>
      </AboutMeAndSkill>
    </Screen>
  );
}

export default Mypage;
