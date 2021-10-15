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
