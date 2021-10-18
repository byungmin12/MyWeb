import React from 'react';
import styled, { keyframes } from 'styled-components';
import ProjectScene from './ProjectScene';

const Screen = styled.div`
  width: 100%;
  background-color: white;
  height: 100%;
`;

function Projects() {
  const ProjectsData = [
    {
      url: '../../mywebsize.gif',
      title: 'PORTFOLIO',
      explain: '순수 CSS를 활용하여 나를 소개할 수 있는 웹 사이트',
      stack: ['React', 'STYLED COMPONENTS', 'JS'],
      contribution: [
        '웹 전체적인 디자인 구축',
        'Remote controller 구현',
        'Screen 구현',
        'Projector 구현',
        '각종 Animation 지정',
      ],
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
    <Screen>
      {/* <FirstProject></FirstProject>
      <FinalProject></FinalProject>
      <PortFolioProject></PortFolioProject> */}
      {ProjectsData.map((el) => {
        return <ProjectScene data={el} />;
      })}
    </Screen>
  );
}

export default Projects;
