import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../../styles/mediaQueries'

function Links() {
  return (
    <Wrapper>
      <li>깃</li>
      <li>멜</li>
      <li>벨</li>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  list-style: none;
  color: #fff;

  li {
    float: left;
    margin-right: 12px;
  }

  ${mediaQueries('md')`
    list-style: none;
    
    li {
      float: none;
      margin-right: 0px;
      margin-top: 12px;
    }
  `};
`

export default Links