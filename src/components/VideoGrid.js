import * as React from 'react'
import styled from 'styled-components'

export const Grid = styled.div`
  //position: relative;
  //background-size: 100%;
  //padding-bottom: 1px;
  //box-sizing: border-box;
  //padding-top: 1px;
  //margin-bottom: 6%;
  //height: ${({ elements }) => (elements ? elements * 420 : 1680)}px;
  margin-top: 10%;
`

export const Row = styled.div`
  display: flex;
  flex-flow: wrap;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  > * {
    flex: 0 0 50%;
    height: 29%;
  }
`

export const GridItem = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding-top: 4%;
  &.g1,
  &.g3 {
    > * {
      padding-right: 4%;
    }
    margin-left: auto;
  }
  &.g2,
  &.g4 {
    > * {
      padding-right: 4%;
    }
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0.4%;
  }
  p {
  }
`

export const GridVideo = styled.div`
  img {
    width: 100%;
    height: 29%;
  }
`

export const Video = styled.video`
  width: 100%;
  overflow: hidden;

  //&.left-video {
  //  clip-path: polygon(0 0, 100% 8%, 100% 91%, 0% 100%);
  //}
  //&.left-video-special {
  //  clip-path: polygon(0 0, 100% 0%, 100% 96%, 0% 100%);
  //}
  //&.right-video {
  //  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 94%);
  //}
  //&.right-video-special {
  //  clip-path: polygon(0 2%, 100% 0, 100% 100%, 0 94%);
  //}
`
