import styled, { css } from 'styled-components'
import { mq, rem } from './util'

const Subhead = css`
  font-family: 'Open Sans';
  font-size: ${rem(50)}rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-left: 8%;
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
  max-width: 80%;
  //margin-left: auto;
  margin-right: auto;
  padding-left: 8%;
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
const P = css`
  font-family: 'Open Sans';
  font-size: ${rem(32)}rem;
  line-height: 1.37em;

  ${mq.greaterThan('huge')`
    font-size: ${rem(32)}rem;
  `};
`
const FullP = css`
  text-align: left;
  max-width: 80%;
  //margin-left: auto;
  margin-right: auto;
  padding-left: 8%;
`
const RegularP = css`
  text-align: left;
  padding-left: 8%;
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
