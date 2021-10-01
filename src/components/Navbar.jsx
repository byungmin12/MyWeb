import React from 'react';
import styled, { keyframes } from 'styled-components';

const Title = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  font-size: 2vw;
`;

const Shadow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #d7d7d9;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

const TitleMypage = styled.span`
  width: 100%;
  ${({ num }) => {
    return num === 2 ? `color: #8C5C03;` : null;
  }};
  ::after {
    content: '';
    display: block;
    border-bottom: 10px solid #8c5c03;
    transition-duration: 0.2s;
    width: 0px;
    ${({ num }) => {
      return num === 2 ? `width: 100%;` : null;
    }};
  }
`;
const TitleSkill = styled.span`
  width: 100%;
  ${({ num }) => {
    return num === 3 ? `color: #8C5C03;` : null;
  }};
  ::after {
    content: '';
    display: block;
    border-bottom: 10px solid #8c5c03;
    transition-duration: 0.2s;
    width: 0px;
    ${({ num }) => {
      return num === 3 ? `width: 100%;` : null;
    }};
  }
`;
const TitleProject = styled.span`
  width: 100%;
  ${({ num }) => {
    return num === 4 ? `color: #8C5C03;` : null;
  }};
  ::after {
    content: '';
    display: block;
    border-bottom: 10px solid #8c5c03;
    transition-duration: 0.2s;
    width: 0px;
    ${({ num }) => {
      return num === 4 ? `width: 100%;` : null;
    }};
  }
`;

function Navbar({ page }) {
  return (
    <Title>
      <Shadow>
        <TitleMypage num={page}>{`<AboutMe />`}</TitleMypage>
        <TitleSkill num={page}>{`<Skill />`}</TitleSkill>
        <TitleProject num={page}>{`<Project />`}</TitleProject>
      </Shadow>
    </Title>
  );
}

export default Navbar;
