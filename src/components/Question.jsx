import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  position: relative;
  :hover {
    border: 2px solid #488cc4;
  }
  ${({ isOpen }) => {
    return isOpen === true ? `border: 2px solid #488cc4;` : `border: 0px solid #488cc4;`;
  }};
  border-radius: 15px;
`;

const QuestionTitle = styled.div`
  width: 100%;
  font-size: 1.2em;
  font-weight: 800;
  margin-bottom: 10px;
  text-align: left;
  white-space: normal;
  height: auto;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.5em;
  }
`;

const QuestionColor = styled.span`
  color: #488cc4;
  font-size: 2rem;
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const QuestionWrap = styled.div`
  width: 100%;
  height: 0;
  transition: height 0.5s ease, background 0.5s ease;
  overflow: hidden;
`;

const QuestionContent = styled.div`
  width: 100%;
  background-color: transparent;
  text-align: left;
  @media screen and (max-width: 600px) {
    font-size: 0.5em;
  }
`;

function Question({ index, title, content }) {
  const parentRef = useRef(HTMLDivElement);
  const childRef = useRef(HTMLDivElement);
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordion = useCallback(
    (e) => {
      e.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
        parentRef.current.style.background = 'transparent';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = 'transparent';
      }
      setIsOpen(!isOpen);
    },
    [isOpen],
  );

  return (
    <div>
      <QuestionContainer isOpen={isOpen}>
        <QuestionTitle onClick={handleAccordion}>
          <QuestionColor>Q.{index + 1}</QuestionColor> {title}
        </QuestionTitle>
        <QuestionWrap ref={parentRef}>
          <QuestionContent ref={childRef}>{content}</QuestionContent>
        </QuestionWrap>
      </QuestionContainer>
    </div>
  );
}

export default Question;
