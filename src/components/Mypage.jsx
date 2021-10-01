import React from 'react';
import styled, { keyframes } from 'styled-components';

const Screen = styled.div`
  width: 100%;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const InfoMe = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0px 20px 0px;
  justify-content: space-around;
`;

const DataContainer = styled.div`
  width: 20%;
  height: 30%;
  min-width: 100px;
  min-height: 100px;
  border: 3px solid skyblue;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  font-size: 1.2em;
`;

function Mypage() {
  return (
    <Screen>
      <InfoMe>
        <DataContainer>
          <span>이름 : 김병민</span> <span>나이 : 28세</span> <span>거주 : 인천</span>
        </DataContainer>
        <DataContainer>
          <span>이메일 : 김병민</span> <span>카톡 : 28세</span> <span>모바일 : 인천</span>
        </DataContainer>
        <DataContainer>
          <span>Github : 김병민</span> <span>블로그 : 28세</span>
        </DataContainer>
      </InfoMe>
      <div>자소셔 영ㅇㄱ</div>
    </Screen>
  );
}

export default Mypage;
