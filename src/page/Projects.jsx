import React, { Suspense } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Plane from '../components/Object/Plane';
import Scene from '../components/Scene/Scene';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import Card from '../components/Card';

const SkillPageS = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  scroll-snap-align: center;
  font-size: 24px;
  position: relative;

  .bold {
    font-weight: 800;
    color: rgb(104, 82, 242);
  }
`;

const ProjectBackground = styled.div`
  width: 100%;
  height: 250px;
  position: absolute;
  top: 70%;
  z-index: -1;
`;
const ProjectsContainer = styled.div`
  width: 80%;
  height: 60%;
  padding: 60px;
  display: flex;
  justify-content: center;
  border: 3px dashed rgb(104, 82, 242);
  position: relative;
  transform: translate(-50%, 0%);
  top: 50%;
  left: 50%;

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

  .inner {
    width: 100%;
    min-height: 80%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

function Projects() {
  const ProjectsData = [
    {
      url: '../../mywebsize.gif',
      title: 'PORTFOLIO',
      explain: '순수 CSS와 three.js를 활용하여 나를 소개할 수 있는 웹 사이트',
      stack: ['React', 'STYLED COMPONENTS', 'JS', 'three.js'],
      contribution: ['웹 전체적인 디자인 구축', '각종 Animation 지정', '3d 모델링'],
      repository: [
        { where: '배포', url: 'byungmin.kim' },
        { where: '깃헙', url: 'https://github.com/byungmin12/MyWeb' },
      ],
    },
    {
      url: '../../isthisright.gif',
      title: '이거맞아?',
      explain: '운동을 좋아하는 사람들을 위한 운동 피드백 커뮤니티 ',
      stack: ['React', 'STYLED COMPONENTS', 'JS', 'Node.js', 'Sequelize', 'Multer', 'axios', 'Socket.io'],
      contribution: [
        'Landing page 구현',
        'Nav bar 구현',
        'Question page 구현',
        'Login page 구현',
        'Sign up page 구현',
        'Mypage 구현',
        'footer 구현',
      ],
      repository: [
        { where: '배포', url: 'isthisright.kr' },
        { where: '깃헙', url: 'https://github.com/codestates/is-this-right' },
        { where: '기획서', url: 'https://codestates.notion.site/1-S-M-S-31dbe334fe7544b79569c717c8c6bb16' },
      ],
    },
    {
      url: '../../mysubway.gif',
      title: 'MySubway',
      explain:
        '나만의 서브웨이 메뉴를 만들어 저장하고 사람들과 공유합니다. 메뉴 추천을 통해 서브웨이 메뉴 고민을 줄여주는 웹페이지',
      stack: ['React', 'STYLED COMPONENTS', 'JS', 'Node.js'],
      contribution: [
        '웹 전체적인 디자인 구축',
        'Side bar 구현',
        'post page 구현',
        'detail page 구현',
        'post card 구현',
      ],
      repository: [
        { where: '깃헙', url: 'https://github.com/codestates/My-subway' },
        { where: '기획서', url: 'https://github.com/codestates/My-subway/wiki' },
      ],
    },
  ];

  return (
    <SkillPageS>
      <ProjectsContainer>
        <div className="projects">MY PROJECTS</div>
        <div className="inner">
          {ProjectsData.map((el, key) => {
            return <Card data={el} key={key} />;
          })}
        </div>
      </ProjectsContainer>
      <ProjectBackground>
        <Canvas camera={{ position: [0, 10, 100] }} shadowMap>
          <Scene>
            <ambientLight intensity={0.3} />
            <spotLight position={[150, 151, 1]} intensity={0.2} />
            <pointLight intensity={0.3} position={[140, -25, 0]} />
            <Suspense fallback={null}>
              <Plane scale={[0.2, 0.2, 0.2]} position={{ x: 0, y: 0, z: 0 }} where="side" />
            </Suspense>
          </Scene>
        </Canvas>
      </ProjectBackground>
    </SkillPageS>
  );
}

export default Projects;
