import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const SkillPageS = styled.div`
  width: 100vw;
  min-height: 65vh;
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
  width: 80%;
  height: 60%;
  padding: 60px;
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

const InnerContainer = styled.div`
  width: 100%;
  min-height: 80%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform-style: preserve-3d;
  transform: ${(props) => `rotateX(${props.angle}deg) translateZ(-${props.transZ - 100}px)`};
  transition: transform 1s;
`;

const ArrowLeft = styled.div`
  position: absolute;
  left: -2%;
  top: 50%;
  z-index: 999;
`;

const ArrowRight = styled(ArrowLeft)`
  right: -2%;
  left: 101%;
`;

const Card3D = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  background-color: blue;
  transform: ${(props) => `rotateX(${props.angle}deg) translateZ(${props.transZ + 25}px)`};
`;

function Projects({}) {
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
  const ref = useRef();
  const [tz, setTz] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [idx, setIdx] = useState(0);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (ref) {
      const value = Math.round(ref.current.offsetHeight / 2 / Math.tan(Math.PI / ProjectsData.length));
      setTz(value);
      setRotateY(360 / ProjectsData.length);
    }
  }, []);

  useEffect(() => {
    let angleValue = (idx / ProjectsData.length) * -360;
    setAngle(angleValue);
  }, [idx]);

  return (
    <SkillPageS>
      <ProjectsContainer>
        <div className="projects">MY PROJECTS</div>
        <InnerContainer angle={angle} transZ={tz}>
          {ProjectsData.map((el, key) => {
            return (
              <Card3D ref={ref} key={key} angle={`${rotateY}` * key} transZ={tz}>
                {key}
              </Card3D>
            );
          })}
        </InnerContainer>
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
    </SkillPageS>
  );
}

export default Projects;
