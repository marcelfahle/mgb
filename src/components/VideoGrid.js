import * as React from 'react'
import styled from 'styled-components'

export const Grid = styled.div`
  position: relative;
  background-size: 100%;
  padding-bottom: 1px;
  box-sizing: border-box;
  padding-top: 1px;
  margin-bottom: 6%;
  height: ${({ elements }) => (elements ? elements * 420 : 1680)}px;
`

export const GridItem = styled.div`
  max-width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  text-align: left;
  height: 400px;
  &.g1,
  &.g3 {
    margin-right: 3%;
    margin-left: auto;
  }
  &.g2,
  &.g4 {
    margin-left: 3%;
    margin-right: auto;
  }
  &.g1 {
    top: 40px;
    right: 0;
  }
  &.g2 {
    top: 456px;
    left: 0;
  }
  &.g3 {
    top: 882px;
    right: 0;
  }
  &.g4 {
    top: 1298px;
    left: 0;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 0.4%;
  }
  p {
  }
`

export const GridVideo = styled.div`
  position: absolute;
  width: 50%;
  img {
    width: 100%;
    height: 487px;
  }
  &.v1 {
    top: 0;
    left: 0;
  }
  &.v2 {
    top: 416px;
    right: 0;
  }
  &.v2-special {
    top: 455px;
    right: 0;
  }
  &.v3 {
    top: 832px;
    left: 0;
  }
  &.v4 {
    top: 1248px;
    right: 0;
  }
`

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  &.left-video {
    clip-path: polygon(0 0, 100% 8%, 100% 91%, 0% 100%);
  }
  &.left-video-special {
    clip-path: polygon(0 0, 100% 0%, 100% 96%, 0% 100%);
  }
  &.right-video {
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 94%);
  }
  &.right-video-special {
    clip-path: polygon(0 2%, 100% 0, 100% 100%, 0 94%);
  }
`
