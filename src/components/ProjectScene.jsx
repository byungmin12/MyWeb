import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ArrowMove = keyframes`
    0%{
        opacity: 0;
        transform:translateX(-10px) scale(0.9);
    }
    50%{
        opacity: 1;
        transform:translateX(0px) scale(1);
    }
    100%{
        opacity: 0;
        transform:translateX(10px) scale(0.9);
    }
`;

const Project = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-size: 100% 100%;
  ${({ data }) => {
    return data ? `background-image: url("${data.url}");` : null;
  }};
`;

const Detail = styled.div`
  font-size: 2vw;
  font-weight: 500;
  color: white;
  :hover {
    cursor: pointer;
  }
  transition-duration: 2s;

  ${({ isPage }) => {
    return !isPage ? `display: block` : `display:none`;
  }};
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`;

const DetailPage = styled.div`
  width: 60%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  left: 100%;

  transition-duration: 1s;
  ${({ isPage }) => {
    return isPage ? `left: 40%;` : `left: 100%;`;
  }};

  display: flex;
  justify-content: center;
  @media screen and (max-width: 540px) {
    font-size: 12px;
    overflow-y: scroll;
  }
`;

const CloseContainer = styled.div`
  height: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100px;
  position: absolute;
  top: 20px;
  left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  :hover {
    cursor: pointer;
  }
`;

const Close = styled.div`
  text-align: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  border: 2px solid white;
  width: 40px;
  height: 40px;

  :hover {
    cursor: pointer;
  }
  .ArrowSGV {
    font-size: 40px;
    color: white;
    opacity: 0;
    animation-name: ${ArrowMove};
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

const Arrow = styled(KeyboardArrowRightIcon)``;

const Contents = styled.div`
  text-align: left;
  height: auto;
  width: 100%;
  padding: 5%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  .title {
    text-align: center;
    color: #488cc4;
    margin-bottom: 15px;
    margin-top: 10%;
    @media screen and (min-width: 750px) {
      margin-top: 0%;
    }
  }

  .explain {
    margin-bottom: 20px;
  }

  > div {
    color: white;
    margin-bottom: 10px;
  }
  .stack {
    display: inline-block;
    width: auto;
    margin: 0px 3px 10px 3px;
    border: 1px solid #488cc4;
    border-radius: 30px;
    padding: 5px;
    line-height: 10px;
    margin-left: 20%;
  }
  .contribution {
    margin-top: 20px;
  }
`;

const Repository = styled.a`
  margin-left: 20%;
  text-decoration: none;
  color: white;
  :hover {
    color: #488cc4;
  }
`;

function ProjectScene({ data }) {
  const [isDetail, setIsDetail] = useState(false);
  const handleDeTailPage = (e) => {
    e.stopPropagation();
    setIsDetail(!isDetail);
  };

  return (
    <Project data={data}>
      <DetailPage isPage={isDetail}>
        <CloseContainer
          onClick={(e) => {
            handleDeTailPage(e);
          }}>
          {isDetail ? (
            <Close
              onClick={() => {
                setIsDetail(false);
              }}>
              <Arrow className="ArrowSGV"></Arrow>
            </Close>
          ) : (
            <Detail>Details</Detail>
          )}
        </CloseContainer>
        <Contents>
          <h1 className="title">{data.title}</h1>
          <div className="explain">{data.explain}</div>
          <div>
            #&nbsp;link&nbsp;&nbsp;&#123;
            <div>
              {data.repository.map((el, idx) => {
                return (
                  <Repository href={el.url} target="_blank" key={idx}>
                    {el.where}
                  </Repository>
                );
              })}
            </div>
            &#125;
          </div>
          <div>
            #&nbsp;stack &nbsp;&nbsp;&#123;
            <div>
              {data.stack.map((el, idx) => {
                return (
                  <div key={idx}>
                    <div className="stack">{el}</div>
                    <br />
                  </div>
                );
              })}
            </div>
            &#125;
          </div>
          <div className="contribution">
            #&nbsp;contribution &nbsp;&nbsp;&#123;
            {data.contribution.map((el, idx) => {
              return (
                <div style={{ marginLeft: '20%' }} key={idx}>
                  {idx + 1}. &nbsp; {el} ;
                </div>
              );
            })}
            &#125;
          </div>
        </Contents>
      </DetailPage>
    </Project>
  );
}

export default ProjectScene;
