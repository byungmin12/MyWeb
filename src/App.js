import styled, { keyframes } from 'styled-components';

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
`;

const ScreenSection = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScreenBody = styled.div`
  width: 70%;
  height: 70%;
  /* background-color: grey; */
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
    background-color: white;
    width: 97%;
    height: 97%;

    .background {
      width: 100%;
      height: 100%;
      background-color: white;
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
  position: fixed;
  top: 100%;
  left: 65%;
  width: 35%;
  height: 20%;
  transform: translate(0%, -100%);
`;

const ProjectBody = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: white;
  clip-path: polygon(12% 23%, 73% 0%, 100% 54%, 100% 100%, 12% 100%);
  position: relative;
`;

const ProjectLeft = styled.div`
  background-color: #d3d3d3;
  clip-path: polygon(12% 23%, 12% 23%, 37% 100%, 12% 100%);
  width: 100%;
  height: 100%;
`;

const Button = styled.div`
  position: fixed;
  background-color: red;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  z-index: 999;
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
                <BackgroundGrain className="background grain">화면</BackgroundGrain>
              </InnerScratch>
            </OuterScratch>
          </MainScreen>
          <BottomStick>막대</BottomStick>
        </ScreenBody>
      </ScreenSection>

      <ProjectSection>
        <ProjectBody>
          <ProjectLeft></ProjectLeft>
          <Button>dd</Button>
        </ProjectBody>
      </ProjectSection>
    </AppBody>
  );
}

export default App;
