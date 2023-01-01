import styled, { css } from 'styled-components'

const GlassmorphismWrapper = styled.div<{
  backgroundValue?: string;
  borderRadius?: string;
  boxShadow?: string;
  backdropFilter?: string;
  border?: string;
}>`
  ${({ backgroundValue, borderRadius, boxShadow, backdropFilter, border }) => css`
    background: ${backgroundValue};
    box-shadow: ${boxShadow};
    backdrop-filter: ${backdropFilter};
    -webkit-backdrop-filter: ${backdropFilter};
    border: ${border};
    border-radius: ${borderRadius};
  `}

`

GlassmorphismWrapper.defaultProps = {
  backgroundValue: `rgba(255, 255, 255, 0.19)`,
  borderRadius: `40px`,
  boxShadow: ` 0 4px 30px rgba(0, 0, 0, 0.1)`,
  backdropFilter: `blur(6.9px)`,
  border: `1px solid rgba(255, 255, 255, 0.34)`,
}

export default GlassmorphismWrapper