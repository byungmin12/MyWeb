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

function App() {
  const [position, setPosition] = useState();
  const scrollArea = useRef();
  const onScroll = (e) => setPosition(e.target.scrollTop);

  return (
    <AppCss ref={scrollArea} onScroll={onScroll}>
      <CanvasPage />
      <GradientPage position={position} />
      <MyInfoPage />
      <SkillPage />
      <Projects />
    </AppCss>
  );
}

export default App;
