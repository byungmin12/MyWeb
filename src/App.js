import styled, { keyframes } from 'styled-components';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

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
  width: 200px;
  height: 300px;
  /* background-color: red; */
  box-shadow: 0px 0px 0 rgb(226, 226, 226), 1px 1px 0 rgb(225, 225, 225), 2px 2px 0 rgb(224, 224, 224),
    3px 3px 0 rgb(223, 223, 223), 4px 4px 0 rgb(221, 221, 221), 5px 5px 0 rgb(220, 220, 220),
    6px 6px 0 rgb(219, 219, 219), 7px 7px 0 rgb(218, 218, 218), 8px 8px 0 rgb(217, 217, 217),
    9px 9px 0 rgb(216, 216, 216), 10px 10px 0 rgb(215, 215, 215), 11px 11px 0 rgb(214, 214, 214),
    12px 12px 0 rgb(213, 213, 213), 13px 13px 0 rgb(211, 211, 211), 14px 14px 0 rgb(210, 210, 210),
    15px 15px 0 rgb(209, 209, 209), 16px 16px 0 rgb(208, 208, 208), 17px 17px 0 rgb(207, 207, 207),
    18px 18px 0 rgb(206, 206, 206), 19px 19px 0 rgb(205, 205, 205), 20px 20px 0 rgb(204, 204, 204),
    21px 21px 0 rgb(203, 203, 203), 22px 22px 0 rgb(201, 201, 201), 23px 23px 0 rgb(200, 200, 200),
    24px 24px 0 rgb(199, 199, 199), 25px 25px 0 rgb(198, 198, 198), 26px 26px 0 rgb(197, 197, 197),
    27px 27px 0 rgb(196, 196, 196), 28px 28px 0 rgb(195, 195, 195), 29px 29px 0 rgb(194, 194, 194),
    30px 30px 0 rgb(193, 193, 193), 31px 31px 0 rgb(191, 191, 191), 32px 32px 0 rgb(190, 190, 190),
    33px 33px 0 rgb(189, 189, 189), 34px 34px 0 rgb(188, 188, 188), 35px 35px 0 rgb(187, 187, 187),
    36px 36px 0 rgb(186, 186, 186), 37px 37px 0 rgb(185, 185, 185), 38px 38px 0 rgb(184, 184, 184),
    39px 39px 0 rgb(183, 183, 183), 40px 40px 0 rgb(181, 181, 181), 41px 41px 0 rgb(180, 180, 180),
    42px 42px 0 rgb(179, 179, 179), 43px 43px 0 rgb(178, 178, 178), 44px 44px 0 rgb(177, 177, 177),
    45px 45px 0 rgb(176, 176, 176), 46px 46px 45px rgba(0, 0, 0, 0.6), 46px 46px 1px rgba(0, 0, 0, 0.5),
    0px 0px 45px rgba(0, 0, 0, 0.2);
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
      <RemoteControl></RemoteControl>
    </AppBody>
  );
}

export default App;
