import React from 'react'
import styled from 'styled-components'
import GlassmorphismWrapper from './common/GlassmorphismWrapper'
import Sidebar from './Sidebar'

function Glassmorphism() {
  return (
    <Wrapper>
      <Sidebar />

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
  
`

export default Glassmorphism