import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import fallbackMale from './assets/person-fallback-male.svg'
import fallbackFemale from './assets/person-fallback-female.svg'
import { mq, rem } from './util'

const Element = styled.div`
	position: relative;
	flex-basis: calc(100% - 10px);
  ${mq.greaterThan('small')`
		flex-basis: calc(50% - 10px);

	`};
  ${mq.greaterThan('medium')`
		flex-basis: calc(33.333% - 10px);

	`};

	margin: 5px;
	box-sizing: border-box;

	&:before {
		content: '';
		display: block;
		padding-top: 100%;
	}
	.content {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: transparent url('${({ bg }) => bg}') no-repeat;
		background-size: cover;
	}
`
const Details = styled.div`
  height: 50%;
  padding-left: 10px;
  padding-right: 10px;
  background-image: linear-gradient(
    180deg,
    rgba(29, 29, 27, 0) 0%,
    rgba(0, 0, 0, 0.48) 100%
  );

  ${mq.greaterThan('large')`
		height: 40%;
	`};
  ${mq.greaterThan('huge')`
	`};
`
const Name = styled.p`
  color: #ffffff;
  font-size: ${rem(24)}rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.5em;
  white-space: pre-line;

  ${mq.greaterThan('large')`
		font-size: ${rem(26)}rem;
	`};
  ${mq.greaterThan('huge')`
		font-size: ${rem(24)}rem;

	`};
  ${mq.greaterThan('veryhuge')`
		font-size: ${rem(31)}rem;
		margin-bottom: 19px;

	`};
`
const Job = styled.p`
  color: #ffffff;
  font-size: ${rem(24)}rem;
  line-height: 1.3;
  margin-top: 0;

  ${mq.greaterThan('large')`
	`};
  ${mq.greaterThan('huge')`
  font-size: ${rem(24)}rem;

	`};
  ${mq.greaterThan('veryhuge')`
		font-size: ${rem(31)}rem;

	`};
`

export default class Person extends PureComponent {
  static defaultProps = {
    bg: fallbackFemale,
  }
  render() {
    const { name, subjects, photo } = this.props
    const bg = photo || fallbackFemale
    return (
      <Element bg={bg}>
        <div className="content">
          <Details>
            <Name>{name}</Name>
            <Job>{subjects}</Job>
          </Details>
        </div>
      </Element>
    )
  }
}
