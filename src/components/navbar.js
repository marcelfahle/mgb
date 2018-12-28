import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Location } from '@reach/router'

import logo from './mgb-logo.svg'
import menuIcon from './menu.svg'

import { mq, rem, WrapperPadding } from './util'

const Wrapper = styled.div`
  position: relative;
  z-index: 1000;
  left: 0px;
  height: 72px;
  position: relative;
  max-width: ${props => props.theme.maxWidth};

  color: #808080;
  ${WrapperPadding};
  width: 100%;

  ${mq.greaterThan('small')`
		position: absolute;
		top: 33px;
		height: 92px;
	`};
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
const MobileNavTrigger = styled.button`
  display: inline-block;
  padding-right: 10px;
  background: white;
  border: none;
  box-shadow: none;
  cursor: pointer;

  ${mq.greaterThan('small')`
		display: none;
	`};
`
const Logo = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 60%;
`
const MobileNavList = styled.ul`
  background: white;
  list-style: none;
  padding: 10px 0 10px 0;
  margin-top: 0;
  ${mq.greaterThan('small')`
		display: none;
	`};
`
const MobileNavItem = styled.li`
  display: block;
`
const MobileNavLink = styled(Link)`
  color: #808080;
  text-decoration: none;
  font-size: ${rem(32)}rem;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  height: 100%;
  line-height: 100%;
  vertical-align: middle;
  padding: 8px 0;
  text-align: center;
`
const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  ${mq.greaterThan('small')`
		padding: 0;
	`};
`
const NavItem = styled.li`
  height: 100%;
  display: none;

  ${mq.greaterThan('small')`
		display: table;

	`};
  ${mq.greaterThan('large')`
    //padding-bottom: 56px;
  `};
`
const NavImageItem = styled.li`
  height: 100%;
  width: 100%;
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }
  ${mq.greaterThan('small')`
		display: table;
		width: auto;
		a {
			display: table-cell;
			vertical-align: middle;
			height: 100%;
		}
	`};
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

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mobileMenu: false }
  }
  toggleMobileMenu = () => this.setState({ mobileMenu: !this.state.mobileMenu })
  render() {
    const props = this.props
    return (
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
                <Logo
                  src={logo}
                  alt={props.siteTitle}
                  title={props.siteTitle}
                />
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
          <MobileNavTrigger onClick={this.toggleMobileMenu}>
            <img src={menuIcon} alt="Menu" />
          </MobileNavTrigger>
        </Inner>
        {this.state.mobileMenu && (
          <MobileNavList>
            <MobileNavItem current>
              <MobileNavLink to="/" activeClassName="active">
                SCHULE
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink to="/menschen" activeClassName="active">
                MENSCHEN
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink to="/anmeldung" activeClassName="active">
                ANMELDUNG
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink to="/kalender" activeClassName="active">
                KALENDER
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink to="/downloads" activeClassName="active">
                DOWNLOADS
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink to="/impressum" activeClassName="active">
                IMPRESSUM
              </MobileNavLink>
            </MobileNavItem>
          </MobileNavList>
        )}
      </Wrapper>
    )
  }
}

export default Navbar
