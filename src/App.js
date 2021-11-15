import React, { useState, useRef, useCallback, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import styled from 'styled-components';
import CanvasPage from './page/CanvasPage';

const AppCss = styled.div`
  overflow: scroll;
`;

const SkillPage = styled.div`
  width: 100vw;
  height: 400vh;
  background-color: red;
  border: 3px solid black;
`;

function App() {
  // const { scrollYProgress } = useViewportScroll();
  // const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  // const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  const testRef = useRef();
  const testRef1 = useRef();

  const handleScroll = () => {
    console.log(testRef);
    console.log(window.pageYOffset); //전체 중 위치
    console.log(testRef.current.clientHeight); // 현재 div 높이
    console.log(testRef.current.offsetTop); // 부모에서부터 값
    console.log(testRef1.current.offsetTop); // 부모에서부터 값
  };

  useEffect(() => {
    console.log(window.pageYOffset + 1); //전체 중 위치
    console.log(testRef);
    console.log(testRef.current.clientHeight); // 현재 div 높이
    console.log(testRef.current.offsetTop); // 부모에서부터 값
    if (testRef) {
      window.addEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <AppCss>
      <CanvasPage />
      <SkillPage ref={testRef}>
        <div></div>
      </SkillPage>
      <SkillPage ref={testRef1}>
        <div></div>
      </SkillPage>
      <SkillPage>
        <div></div>
      </SkillPage>
      <SkillPage>
        <div></div>
      </SkillPage>
      <SkillPage>
        <div></div>
      </SkillPage>
      <SkillPage>
        <div>asdasd</div>
      </SkillPage>
    </AppCss>
  );
}

export default App;
