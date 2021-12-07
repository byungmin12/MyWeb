import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { ProjectsData } from './Data';

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
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: transform 1s;
  ${(props) => `transform : rotateX(${props.angle}deg);`}
`;

const Card3D = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  min-height: auto;
  transform: ${(props) => `rotateX(${props.angle}deg) translateZ(${props.transZ + 20}px)`};
  display: flex;

  /* @media screen and (max-width: 600px) {
    transform: ${(props) => `rotateX(${props.angle}deg) translateZ(${props.transZ}px)`};
  } */
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
  height: calc(100%);
  width: 100%;
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
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
    @media screen and (max-width: 350px) {
      font-size: 18px;
    }
  }
  .explain {
    font-size: 16px;
    margin-top: 12px;
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
    @media screen and (max-width: 350px) {
      font-size: 8px;
    }
  }
`;

const ContributeAndStack = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  margin-top: 20px;
  transform: rotateY(-180deg);
  backface-visibility: hidden;

  @media screen and (max-width: 600px) {
    /* overflow-y: visible; */
    overflow-y: scroll;
    overflow-x: hidden;
    flex-direction: column-reverse;
  }
  .stackContainer {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 3px dashed rgb(104, 82, 242);
    padding: 20px;

    @media screen and (max-width: 600px) {
      width: 80%;
      border-left: 0px dashed rgb(104, 82, 242);
      border-bottom: 3px dashed rgb(104, 82, 242);
    }
    .stack {
      text-align: center;
      width: 100%;
      height: auto;
      font-size: 16px;
      font-weight: 800;
      border-radius: 12px;
      background-color: rgb(104, 82, 242);
      color: white;
      padding: 5px;
      white-space: nowrap;
      margin-top: 5px;
      @media screen and (max-width: 600px) {
        font-size: 8px;
      }
    }
  }

  .contributeContainer {
    width: calc(50% - 1.5px);
    overflow-x: hidden;
    @media screen and (max-width: 600px) {
      width: 100%;
      overflow: visible;
    }
    .contribute {
      font-size: 20px;
      margin-top: 5px;
      @media screen and (max-width: 600px) {
        font-size: 12px;
      }
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

const Repository = styled.div`
  width: calc(100% - (20px));
  padding: 20px;
  height: auto;
  position: absolute;
  transform: translate(-50%, 0%) rotateY(-180deg);
  left: 50%;
  bottom: 0px;
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
    backface-visibility: hidden;

    @media screen and (max-width: 600px) {
      height: 25px;
      font-size: 12px;
      ${(props) => `width: calc((100% / (${props.children.length})) );`}
    }
    :hover {
      background-color: rgb(104, 82, 242);
      color: white;
      cursor: pointer;
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
    ${Repository} {
      transform: translate(-50%, 0%) rotateY(0deg);
    }
    ${ContributeAndStack} {
      transform: rotateY(0deg);
    }
  }
`;

function Card3DComponent({ idx }) {
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
