import styled from 'styled-components';

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
  background-color: grey;
  text-align: center;
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
        <ScreenBody>바보</ScreenBody>
      </ScreenSection>
      <ProjectSection>
        <ProjectBody>
          <ProjectLeft></ProjectLeft>
          <Button>ddd</Button>
        </ProjectBody>
      </ProjectSection>
    </AppBody>
  );
}

export default App;
