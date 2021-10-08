import React from 'react';
import styled, { keyframes } from 'styled-components';

const QuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  position: relative;
`;

const QuestionTitle = styled.div`
  width: 100%;
  font-size: 1.5em;
  font-weight: 800;
  margin-bottom: 30px;
`;

const QuestionColor = styled.span`
  color: #488cc4;
  font-size: 2rem;
`;

const QuestionContent = styled.div`
  width: 100%;
`;

const Img = styled.img`
  position: absolute;
`;

function Question({ index, title, content }) {
  return (
    <QuestionContainer>
      <Img src="" />
      <QuestionTitle>
        <QuestionColor>Q.{index}</QuestionColor> {title}❓
      </QuestionTitle>
      <QuestionContent>{content}</QuestionContent>
    </QuestionContainer>
  );
}

export default Question;
