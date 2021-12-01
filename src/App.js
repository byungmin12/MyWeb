import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import CanvasPage from './page/CanvasPage';
import GradientPage from './page/GradientPage';
import MyInfoPage from './page/MyInfoPage';
import SkillPage from './page/SkillPage';
import Projects from './page/Projects';

const AppCss = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
`;

const GradientContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 20%, rgba(0, 0, 0, 1) 74%);
`;

function App() {
  const [position, setPosition] = useState();
  const scrollArea = useRef();
  const onScroll = (e) => setPosition(e.target.scrollTop);

  return (
    <AppCss ref={scrollArea} onScroll={onScroll}>
      <CanvasPage />
      <GradientContainer></GradientContainer>
      <GradientPage position={position} />
      <MyInfoPage />
      <SkillPage />
      <Projects />
    </AppCss>
  );
}

export default App;
