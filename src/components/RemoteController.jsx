import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const RemoteControl = styled.div`
  position: fixed;

  height: 300px;
  min-height: 200px;
  width: 150px;
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
  text-align: left;
  font-size: 1.3rem;

  font-weight: 800;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition-duration: 0.3s;

  color: black;
  :active {
    box-shadow: 1px 1px 1px black;
    top: 2px;
    left: 1px;
    color: white;
  }
  :hover {
    cursor: pointer;
  }
`;

const SnsSection = styled.div`
  width: 90%;
  height: 12%;
  margin: 5% 0 5% 0;
  display: flex;
  justify-content: space-evenly;
`;

const SnsButton = styled.div`
  background-color: #404040;
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

  const handleTwoPage = () => {
    setIsCheckPage(2);
  };
  const handleThreePage = () => {
    setIsCheckPage(3);
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
      {/* <RemoteControllerButton href="https://github.com/byungmin12" target="_blank">
        <svg height="32" viewBox="0 0 16 16">
          <path
            fill="white"
            d="M 8 0 C 3.58 0 0 3.58 0 8 c 0 3.54 2.29 6.53 5.47 7.59 c 0.4 0.07 0.55 -0.17 0.55 -0.38 c 0 -0.19 -0.01 -0.82 -0.01 -1.49 c -2.01 0.37 -2.53 -0.49 -2.69 -0.94 c -0.09 -0.23 -0.48 -0.94 -0.82 -1.13 c -0.28 -0.15 -0.68 -0.52 -0.01 -0.53 c 0.63 -0.01 1.08 0.58 1.23 0.82 c 0.72 1.21 1.87 0.87 2.33 0.66 c 0.07 -0.52 0.28 -0.87 0.51 -1.07 c -1.78 -0.2 -3.64 -0.89 -3.64 -3.95 c 0 -0.87 0.31 -1.59 0.82 -2.15 c -0.08 -0.2 -0.36 -1.02 0.08 -2.12 c 0 0 0.67 -0.21 2.2 0.82 c 0.64 -0.18 1.32 -0.27 2 -0.27 c 0.68 0 1.36 0.09 2 0.27 c 1.53 -1.04 2.2 -0.82 2.2 -0.82 c 0.44 1.1 0.16 1.92 0.08 2.12 c 0.51 0.56 0.82 1.27 0.82 2.15 c 0 3.07 -1.87 3.75 -3.65 3.95 c 0.29 0.25 0.54 0.73 0.54 1.48 c 0 1.07 -0.01 1.93 -0.01 2.2 c 0 0.21 0.15 0.46 0.55 0.38 A 8.013 8.013 0 0 0 16 8 c 0 -4.42 -3.58 -8 -8 -8 Z"></path>
        </svg>
        <span>GITHUB</span>
      </RemoteControllerButton>
      <RemoteControllerButton href="https://velog.io/@kbm940526" target="_blank">
        <svg height="32" viewBox="0 0 16 16" style={{ marginRight: '16px' }}>
          <image href="../../vlog.ico" width="16" height="16"></image>
        </svg>
        <span>BLOG</span>
      </RemoteControllerButton> */}

      <RemoteControllerButton onClick={handleTwoPage}>My page</RemoteControllerButton>
      <RemoteControllerButton onClick={handleThreePage}>PROJECTS</RemoteControllerButton>
      <SnsSection>
        <SnsButton>
          <a href="https://github.com/byungmin12" target="_blank">
            <svg height="100%" viewBox="0 0 16 16">
              <path
                fill="white"
                d="M 8 0 C 3.58 0 0 3.58 0 8 c 0 3.54 2.29 6.53 5.47 7.59 c 0.4 0.07 0.55 -0.17 0.55 -0.38 c 0 -0.19 -0.01 -0.82 -0.01 -1.49 c -2.01 0.37 -2.53 -0.49 -2.69 -0.94 c -0.09 -0.23 -0.48 -0.94 -0.82 -1.13 c -0.28 -0.15 -0.68 -0.52 -0.01 -0.53 c 0.63 -0.01 1.08 0.58 1.23 0.82 c 0.72 1.21 1.87 0.87 2.33 0.66 c 0.07 -0.52 0.28 -0.87 0.51 -1.07 c -1.78 -0.2 -3.64 -0.89 -3.64 -3.95 c 0 -0.87 0.31 -1.59 0.82 -2.15 c -0.08 -0.2 -0.36 -1.02 0.08 -2.12 c 0 0 0.67 -0.21 2.2 0.82 c 0.64 -0.18 1.32 -0.27 2 -0.27 c 0.68 0 1.36 0.09 2 0.27 c 1.53 -1.04 2.2 -0.82 2.2 -0.82 c 0.44 1.1 0.16 1.92 0.08 2.12 c 0.51 0.56 0.82 1.27 0.82 2.15 c 0 3.07 -1.87 3.75 -3.65 3.95 c 0.29 0.25 0.54 0.73 0.54 1.48 c 0 1.07 -0.01 1.93 -0.01 2.2 c 0 0.21 0.15 0.46 0.55 0.38 A 8.013 8.013 0 0 0 16 8 c 0 -4.42 -3.58 -8 -8 -8 Z"></path>
            </svg>
          </a>
        </SnsButton>
        <SnsButton>
          <a href="https://velog.io/@kbm940526" target="_blank">
            <svg height="100%" viewBox="0 0 16 16">
              <image href="../../vlog.ico" width="16" height="16"></image>
            </svg>
          </a>
        </SnsButton>
        <SnsButton>
          <a href="https://www.notion.so/Resume-69f2c302a16e49f8a89935cf5c0a289c" target="_blank">
            <svg height="100%" viewBox="0 0 115 126" style={{}}>
              <path
                fill="white"
                d="M 20.6927 21.9315C 24.5836 25.0924 26.0432 24.8512 33.3492 24.3638L 102.228 20.2279C 103.689 20.2279 102.474 18.7705 101.987 18.5283L 90.5477 10.2586C 88.3558 8.55699 85.4356 6.60818 79.8387 7.09563L 13.1433 11.9602C 10.711 12.2014 10.2251 13.4175 11.1939 14.3924L 20.6927 21.9315ZM 24.8281 37.9835L 24.8281 110.456C 24.8281 114.351 26.7745 115.808 31.1553 115.567L 106.853 111.187C 111.236 110.946 111.724 108.267 111.724 105.103L 111.724 33.1169C 111.724 29.958 110.509 28.2544 107.826 28.4976L 28.721 33.1169C 25.8018 33.3622 24.8281 34.8225 24.8281 37.9835ZM 99.5567 41.8711C 100.042 44.0622 99.5567 46.2512 97.3618 46.4974L 93.7143 47.2241L 93.7143 100.728C 90.5477 102.43 87.6275 103.403 85.1942 103.403C 81.2983 103.403 80.3226 102.186 77.4044 98.54L 53.5471 61.087L 53.5471 97.3239L 61.0964 99.0275C 61.0964 99.0275 61.0964 103.403 55.0057 103.403L 38.2148 104.377C 37.727 103.403 38.2148 100.973 39.9179 100.486L 44.2996 99.2717L 44.2996 51.36L 38.2158 50.8725C 37.728 48.6815 38.9431 45.5225 42.3532 45.2773L 60.3661 44.0631L 85.1942 82.0036L 85.1942 48.4402L 78.864 47.7136C 78.3781 45.0351 80.3226 43.0902 82.7569 42.849L 99.5567 41.8711ZM 7.5434 5.39404L 76.9175 0.285276C 85.4366 -0.445402 87.6285 0.0440428 92.983 3.93368L 115.128 19.4982C 118.782 22.1747 120 22.9034 120 25.8211L 120 111.187C 120 116.537 118.051 119.701 111.237 120.185L 30.6734 125.05C 25.5584 125.294 23.124 124.565 20.4453 121.158L 4.13735 99.9994C 1.21516 96.1048 0 93.191 0 89.7819L 0 13.903C 0 9.5279 1.94945 5.8785 7.5434 5.39404Z"></path>
            </svg>
          </a>
        </SnsButton>
      </SnsSection>
    </RemoteControl>
  );
}

export default RemoteController;
