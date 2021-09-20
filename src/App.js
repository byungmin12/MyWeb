import styled, { keyframes } from 'styled-components';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

//keyframes
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

//CSS

const AppBody = styled.div`
  width: 100vw;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const ScreenSection = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 2%;
`;

const ScreenBody = styled.div`
  width: 70%;
  height: 90%;
  text-align: center;
  display: flex;
  justify-content: center;
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
  height: 95%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  div:nth-child(1) {
    width: 97%;
    height: 97%;
    box-shadow: rgba(255, 255, 255, 0.19) 0px 0px 40px 14px;

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
    padding-left: 100px;
    opacity: 0.08;
  }
`;

const InnerScratch = styled.div`
  ::after {
    width: 97%;
    height: 97%;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 100px;
    opacity: 0.08;
    left: 30%;
    -webkit-animation: ${innerScrat} 2s infinite;
    animation: ${innerScrat} 2s infinite;
  }
`;

const BackgroundGrain = styled.div`
  ::after {
    content: '';
    width: 98%;
    height: 98%;
    position: absolute;
    top: 1%;
    left: 1%;
    opacity: 0.11;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/662025/grain.jpg') repeat center center;
    -webkit-animation: ${grain} 0.5s steps(1) infinite;
    animation: ${grain} 0.5s steps(1) infinite;
  }
`;

const BottomStick = styled.div`
  width: 99%;
  height: 2%;
  background-color: white;
`;

const ProjectSection = styled.div`
  /* background-color: blue; */
  width: 30%;
  height: 20%;
  transform: translate(-50%, -100%);
  position: fixed;
  top: 100%;
  left: 50%;
`;

const TopOfProjector = styled.div`
  background-color: white;
  clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    font-size: 40px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000000;
    -webkit-text-fill-color: #ffb700;
    letter-spacing: 2px;
    font-family: Impact, Charcoal, sans-serif;
  }
`;

const BackOfProjector = styled.div`
  background-color: #d3d3d3;
  width: 100%;
  height: 30%;
`;

const Trapezoid = styled.div`
  background-image: -webkit-radial-gradient(
    50% 100%,
    ellipse cover,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 67%
  );
  background-image: -moz-radial-gradient(50% 100%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 47%);
  background-image: -ms-radial-gradient(50% 100%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);

  position: absolute;
  top: -50%;
  left: 50%;

  clip-path: polygon(0 0, 100% 0, 45% 100%, 55% 100%);
  width: 60vw;
  height: 60%;
  transform: translate(-50%, 0%);
`;

const XRotateText = styled.div`
  transform: rotateX(60deg);
  perspective: 500px;
`;

const XRotateRPower = styled(PowerSettingsNewIcon)`
  transform: rotateX(60deg);
  perspective: 500px;
  :hover {
    cursor: pointer;
  }
`;

const RemoteControl = styled.div`
  position: fixed;
  top: 70%;
  height: 30%;
  min-height: 200px;
  width: 10%;
  min-width: 100px;
  border: 1px solid #807f7b;
  border-radius: 5%;
  box-shadow: 1px 1px #807f7b, 2px 2px #807f7b, 3px 3px #807f7b, 4px 4px #807f7b, 5px 5px #807f7b, 6px 6px #807f7b,
    7px 7px #807f7b, 8px 8px #807f7b, 9px 9px #807f7b, 10px 10px #807f7b, 12px 12px #807f7b, 13px 13px #807f7b,
    14px 14px #807f7b, 15px 15px #807f7b, 16px 16px #807f7b, 17px 17px #807f7b, 18px 18px #807f7b, 19px 19px #807f7b,
    20px 20px #807f7b;
  /* -webkit-transform: translateX(-3px);
  transform: translateX(-3px); */
  /* transform: rotate(30deg); */
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArrowAndPowerSection = styled.div`
  height: 20%;
  width: 90%;
  margin-top: 5%;
  display: flex;
`;

const Direction = styled.div`
  height: 100%;
  width: 30%;
  background-color: white;
`;
const Circle = styled.div`
  width: 40%;
  background-color: blue;
`;

const RemoteControllerButton = styled.div`
  height: 15%;
  width: 90%;
  background-color: red;
  margin: 5% 0 5% 0;
  box-shadow: 3px 3px 3px black;
  transition-duration: 0.3s;
  border-radius: 5px;
  :active {
    box-shadow: 1px 1px 1px black;
  }
  :hover {
    cursor: pointer;
  }
`;

function App() {
  return (
    <AppBody>
      <ScreenSection>
        <ScreenBody>
          <TopStick>
            <div></div>
            <div></div>
            <div></div>
          </TopStick>
          <MainScreen>
            <OuterScratch className="outer-scratch">
              <InnerScratch className="inner-scratch">
                <BackgroundGrain className="background grain"></BackgroundGrain>
              </InnerScratch>
            </OuterScratch>
          </MainScreen>
          <BottomStick></BottomStick>
        </ScreenBody>
      </ScreenSection>

      <ProjectSection>
        <Trapezoid></Trapezoid>
        <TopOfProjector>
          <XRotateText>Kim's PR</XRotateText>
          <XRotateRPower></XRotateRPower>
        </TopOfProjector>
        <BackOfProjector></BackOfProjector>
      </ProjectSection>
      <RemoteControl>
        <ArrowAndPowerSection>
          <Direction></Direction>
          <Circle></Circle>
          <Direction></Direction>
        </ArrowAndPowerSection>
        <RemoteControllerButton onClick={() => {}}></RemoteControllerButton>
        <RemoteControllerButton onClick={() => {}}></RemoteControllerButton>
        <RemoteControllerButton onClick={() => {}}></RemoteControllerButton>
      </RemoteControl>
    </AppBody>
  );
}

export default App;
