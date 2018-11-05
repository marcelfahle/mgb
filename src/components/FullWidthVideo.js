import React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'
import { Video } from './VideoGrid'

const FullWidthVideoWrapper = styled.div`
  position: absolute;
  top: -5%;
  width: 100%;
  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%);
  > div {
  }
`
export const FullWidthVideo = ({ src, dir = 'ltd' }) => (
  <FullWidthVideoWrapper>
    <Video autoPlay loop muted playsInline>
      <source src={withPrefix(src)} />
    </Video>
  </FullWidthVideoWrapper>
)
