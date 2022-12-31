import React from 'react'
import styled from 'styled-components'
import GlassmorphismWrapper from '../common/GlassmorphismWrapper'
import { mediaQueries } from '../../../styles/mediaQueries'
import Skills from './Skills'
import Avatar from './Avatar'

function Sidebar() {

  return (
    <Wrapper>
      <Avatar />

      <img className='github-stats'
           src='https://github-readme-stats.vercel.app/api?username=byungmin12&bg_color=00000000&title_color=ffffff&text_color=ffffff&hide_border=true&layout=compact&count_private=true&hide_rank=true&hide_title=true&hide=stars,contribs'
           alt={'github'} />

      <Skills />

      <div>
        link
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(GlassmorphismWrapper)`
  width: 260px;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;


  ${mediaQueries('md')`
   width: 100%;
   flex-direction: row;
   flex:1;
   
  `};

  .github-stats {
    width: 100%;

    ${mediaQueries("md")`
      width: 50%;

      height: 100%;
  `};
  }
  
`





export default Sidebar