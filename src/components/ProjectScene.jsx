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
  width: 130px;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.5em;
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
  align-items: center;
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
  }
  > div {
    color: white;
    margin-bottom: 10px;
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
          <div className="role">역할 : Front</div>
          <div>
            stack :
            {data.stack.map((el) => {
              return <span>{el}</span>;
            })}
          </div>
          <div className="contribution">
            기여 :{' '}
            {data.contribution.map((el, idx) => {
              return (
                <div>
                  {idx + 1}.{el}
                </div>
              );
            })}
          </div>
        </Contents>
      </DetailPage>
    </Project>
  );
}

export default ProjectScene;
