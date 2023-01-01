import React from 'react'
import styled from 'styled-components'
import {  mediaQueries } from '../../../styles/mediaQueries'
import { ISlide } from './index'

interface ISkills extends ISlide{

}

function Skills({isSlide}:ISkills) {

  return (
    <Wrapper>
      <img className="github-skill-stats" src={`
      https://github-readme-stats.vercel.app/api/top-langs/?username=byungmin12&layout=compact&bg_color=00000000&hide=css,html,java,ruby&hide_border=true&count_private=true&title_color=ffffff&text_color=ffffff&hide_title=${isSlide.toString()}
      `} alt={"language stats"}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .github-skill-stats {
    width: 100%;

    ${mediaQueries("md")`
    width: 100%;
    height: 100%;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
  `};
  }
`

export default Skills