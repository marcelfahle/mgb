import styled, { css } from 'styled-components'
import { mq, rem } from './util'

const Subhead = css`
  font-family: 'Open Sans';
  font-size: ${rem(50)}rem;
  font-weight: 700;
  text-transform: uppercase;
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
export const SubheadFullLight = styled.h3`
  ${Subhead};
  text-align: center;
  color: white;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`
export const SubheadFullDark = styled.h3`
  ${Subhead};
  text-align: center;
  color: #333;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`
export const SubheadFullMedium = styled.h3`
  ${Subhead};
  text-align: center;
  color: #4d4d4d;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`
const P = css`
  font-family: 'Open Sans';
  font-size: ${rem(32)}rem;
  line-height: 1.37em;
  ${mq.greaterThan('huge')`
    font-size: ${rem(32)}rem;
  `};
`
const FullP = css`
  text-align: center;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`
const RegularP = css`
  text-align: left;
`
const SmallP = css`
  font-family: 'Open Sans';
  font-size: ${rem(31)}rem;
  line-height: 1.64em;
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
`
export const PSmallFullMedium = styled.p`
  ${SmallP};
  ${FullP};
  color: #4d4d4d;
  strong {
    font-weight: 700;
    text-transform: uppercase;
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
`
