import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  background-color: #fafafa;
  display: flex;
  margin-bottom: 10px;
`;

const Shadow = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #d7d7d9;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

const TitleMypage = styled.span`
  width: 100%;
  font-size: 5vw;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  :hover {
    cursor: pointer;
  }
`;

const TitleProject = styled.span`
  width: 100%;
  font-size: 2vw;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
  -webkit-background-clip: text;
  background-image: linear-gradient(135deg, #0a3e92, #007ebe);

  :hover {
    cursor: pointer;
  }
`;

function Navbar({ page, setIsCheckPage }) {
  const movePage = (num) => {
    setIsCheckPage(num);
  };
  return (
    <Title num={page}>
      <Shadow>
        <TitleMypage
          num={page}
          onClick={() => {
            movePage(2);
          }}>{`<AboutMe />`}</TitleMypage>
        <TitleProject
          num={page}
          onClick={() => {
            movePage(3);
          }}>{`<Project />`}</TitleProject>
      </Shadow>
    </Title>
  );
}

export default Navbar;
