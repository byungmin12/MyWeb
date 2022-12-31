import React from 'react'
import styled from 'styled-components'
import { breakpoints, mediaQueries } from '../../../styles/mediaQueries'

function Skills() {
  const [query , setQuery] = React.useState("&hide_title=true")

  React.useLayoutEffect(()=>{
    if(matchMedia(`(max-width: ${breakpoints.md}px)`).matches){
      setQuery("&hide_title=false")
    }
  },[])

  return (
    <Wrapper>
      <img className="github-skill-stats" src={`
      https://github-readme-stats.vercel.app/api/top-langs/?username=byungmin12&layout=compact&bg_color=00000000&hide=css,html,java,ruby&hide_border=true&count_private=true&title_color=ffffff&text_color=ffffff${query}
      `} alt={"language stats"}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .github-skill-stats {
    width: 100%;

    ${mediaQueries("md")`
      width: 50%;
      height: 100%;
  `};
  }
`

export default Skills