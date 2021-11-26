import React, { useState, useRef, useCallback, useEffect, Suspense } from 'react';
import styled, { keyframes, css } from 'styled-components';
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

const SkillPageS = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: center;
  font-size: 24px;
  position: relative;
  .bold {
    font-weight: 800;
    color: rgb(104, 82, 242);
  }
`;

const GradientContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 20%, rgba(0, 0, 0, 1) 74%);
`;

function App() {
  const [position, setPosition] = useState();
  const [changePosition, setChangePosition] = useState();
  const scrollArea = useRef();
  const onScroll = (e) => setPosition(e.target.scrollTop);

  return (
    <AppCss ref={scrollArea} onScroll={onScroll}>
      <CanvasPage />
      <GradientContainer></GradientContainer>
      <GradientPage position={position} changePosition={changePosition} />
      <MyInfoPage />
      <SkillPage />
      <Projects setChangePosition={setChangePosition} />
    </AppCss>
  );
}

export default App;
