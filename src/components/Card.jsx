import React from 'react';
import styled from 'styled-components';

const Front = styled.div`
  width: 500px;
  min-height: 80vh;
  height: 100%;
  overflow-y: scroll;
  background-color: rgb(12, 190, 72);
  color: white;
  font-size: 32px;
  font-weight: 1000;
  border-radius: 15px;
  transform: rotateY(0deg);
  backface-visibility: hidden;
  transition: 1s;
  position: absolute;

  background-size: 100% 100%;
  ${({ url }) => {
    return url ? `background-image: url("${url}");` : null;
  }};
  @media screen and (max-width: 400px) {
    width: 90vw;
    font-size: 24px;
  }
`;

const Back = styled.div`
  width: 500px;
  height: 100%;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: 1s;
  background-color: white;
  border-radius: 15px;
  border: 1px solid black;
  padding: 20px;

  @media screen and (max-width: 400px) {
    width: 90vw;
  }
  .contentsInner {
    .title {
      margin-top: 20px;
      font-weight: 800;
      font-size: 36px;
      height: 50px;
      color: rgb(104, 82, 242);
    }
  }
`;

const CardContainer = styled.div`
  width: 500px;
  min-height: 80vh;
  height: auto;
  perspective: 1000px;
  backface-visibility: hidden;
  transition: 1s;
  position: relative;
  margin-bottom: 20px;
  :hover {
    ${Front} {
      transform: rotateY(180deg);
    }
    ${Back} {
      transform: rotateY(0deg);
    }
  }
`;

const ContributionContainer = styled.div`
  width: 100%;
  height: auto;
  /* min-height: 300px; */
  margin: 20px 0px 20px 0px;
  border: 3px dashed rgb(104, 82, 242);
  position: relative;
  backface-visibility: hidden;

  .ConTitle {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 0;
    left: 10%;
    font-size: 24px;
    font-weight: 800;
    color: rgb(104, 82, 242);
    backface-visibility: hidden;
    background-color: white;
  }
`;

const Repository = styled.a`
  text-decoration: none;
  display: block;
  :hover {
    color: rgb(104, 82, 242);
  }
`;

function Card({ data }) {
  return (
    <CardContainer>
      <Front url={data.url}></Front>
      <Back>
        <div className="contentsInner">
          <div className="title">{data.title}</div>
          <hr />
          <div>{data.explain}</div>
          <ContributionContainer>
            <div className="ConTitle">기여도</div>
            <div style={{ marginTop: '30px', padding: '20px' }}>
              {data.contribution.map((el, key) => {
                return <div key={key}>{el}</div>;
              })}
            </div>
          </ContributionContainer>
          <ContributionContainer>
            <div className="ConTitle">스택</div>
            <div style={{ marginTop: '30px', padding: '20px' }}>
              {data.stack.map((el, key) => {
                return <div key={key}>{el}</div>;
              })}
            </div>
          </ContributionContainer>
          <ContributionContainer>
            <div className="ConTitle">링크</div>
            <div style={{ marginTop: '30px', padding: '20px' }}>
              {data.repository.map((el, key) => {
                return (
                  <Repository href={el.url} target="_blank" key={key}>
                    {el.where}
                  </Repository>
                );
              })}
            </div>
          </ContributionContainer>
        </div>
      </Back>
    </CardContainer>
  );
}

export default Card;
