import React, { useState, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const QuestionContainer = styled.div`
  width: 85%;
  /* height: 100%; */
  /* scroll-snap-align: start; */
  position: relative;
  padding-left: 5%;
  padding-right: 5%;
  margin: 10px 2.5% 10px 2.5%;
  :hover {
    border: 2px solid #488cc4;
  }

  ${({ isOpen }) => {
    return isOpen === true ? `border: 2px solid #488cc4;` : `border: 0px solid #488cc4;`;
  }};
`;

const QuestionTitle = styled.div`
  width: 100%;
  font-size: 1.5em;
  font-weight: 800;
  margin-bottom: 10px;
  text-align: left;
  white-space: normal;
  height: auto;
  :hover {
    cursor: pointer;
  }
`;

const QuestionColor = styled.span`
  color: #488cc4;
  font-size: 2rem;
`;

const QuestionWrap = styled.div`
  width: 100%;
  height: 0;
  transition: height 0.5s ease, background 0.5s ease;
  overflow: hidden;
`;

const QuestionContent = styled.div`
  width: 100%;
  background-color: white;
  text-align: left;

  /* ${({ isOpen }) => {
    return isOpen ? `height:auto; border: 2px solid red;` : 'height:0px; display:none;';
  }}; */
`;

const Img = styled.img`
  position: absolute;
`;

function Question({ index, title, content }) {
  const parentRef = useRef(HTMLDivElement);
  const childRef = useRef(HTMLDivElement);
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordion = useCallback(
    (e) => {
      // 이벤트 캡쳐링과 버블링에 있어 현재 이벤트 이후의 전파를 막습니다.
      // 모달할때 배운거
      e.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
        parentRef.current.style.background = 'white';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = 'white';
      }
      setIsOpen(!isOpen);
    },
    [isOpen],
  );

  return (
    <QuestionContainer isOpen={isOpen}>
      <QuestionTitle onClick={handleAccordion}>
        <QuestionColor>Q.{index + 1}</QuestionColor> {title}
      </QuestionTitle>
      <QuestionWrap ref={parentRef}>
        <QuestionContent ref={childRef}>{content}</QuestionContent>
      </QuestionWrap>
    </QuestionContainer>
  );
}

export default Question;
