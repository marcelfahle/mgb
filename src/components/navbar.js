import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Location } from '@reach/router'

import logo from './mgb-logo.svg'

import { mq, rem, WrapperPadding } from './util'

const Wrapper = styled.div`
  position: relative;
  z-index: 1000;
  top: 33px;
	left: 0px;
  height: 92px;
  position: absolute;
  max-width: ${props => props.theme.maxWidth};

  color: #808080;
  //min-width: 984px;
  width: 100%;
	${WrapperPadding}
  //width: 1366px;
  ${mq.greaterThan('large')`
    height: 126px;
  `};
  ${mq.greaterThan('huge')`
  `};
`
const Inner = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
  height: 100%;
`
const Logo = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 60%;
`
const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  //padding: 0 10%;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  padding: 0;
`
const NavItem = styled.li`
  height: 100%;
  display: table;

  ${mq.greaterThan('large')`
    //padding-bottom: 56px;
  `};
`
const NavImageItem = styled.li`
  display: table;
  height: 100%;
  a {
    display: table-cell;
    vertical-align: middle;
    height: 100%;
  }
`

const NavLink = styled(Link)`
  color: #808080;
  text-decoration: none;
  font-size: ${rem(22)}rem;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  height: 100%;
  line-height: 100%;
  display: table-cell;
  vertical-align: middle;
  &:hover,
  &:active,
  &.active {
    color: #da121a;
  }
  &.active {
    border-bottom: 5px solid #da121a;
  }
`

const Navbar = props => (
  <Wrapper {...props}>
    <Inner>
      <NavList>
        <NavItem current>
          <NavLink to="/" activeClassName="active">
            SCHULE
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/menschen" activeClassName="active">
            MENSCHEN
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/anmeldung" activeClassName="active">
            ANMELDUNG
          </NavLink>
        </NavItem>
        <NavImageItem>
          <Link to="/">
            <Logo src={logo} alt={props.siteTitle} title={props.siteTitle} />
          </Link>
        </NavImageItem>
        <NavItem>
          <NavLink to="/kalender" activeClassName="active">
            KALENDER
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/downloads" activeClassName="active">
            DOWNLOADS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/impressum" activeClassName="active">
            IMPRESSUM
          </NavLink>
        </NavItem>
      </NavList>
    </Inner>
  </Wrapper>
)

export default Navbar
