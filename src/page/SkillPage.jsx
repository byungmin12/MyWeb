import React from 'react';
import styled, { keyframes } from 'styled-components';
import Flip from 'react-reveal/Fade';

const SkillPageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  font-size: 24px;
  position: relative;
  padding: 200px 0px 200px 0px;

  .bold {
    font-weight: 800;
    color: rgb(104, 82, 242);
  }
`;

const Container = styled.div`
  width: 80%;
  height: 60%;
  position: relative;
  transform: translate(-50%, 0%);
  top: 50%;
  left: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const SkillTitle = styled.div`
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
`;

const GraphContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .percentText {
    color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
  }
  .skillTitle {
    width: 30%;
    background-color: rgb(104, 82, 242);
    border-radius: 40px;
    margin-right: 12px;
    text-overflow: ellipsis;
    padding-left: 0px;
    font-size: 12px;
    text-align: center;
    position: relative;
    .titleSpan {
      padding-left: 20px;
      color: white;
      font-weight: bold;
      font-size: 15px;
      vertical-align: middle;
      text-overflow: ellipsis;
      @media screen and (max-width: 600px) {
        padding-left: 0px;
        font-size: 12px;
        text-align: center;
      }
    }
    .alarm {
      width: 10px;
      height: 10px;
      background-color: #33ff33;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;
      left: -20px;
    }
  }
`;

const GraphBack = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ccc;
  border-radius: 0px 40px 40px 0px;
`;

const graphKeyframes = (w) => keyframes`
  0%{ width: 0% ;}
  100% {
    width: ${w}%;
  }
`;

const GraphFront = styled.span`
  display: block;
  height: 100%;
  line-height: 100%;
  text-align: right;
  background-color: #87ceeb;
  border-radius: 0px 40px 40px 0px;
  z-index: 999;

  ${({ percent }) => {
    return `width: ${percent}%;`;
  }}
  animation : ${(props) => graphKeyframes(props.percent)} 10s infinite;
`;

const MainSkillContainer = styled.div`
  position: relative;
  border: 3px dashed rgb(104, 82, 242);
  padding: 40px;
  margin-bottom: 80px;
`;

function SkillPage() {
  const skillData = [
    { skill: 'HTML', proficiency: 75, is_used: true },
    { skill: 'CSS', proficiency: 75, is_used: true },
    { skill: 'JavaScript', proficiency: 83, is_used: true },
    { skill: `TypeScript`, proficiency: 60, is_used: false },
    { skill: 'REACT', proficiency: 87, is_used: true },
    { skill: 'REDUX', proficiency: 70, is_used: true },
    { skill: `STYLED COMPONENTS`, proficiency: 75, is_used: true },
  ];
  const subSkillData = [
    { skill: 'Node.js', proficiency: 55, is_used: true },
    { skill: 'Express', proficiency: 50, is_used: false },
    { skill: 'MySQL', proficiency: 50, is_used: false },
    { skill: 'Sequelize', proficiency: 50, is_used: false },
  ];

  return (
    <SkillPageContainer>
      <Container>
        <Flip top>
          <MainSkillContainer>
            <SkillTitle>Main Skill</SkillTitle>
            {skillData.map((el, key) => {
              return (
                <GraphContainer key={key}>
                  <div className="skillTitle">
                    <span className="titleSpan">{el.skill}</span>
                    {el.is_used ? <span className="alarm"></span> : null}
                  </div>
                  <div style={{ width: '80%', display: 'flex', alignItems: 'center' }}>
                    <GraphBack>
                      <GraphFront percent={el.proficiency}></GraphFront>
                    </GraphBack>
                    <div className="percentText">{el.proficiency}%</div>
                  </div>
                </GraphContainer>
              );
            })}
          </MainSkillContainer>
        </Flip>
        <Flip top>
          <MainSkillContainer>
            <SkillTitle>Sub Skill</SkillTitle>

            {subSkillData.map((el, key) => {
              return (
                <GraphContainer key={key}>
                  <div className="skillTitle">
                    <span className="titleSpan">{el.skill}</span>
                    {el.is_used ? <span className="alarm"></span> : null}
                  </div>
                  <div style={{ width: '80%', display: 'flex', alignItems: 'center' }}>
                    <GraphBack>
                      <GraphFront percent={el.proficiency}></GraphFront>
                    </GraphBack>
                    <div className="percentText">{el.proficiency}%</div>
                  </div>
                </GraphContainer>
              );
            })}
          </MainSkillContainer>
        </Flip>
      </Container>
    </SkillPageContainer>
  );
}

export default SkillPage;
