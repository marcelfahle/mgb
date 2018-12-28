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
  clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 92%);
  margin-top: -10%;
  margin-bottom: -10%;
  display: flex;
  align-items: center;
  ${mq.greaterThan('medium')`
  &:before {
    display: block;
    content: ' ';
    width: 100%;
    padding-top: 54.2%;
  }
		
	`};
`

const Content = styled.div`
  right: 0;
  margin-top: 14%;
  margin-bottom: 14%;
  ${mq.greaterThan('medium')`
		position: absolute;
		margin-top: 0%;
		margin-bottom: 0%;
		
	`};
`

const Headline = styled.h2`
  margin: 0;
  font-weight: 700;
  margin-bottom: 0.2em;
  padding-left: 5%;
  font-size: ${rem(40)}rem;
  ${mq.greaterThan('medium')`
		font-size: ${rem(78)}rem;
	`};
  ${mq.greaterThan('medium')`
    font-size: ${rem(88)}rem;
    margin-left: -5px;
  `};
  ${mq.greaterThan('large')`
		padding-left: 8%;
	`};
`
const Subline = styled.h3`
  margin: 0;
  font-size: ${rem(28)}rem;
  font-weight: 700;

  padding-left: 5%;
  max-width: 50%;
  ${mq.greaterThan('small')`
		font-size: ${rem(34)}rem;
	`};
  ${mq.greaterThan('medium')`
		font-size: ${rem(40)}rem;
	`};

  ${mq.greaterThan('large')`
		padding-left: 8%;
	`};
`

//${mq.greaterThan('veryhuge')`
//  font-size: ${rem(50)}rem;
//`};
const Text = styled(PLight)`
  max-width: 64%;
  margin-top: 1.2em;
  line-height: 1.3;
`

const Deco = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -9%;
  height: 50%;
  ${mq.greaterThan('small')`
		height: 86%;
	`};
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
            <LinkButton to="/maedchenstaerken" secondary={1}>
              Mehr erfahren
            </LinkButton>
          </Text>
        </Content>
      </Section>
    )
  }
}
