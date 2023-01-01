import React from 'react'
import styled, { css } from 'styled-components'
import GlassmorphismWrapper from '../common/GlassmorphismWrapper'
import { breakpoints, mediaQueries } from '../../../styles/mediaQueries'
import Skills from './Skills'
import Avatar from './Avatar'
import Links from './Links'

export interface ISlide {
  isSlide: boolean
}

function Sidebar() {
  const [isSlide, setIsSlide] = React.useState(false)
  const [cur, setCur] = React.useState(0);

  const handlerSetCur = () => {
    setCur((prev) => {
      if (prev === 2) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  React.useEffect(()=>{
    if(isSlide){
      const func = setInterval(handlerSetCur,3000)
      return ()=>{
        clearInterval(func)
      }
    }

  },[isSlide])

  React.useLayoutEffect(() => {
    if (matchMedia(`(max-width: ${breakpoints.md}px)`).matches) {
      setIsSlide(true)
    }
  }, [])

  console.log(cur, isSlide)

  return (
    <Wrapper>
      <Slide isSlide={isSlide}>

        {
          (!isSlide || cur === 0) &&  <Avatar />
        }

        {
          (!isSlide || cur === 1) &&  <img className='github-stats'
                             src='https://github-readme-stats.vercel.app/api?username=byungmin12&bg_color=00000000&title_color=ffffff&text_color=ffffff&hide_border=true&layout=compact&count_private=true&hide_rank=true&hide_title=true&hide=stars,contribs'
                             alt={'github'} />
        }

        {
          (!isSlide || cur === 2) &&  <Skills isSlide={!isSlide} />
        }

      </Slide>

      <Links />
    </Wrapper>
  )
}

const Wrapper = styled(GlassmorphismWrapper)`
  width: 260px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${mediaQueries('md')`
   width: 100%;
   flex-direction: row;
   justify-content: normal;
   flex:1;
   
  `};


`

const Slide = styled.div<ISlide>`
  ${({ isSlide }) => {
    if (isSlide) {
      return css`
        width: 100%;
        height:100%;
        overflow: hidden;
        position: relative;
      `
    }
  }}
  .github-stats {
    width: 100%;

    ${mediaQueries('md')`
    width: 100%;
    height: 100%;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
  `};
  }
`


export default Sidebar