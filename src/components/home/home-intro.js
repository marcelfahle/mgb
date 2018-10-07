import React, { PureComponent } from 'react'

import styled from 'styled-components'
import bgimg from './../bg1test.svg'
import { LinkButton } from '../button'
import deco from './../home-intro-deco.svg'
import { mq, rem } from '../util'
import { PLight } from '../typo'

const Section = styled.section`
  position: relative;
  z-index: 50;
  background-image: linear-gradient(
    -90deg,
    #fad961 0%,
    #ef9649 42%,
    #da121a 100%
  );
  color: white;
  -webkit-clip-path: polygon(0 14%, 100% 0, 100% 100%, 0 92%);
  clip-path: polygon(0 14%, 100% 0, 100% 100%, 0 92%);
  &:before {
    display: block;
    content: ' ';
    width: 100%;
    padding-top: 54.2%;
  }
  margin-top: -8%;
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  //bottom: 0;
  transform: translateY(-50%);
`

const Headline = styled.h2`
  margin: 0;
  font-weight: 700;
  margin-bottom: 0.2em;
  padding-left: 8%;
  font-size: ${rem(78)}rem;
  ${mq.greaterThan('medium')`
    font-size: ${rem(88)}rem;
    margin-left: -5px;
  `};

  //${mq.greaterThan('veryhuge')`
  //  font-size: ${rem(128)}rem;
  //  margin-left: -10px;
  //`};
`
const Subline = styled.h3`
  margin: 0;
  padding-left: 8%;
  font-size: ${rem(34)}rem;
  font-weight: 700;
  ${mq.greaterThan('medium')`
  font-size: ${rem(40)}rem;
`};

  //${mq.greaterThan('veryhuge')`
  //  font-size: ${rem(50)}rem;
  //`};
`
const Text = styled(PLight)`
  max-width: 64%;
  margin-top: 1.2em;
  line-height: 1.3;
`

const Deco = styled.img`
  position: absolute;
  top: 7%;
  right: -9%;
  height: 86%;
`

export default class HomeIntro extends PureComponent {
  render() {
    return (
      <Section>
        <Deco src={deco} />
        <Content>
          <Headline>MädchenStärken</Headline>
          <Subline>individuell und gemeinsam</Subline>
          <Text>
            Am MGB können Mädchen ihre vielfältigen Talente entdecken und
            gemeinsam entwickeln. Ihre Fähigkeiten werden dabei gezielt
            gefördert und besondere Begabungen in der Gemeinschaft vertieft.
          </Text>
          <Text>
            <LinkButton to="/maedchenstaerken" secondary>
              Mehr erfahren
            </LinkButton>
          </Text>
        </Content>
      </Section>
    )
  }
}
