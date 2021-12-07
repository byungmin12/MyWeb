import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Card3DComponent from '../components/Card3DComponent';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProjectPage = styled.div`
  width: 100vw;
  height: 65vh;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  .bold {
    font-weight: 800;
    color: rgb(104, 82, 242);
  }
`;

const ProjectsContainer = styled.div`
  width: calc(80%);
  height: calc(90%);
  border: 3px dashed rgb(104, 82, 242);
  position: relative;
  perspective: 1000px;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;

  .projects {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 0;
    left: 10%;
    font-size: 48px;
    font-weight: 1000;
    color: rgb(104, 82, 242);
    background-color: white;
    text-overflow: ellipsis;
    z-index: 999;
    @media screen and (max-width: 600px) {
      left: 20%;
      font-size: 20px;
    }
  }
`;

const ArrowLeft = styled.div`
  position: absolute;
  left: 0;
  z-index: 999;
  cursor: pointer;
  width: 15%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.3); */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgb(255, 255, 255);
  background: linear-gradient(270deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
`;

const ArrowRight = styled(ArrowLeft)`
  background: rgb(255, 255, 255);
  background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
  transform: translate(-100%, 0%);
  left: 100%;
`;

function Projects({}) {
  const [idx, setIdx] = useState(0);

  return (
    <ProjectPage>
      <ProjectsContainer>
        <div className="projects">MY PROJECTS</div>
        <Card3DComponent idx={idx} />
        <ArrowLeft
          onClick={() => {
            setIdx((prev) => prev - 1);
          }}>
          <ArrowBackIosIcon />
        </ArrowLeft>
        <ArrowRight
          onClick={() => {
            setIdx((prev) => prev + 1);
          }}>
          <ArrowForwardIosIcon />
        </ArrowRight>
      </ProjectsContainer>
    </ProjectPage>
  );
}

export default Projects;
