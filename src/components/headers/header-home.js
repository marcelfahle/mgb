import * as React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import headerbg from './header-home.jpg'
import Button from '../button'
import { mq, rem } from './../util'

const Section = styled.section`
  position: relative;
  //background: transparent url('${headerbg}') no-repeat top center;
  &:before {
    display: block;
    content: " ";
    width: 100%;
    padding-top: 52.6%;
  }
`

const Content = styled.div`
  position: absolute;
  top: 30%;
  left: 8%;
  right: 0;
  //bottom: 0;
`

const Title = styled.h1`
  color: #ffffff;
  font-size: ${rem(29)}rem;
  margin: 0;
  font-weight: 400;
  letter-spacing: -0.5px;
`
const Subline = styled.h2`
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 30px -12px;
  line-height: 0.95em;
  letter-spacing: -3px;
  font-size: ${rem(83)}rem;
  ${mq.greaterThan('medium')`
    font-size: ${rem(103)}rem;
    margin: 0 0 14px -5px;

  `};
  ${mq.greaterThan('large')`
    font-size: ${rem(103)}rem;

  `};
  ${mq.greaterThan('huge')`
    font-size: ${rem(123)}rem;
  margin: 0 0 30px -12px;

  `};
  ${mq.greaterThan('veryhuge')`
    font-size: ${rem(183)}rem;

  `};
`
const Video = styled.video`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100%;
  height: 100%;
`

export default class HomeHeader extends React.PureComponent {
  render() {
    return (
      <Section>
        <Video id="musikmenschen-video" autoPlay loop muted playsInline>
          <source src={withPrefix('MGB-Schule-Header.mp4')} />
        </Video>
        <Content>
          <Title>Städtisches Mädchengymnasium Borbeck</Title>
          <Subline>
            MODERN.
            <br />
            GENIAL.
            <br />
            BUNT.
          </Subline>
          <p>
            <Button>Video ansehen</Button>
          </p>
        </Content>
      </Section>
    )
  }
}
