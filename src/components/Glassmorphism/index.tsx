import React from 'react'
import styled from 'styled-components'
import GlassmorphismWrapper from './common/GlassmorphismWrapper'
import Sidebar from './Sidebar'
import { mediaQueries } from '../../styles/mediaQueries'

function Glassmorphism() {
  return (
    <Wrapper>
      <Sidebar />
      <main>d</main>
      <aside>d</aside>
    </Wrapper>
  )
}

const Wrapper = styled(GlassmorphismWrapper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  width: 80%;
  height: 80%;
  padding: 36px;
  
  display: flex;
  gap: 12px;

  ${mediaQueries("md")`
    flex-direction: column;
  `};
  
  main {
    background: red;
    flex: 1;

    ${mediaQueries("md")`
      overflow: auto;
      flex:2

  `};
  }
  
  aside {
    background: yellow;
    width: 60px;
    height: 100%;
    border-radius: 0 40px 40px 0;
    
    position: fixed;
    right:0;
    top:0;
  }
  
`

export default Glassmorphism