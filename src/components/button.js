import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../layouts'
import { mq, rem } from './util'

const Style = css`
  color: #fff;

  font-size: ${rem(24)}rem;
  font-weight: 600;
  padding: 6px 30px 10px 30px;
  border-radius: 4px;
  letter-spacing: -0.5px;
  background-color: #da121a;
  border: none;
  ${mq.greaterThan('medium')`
    font-size: ${rem(24)}rem;
		border-radius: 6px;

  `};
  ${mq.greaterThan('large')`
  font-size: ${rem(28)}rem;

  `};
  ${mq.greaterThan('huge')`
  font-size: ${rem(34)}rem;
  border-radius: 10px;

  `};
  ${mq.greaterThan('veryhuge')`
  font-size: ${rem(37)}rem;

  `};

  ${({ secondary }) =>
    secondary &&
    `
      background-color: transparent;
      border: 3px solid white;
  `};
`

const Btn = styled.button`
  ${Style};
`

const Lnk = styled(Link)`
  ${Style};
  text-decoration: none;
`

export default class Button extends PureComponent {
  render() {
    return <Btn {...this.props}>{this.props.children}</Btn>
  }
}
export const LinkButton = ({ to = '/', children, ...props }) => (
  <Lnk to={to} {...props}>
    {children}
  </Lnk>
)
