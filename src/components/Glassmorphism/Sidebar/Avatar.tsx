import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../../styles/mediaQueries'


function Avatar() {
  return (
    <Wrapper>
      <Image src='https://avatars.githubusercontent.com/u/79984280?v=4' alt='github avatar image' />
      <p>
        BYUNGMIN KIM
      </p>
      <small>Front-end Developer</small>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-top:12px;
  width: 100%;

  p {
    margin-top: 3px;
    font-weight: bold;
  }

  small {
    font-size: 12px;
  }

  ${mediaQueries('md')`
    width: 100%;
    height: 100%;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:0px;
  `};
`

const Image = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;

  ${mediaQueries('md')`
  width: 40px;
  height: 40px;
  `};
`

export default Avatar