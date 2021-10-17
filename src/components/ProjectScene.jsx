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
  position: absolute;
  top: 70%;
  left: 75%;
  background-color: rgba(0, 0, 0, 0.3);
  width: 20%;
  padding: 10px;
  border-radius: 10px;
  font-size: 2vw;
  font-weight: 500;
  border: 2px solid white;
  color: white;
  :hover {
    cursor: pointer;
  }
  transition-duration: 2s;

  ${({ on }) => {
    return !on ? `display: block` : `display:none`;
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
  ${({ on }) => {
    return on ? `left: 40%;` : `left: 100%;`;
  }};
  display: flex;
  justify-content: center;
`;

const Close = styled.div`
  text-align: none;
  position: absolute;
  left: 20px;
  top: 20px;
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
  height: 70%;
  width: 100%;
  padding: 5%;
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

function ProjectScene({ data }) {
  const [isDetail, setIsDetail] = useState(false);
  const handleDeTailPage = (e) => {
    e.stopPropagation();
    setIsDetail(!isDetail);
  };

  return (
    <Project data={data}>
      <Detail
        onClick={(e) => {
          handleDeTailPage(e);
        }}
        on={isDetail}>
        Details
      </Detail>
      <DetailPage on={isDetail}>
        <Close
          onClick={() => {
            setIsDetail(false);
          }}>
          <Arrow className="ArrowSGV"></Arrow>
        </Close>
        <Contents>
          <h1 className="title">{data.title}</h1>
          <div className="explain">{data.explain}</div>
          <div>
            #&nbsp;stack &nbsp;&nbsp;&#123;
            <div>
              {data.stack.map((el) => {
                return (
                  <>
                    <div className="stack">{el}</div>
                    <br />
                  </>
                );
              })}
            </div>
            &#125;
          </div>
          <div className="contribution">
            #&nbsp;contribution &nbsp;&nbsp;&#123;
            {data.contribution.map((el, idx) => {
              return (
                <div style={{ marginLeft: '20%' }}>
                  {idx + 1}. &nbsp; {el} ;
                </div>
              );
            })}
            &#125;
          </div>
          <div>
            #&nbsp;repository&nbsp;&nbsp;&#123;
            <div>
              <a href={data.repository} style={{ marginLeft: '20%' }}>
                rink
              </a>
            </div>{' '}
            &#125;
          </div>
        </Contents>
      </DetailPage>
    </Project>
  );
}

export default ProjectScene;
