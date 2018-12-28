import React from 'react'
import styled, { css } from 'styled-components'
import { mq, rem } from './util'
import menschenHeadline from './menschen.svg'

export const Subhead = css`
  font-family: 'Open Sans';
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
  max-width: 90%;
  font-size: ${rem(28)}rem;
  padding-left: 5%;
  ${mq.greaterThan('small')`
		font-size: ${rem(40)}rem;

	`};
  ${mq.greaterThan('large')`
		font-size: ${rem(50)}rem;
		padding-left: 8%;
	`};
  ${mq.greaterThan('huge')`

	`};
  ${mq.greaterThan('veryhuge')`

	`};
`
export const SubheadLight = styled.h3`
  ${Subhead};
  color: white;
`
export const SubheadDark = styled.h3`
  ${Subhead};
  color: #333;
`
export const SubheadMedium = styled.h3`
  ${Subhead};
  color: #4d4d4d;
`
const SubHeadFull = css`
  max-width: 95%;
  //margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 5%;

  ${mq.greaterThan('medium')`
		max-width: 80%;

	`};
  ${mq.greaterThan('large')`
		padding-left: 8%;
	`};
`
export const SubheadFullLight = styled.h3`
  ${Subhead};
  ${SubHeadFull};
  text-align: left;
  color: white;
`
export const SubheadFullDark = styled.h3`
  ${Subhead};
  ${SubHeadFull};
  text-align: left;
  color: #333;
`
export const SubheadFullMedium = styled.h3`
  ${Subhead};
  ${SubHeadFull};
  text-align: left;
  color: #4d4d4d;
`
export const P = css`
  font-family: 'Open Sans';
  line-height: 1.37em;
  a {
    color: inherit;
  }

  font-size: ${rem(20)}rem;
  ${mq.greaterThan('large')`
		font-size: ${rem(31)}rem;
	`};
  ${mq.greaterThan('huge')`

	`};
  ${mq.greaterThan('veryhuge')`

	`};
`
const FullP = css`
  text-align: left;
  max-width: 95%;
  //margin-left: auto;
  margin-right: auto;
  padding-left: 5%;

  ${mq.greaterThan('medium')`
		max-width: 80%;

	`};
  ${mq.greaterThan('large')`
		padding-left: 8%;
	`};
`
const RegularP = css`
  text-align: left;
  padding-left: 5%;

  ${mq.greaterThan('large')`
		padding-left: 8%;
	`};
`
const SmallP = css`
  font-family: 'Open Sans';
  font-size: ${rem(23)}rem;
  line-height: 1.64em;
  ${mq.greaterThan('large')`
		font-size: ${rem(31)}rem;

	`};
  ${mq.greaterThan('huge')`

	`};
  ${mq.greaterThan('veryhuge')`

	`};
`

export const PFullLight = styled.p`
  ${P};
  ${FullP};
  color: white;
`
export const PFullDark = styled.p`
  ${P};
  ${FullP};

  color: #333;
  a {
    color: #4a90e2;
  }
`
export const PLight = styled.p`
  ${P};
  ${RegularP};
  color: white;
`
export const PDark = styled.p`
  ${P};
  ${RegularP};
  color: #333;
  a {
    color: #4a90e2;
  }
`

export const PSmallFullLight = styled.p`
  ${SmallP};
  ${FullP};
  color: white;
`
export const PSmallFullDark = styled.p`
  ${SmallP};
  ${FullP};
  color: #333;
  a {
    color: #4a90e2;
  }
`
export const PSmallFullMedium = styled.p`
  ${SmallP};
  ${FullP};
  color: #4d4d4d;
  strong {
    font-weight: 700;
    text-transform: uppercase;
  }
  a {
    color: #4a90e2;
  }
`
export const TypoDiv = styled.div`
  ${SmallP};
  ${FullP};
  color: #4d4d4d;
  strong {
    font-weight: 700;
    text-transform: uppercase;
  }
  a {
    color: #4a90e2;
  }
`
export const PSmallLight = styled.p`
  ${SmallP};
  ${RegularP};
  color: white;
`
export const PSmallMedium = styled.p`
  ${SmallP};
  ${RegularP};
  color: #4d4d4d;
  strong {
    font-weight: 700;
    text-transform: uppercase;
  }
  a {
    color: #4a90e2;
  }
`

export const MenschenSubheadline = styled.h4`
  font-size: ${rem(50)}rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-top: 5%;
  padding-bottom: 3%;
  color: #4d4d4d;
  text-align: left;
  padding-left: 5%;

  ${mq.greaterThan('large')`
		padding-left: 8%;
	`};
`

export const MenschenHeadlineWrapper = styled.div`
  position: absolute;
  right: -1px;
  top: -0.7em;
  text-align: right;
  z-index: 1001;

  color: #f8f8f8;
  font-size: 4rem;
  line-height: 0.78em;
  font-weight: 700;
  text-transform: uppercase;
  ${mq.greaterThan('small')`
		font-size: 8rem;
	`};
  ${mq.greaterThan('medium')`
		font-size: 11rem;
	`};
`
export const MenschenHeadline = () => (
  <MenschenHeadlineWrapper>MENSCHEN</MenschenHeadlineWrapper>
)
export const Menschen = styled.div`
  position: relative;
  min-height: 400px;
  background-image: linear-gradient(to right, #f8f8f8 0%, #f2f2f2 100%);
  padding-bottom: 100px;
  .actions {
    text-align: center;
    padding-top: 96px;
    padding-bottom: 96px;
  }
  z-index: 100;
`

export const PageTitle = styled.span`
  position: absolute;
  bottom: -5px;
  left: -0.1em;
  font-size: 4rem;
  line-height: 0.78em;
  font-weight: 700;
  text-transform: uppercase;
  ${mq.greaterThan('small')`
		font-size: 8rem;
	`};
  ${mq.greaterThan('medium')`
		font-size: 11rem;
	`};
`
