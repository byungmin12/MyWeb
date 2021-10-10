import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const RemoteControl = styled.div`
  position: fixed;

  height: 30%;
  min-height: 200px;
  width: 10%;
  min-width: 100px;
  border: 2px solid #606060;
  border-radius: 5%;
  box-shadow: 1px 1px #000000, 2px 2px #000000, 3px 3px #000000, 4px 4px #000000, 5px 5px #000000, 6px 6px #000000,
    7px 7px #000000, 8px 8px #000000, 9px 9px #000000, 10px 10px #000000, 12px 12px #000000, 13px 13px #000000,
    14px 14px #000000, 15px 15px #000000, 16px 16px #000000, 17px 17px #000000, 18px 18px #000000, 19px 19px #000000,
    20px 20px #000000;
  /* -webkit-transform: translateX(-3px);
  transform: translateX(-3px); */
  transform: rotate(30deg);
  background-color: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition-duration: 1s;
  ${({ isOnOff }) => {
    return isOnOff ? `top: 70%;` : `top: 200%;`;
  }};
`;

const RemoteLight = styled.div`
  background-color: transparent;
  width: 30px;
  height: 15px;
  position: absolute;
  top: 15px;
  display: inline-block;
  box-shadow: rgba(255, 0, 0, 0.95) 0px -30px 50px 8px;
  transition-duration: 0.5s;
  ${({ onLight }) => {
    return onLight ? `display: block;` : `display: none;`;
  }};
`;

const ArrowAndPowerSection = styled.div`
  height: 20%;
  width: 90%;
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
`;

const LeftDirectionWrap = styled.div`
  height: 100%;
  width: 25%;
  filter: drop-shadow(1px 3px 2px #dadada);
  position: relative;
  :active {
    filter: drop-shadow(0px 2px 1px #dadada);
  }
`;

const LeftDirection = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
  transition-duration: 0.3s;
  :active {
    position: absolute;
    top: 1px;
    left: 1px;
  }
  :hover {
    cursor: pointer;
  }
`;

const RightDirectionWrap = styled.div`
  height: 100%;
  width: 25%;
  filter: drop-shadow(1px 3px 2px #dadada);
  position: relative;
  :active {
    filter: drop-shadow(0px 1px 1px #dadada);
  }
`;

const RightDirection = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  clip-path: polygon(0% 0%, 0% 100%, 100% 50%);
  transition-duration: 0.3s;
  :active {
    position: absolute;
    top: 1px;
    left: 1px;
  }
  :hover {
    cursor: pointer;
  }
`;

const CircleWrap = styled.div`
  width: 35%;
  height: 100%;
  position: relative;
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ff0000;
  border-radius: 50%;
  box-shadow: 1px 1px #b60000, 2px 2px #b60000, 3px 3px #b60000;
  transition-duration: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    position: absolute;
    top: 2px;
    left: 2px;
    box-shadow: 1px 1px #b60000, 2px 2px #b60000;
  }
  :hover {
    cursor: pointer;
  }
`;

const RemoteControllerButton = styled.div`
  height: 15%;
  width: 90%;
  background-color: #404040;
  margin: 5% 0 5% 0;
  box-shadow: 3px 3px 3px black;
  transition-duration: 0.3s;
  border-radius: 5px;
  position: relative;

  :active {
    box-shadow: 1px 1px 1px black;
    top: 2px;
    left: 1px;
  }
  :hover {
    cursor: pointer;
  }
`;

function RemoteController({ handleRemotePage, setIsCheckPage, isCheckPage, isOnOff }) {
  const [onLight, setOnLight] = useState(false);
  const handleLeftPage = () => {
    const pageNum = isCheckPage - 1;
    if (isCheckPage === 0) {
      return;
    }
    if (pageNum < 2) {
      handleRemotePage(3);
    } else {
      handleRemotePage(pageNum);
    }
    handleLight();
  };

  const handleRightPage = () => {
    const pageNum = isCheckPage + 1;
    if (isCheckPage === 0) {
      return;
    }
    if (pageNum > 3) {
      handleRemotePage(2);
    } else {
      handleRemotePage(pageNum);
    }
    handleLight();
  };

  const handleLight = () => {
    setOnLight(true);
    setTimeout(() => {
      setOnLight(false);
    }, 300);
  };

  return (
    <RemoteControl isOnOff={isOnOff}>
      <RemoteLight onLight={onLight}></RemoteLight>
      <ArrowAndPowerSection>
        <LeftDirectionWrap onClick={handleLeftPage}>
          <LeftDirection></LeftDirection>
        </LeftDirectionWrap>
        <CircleWrap>
          <Circle
            onClick={() => {
              handleRemotePage(1);
              handleLight();
            }}>
            <PowerSettingsNewIcon style={{ color: 'white', fontWeight: '800', fontSize: '2em' }}></PowerSettingsNewIcon>
          </Circle>
        </CircleWrap>
        <RightDirectionWrap>
          <RightDirection onClick={handleRightPage}></RightDirection>
        </RightDirectionWrap>
      </ArrowAndPowerSection>
      <RemoteControllerButton onClick={() => {}}></RemoteControllerButton>
      <RemoteControllerButton onClick={() => {}}></RemoteControllerButton>
      <RemoteControllerButton onClick={() => {}}></RemoteControllerButton>
    </RemoteControl>
  );
}

export default RemoteController;
