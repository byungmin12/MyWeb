import React from 'react';
import styled, { keyframes } from 'styled-components';

const Title = styled.div`
  width: 100%;
  height: 10%;
  background-color: #fafafa;
  display: flex;
  font-size: 1.7vw;

  /* ${({ num }) => {
    return num === 2 ? `scroll-snap-align: center;` : null;
  }}; */
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
  :hover {
    cursor: pointer;
  }
  ${({ num }) => {
    return num === 2 ? `color: #8C5C03;` : null;
  }};
  ::after {
    content: '';
    display: block;
    border-bottom: 4px solid #8c5c03;
    transition-duration: 0.2s;

    width: 0px;
    ${({ num }) => {
      return num === 2 ? `width: 100%;` : null;
    }};
  }
`;

const TitleProject = styled.span`
  width: 100%;
  :hover {
    cursor: pointer;
  }
  ${({ num }) => {
    return num === 3 ? `color: #8C5C03;` : null;
  }};
  ::after {
    content: '';
    display: block;
    border-bottom: 4px solid #8c5c03;
    transition-duration: 0.2s;
    width: 0px;
    ${({ num }) => {
      return num === 3 ? `width: 100%;` : null;
    }};
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
