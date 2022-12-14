import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import CanvasPage from './page/CanvasPage';
import GradientPage from './page/GradientPage';
import MyInfoPage from './page/MyInfoPage';
import SkillPage from './page/SkillPage';
import Projects from './page/Projects';
import "./fonts.css"
import CustomSVG from './components/CustomSVG.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppCss = styled.div`
  height: 100vh;
  width: 100vw;
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

const UpdateWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: relative;
`

const PositionWrapper = styled.div`
  position: relative;

  & div {
    position: absolute;
    bottom: 180px;
    left : 60%;
    transform: translate(-50%,-50%);

    font-family: "SCDream";
  }

`

function App() {
  const [position, setPosition] = useState();
  const scrollArea = useRef();
  const onScroll = (e) => setPosition(e.target.scrollTop);

  return (

      <Switch>
        <Route path={"/"} exact={true}>
          <AppCss ref={scrollArea} onScroll={onScroll}>
            <UpdateWrapper >
              <PositionWrapper>
                <CustomSVG />
              </PositionWrapper>
            </UpdateWrapper>
          </AppCss>
        </Route>
        <Route path={"/prev"}>
          <AppCss ref={scrollArea} onScroll={onScroll}>
            <CanvasPage />
            <GradientContainer></GradientContainer>
            <GradientPage position={position} />
            <MyInfoPage />
            <SkillPage />
            <Projects />
          </AppCss>
        </Route>
      </Switch>

  );
}

export default App;
