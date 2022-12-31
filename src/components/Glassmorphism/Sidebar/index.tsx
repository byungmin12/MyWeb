import React from 'react'
import styled from 'styled-components'
import GlassmorphismWrapper from '../common/GlassmorphismWrapper'
import { mediaQueries } from '../../../styles/mediaQueries'

function Sidebar() {

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src={"https://avatars.githubusercontent.com/u/79984280?v=4"} alt="github avatar image" />
        <img className="github-stats"  src={"https://github-readme-stats.vercel.app/api?username=byungmin12&bg_color=00000000&title_color=ffffff&text_color=ffffff&hide_border=true&layout=compact&count_private=true&hide_rank=true"} alt={"github"} />
      </AvatarWrapper>
      <div>
        skill
      </div>
      <div>
        link
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(GlassmorphismWrapper)`
  width: 260px;
  height: 100%;

  ${mediaQueries("md")`
   width: 100%;
   display: flex;
   flex:1
  `};
`

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;
  
  .github-stats {
    width: 100%;
    
    ${mediaQueries("md")`
     height: 100%;
     width: 50%;
  `};
  }
`
const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;

  ${mediaQueries("md")`
  width: 40px;
  height: 40px;
  `};
`


export default Sidebar