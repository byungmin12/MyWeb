import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const dash = keyframes`
      from {
    stroke-dashoffset: 60;
  }
  to {
    stroke-dashoffset: 0;
    stroke:rgb(104, 82, 242);

  }
`;

const InnerContainer = styled.div`
  width: 100%;
  min-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
  ${(props) => `transform : rotateX(${props.angle}deg);`}
`;

const Card3D = styled.div`
  position: absolute;
  width: 700px;
  height: 80%;
  min-height: 500px;
  transform: ${(props) => `rotateX(${props.angle}deg) translateZ(${props.transZ + 25}px)`};
`;

const GifContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transition: 1s;
  border: 3px solid black;

  img {
    width: 100%;
    height: 100%;
  }
`;

const GifTextContainer = styled.div`
  height: calc(100% - (20px));
  width: 100%;
  padding: 20px 20px 0px 20px;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: 1s;
  border: 3px solid black;

  .title {
    font-size: 48px;
    font-weight: 1000;
    width: 100%;
    text-align: center;
    color: rgb(104, 82, 242);
  }
  .explain {
    font-size: 16px;
    margin-top: 12px;
  }
`;

const ContributeAndStack = styled.div`
  display: flex;
  height: auto;
  margin-top: 20px;

  .stackContainer {
    width: 50%;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 3px dashed rgb(104, 82, 242);
    .stack {
      text-align: center;
      width: 200px;
      height: auto;
      font-size: 16px;
      font-weight: 800;
      border-radius: 12px;
      background-color: rgb(104, 82, 242);
      color: white;
      padding: 5px;
      white-space: nowrap;
      margin-top: 5px;
    }
  }

  .contributeContainer {
    width: 50%;
    .contribute {
      font-size: 20px;
      margin-top: 5px;
    }
    polyline {
      fill: none;
      stroke: #ffffff;
      stroke-width: 8px;
      stroke-miterlimit: 10;
      stroke-dashoffset: 0;
      stroke-dasharray: 60;
      animation: ${dash} 1s infinite;
    }
  }
`;

const Card3DContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  perspective: 1000px;
  transition: 1s;

  :hover {
    ${GifContainer} {
      transform: rotateY(180deg);
    }
    ${GifTextContainer} {
      transform: rotateY(0deg);
    }
  }
`;

const Repository = styled.div`
  width: calc(100% - (20px));
  padding: 20px;
  height: auto;
  position: absolute;
  transform: translate(-50%, 0%);
  left: 50%;
  bottom: 30px;
  display: flex;
  justify-content: space-between;
  backface-visibility: hidden;

  .button {
    height: 50px;
    border: 1px solid rgb(104, 82, 242);
    color: rgb(104, 82, 242);
    font-size: 24px;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => `width: calc((100% / (${props.children.length})) - 30px);`}
    transition-duration: 0.5s;
    text-decoration-line: none;
    :hover {
      background-color: rgb(104, 82, 242);
      color: white;
      cursor: pointer;
    }
  }
`;

function Card3DComponent({ idx }) {
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
      stack: ['React', 'STYLED COMPONENTS', 'JS'],
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
      stack: ['React', 'STYLED COMPONENTS', 'JS'],
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
    <InnerContainer angle={angle} transZ={tz}>
      {ProjectsData.map((el, key) => {
        return (
          <Card3D ref={ref} key={key} angle={`${rotateY}` * key} transZ={tz}>
            <Card3DContainer>
              <GifContainer>
                <img src={el.url} />
              </GifContainer>
              <GifTextContainer>
                <div className="title">{el.title}</div>
                <div className="explain">{el.explain}</div>
                <ContributeAndStack>
                  <div className="contributeContainer">
                    {el.contribution.map((ct) => {
                      return (
                        <div className="contribute">
                          <svg width="30" height="20" viewBox="-15 0 80 40">
                            <polyline className="polyline" points="9.06 20.89 25.85 35.74 50.46 9.35" />
                          </svg>
                          <span>{ct}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="stackContainer">
                    {el.stack.map((st) => {
                      return <span className="stack">{st}</span>;
                    })}
                  </div>
                </ContributeAndStack>
                <Repository>
                  {el.repository.map((rep) => {
                    return (
                      <a href={rep.url} target="_blank" className="button" width={el.length}>
                        {rep.where}
                      </a>
                    );
                  })}
                </Repository>
              </GifTextContainer>
            </Card3DContainer>
          </Card3D>
        );
      })}
    </InnerContainer>
  );
}

export default Card3DComponent;
