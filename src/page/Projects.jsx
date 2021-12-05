import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Card3DComponent from '../components/Card3DComponent';

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
  width: calc(80% + 100px);
  height: calc(90% + 100px);
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
    @media screen and (max-width: 600px) {
      left: 20%;
      font-size: 20px;
    }
  }
`;

const ArrowLeft = styled.div`
  position: absolute;
  left: -2%;
  top: 50%;
  z-index: 999;
  cursor: pointer;
`;

const ArrowRight = styled(ArrowLeft)`
  right: -2%;
  left: 101%;
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
          ㅇ
        </ArrowLeft>
        <ArrowRight
          onClick={() => {
            setIdx((prev) => prev + 1);
          }}>
          ㅇ
        </ArrowRight>
      </ProjectsContainer>
    </ProjectPage>
  );
}

export default Projects;
