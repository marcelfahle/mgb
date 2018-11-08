import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import fblogo from './assets/fb-logo.svg'
import footerlogo from './assets/footer-logo.svg'
import gwlogo from './assets/Abbinder_GW-WS.png'
import { mq, rem } from './util'

const Wrapper = styled.div`
  display: flex;
  color: #fff;
  background-color: #424649;
  height: 946px;
  padding-top: 32px;
  padding-bottom: 100px;
  font-size: ${rem(24)}rem;
  p a,
  p a:link,
  p a:visited {
    color: #fff;
    text-decoration: underline;
  }
  p a:hover,
  p a:active {
    color: #fff;
    text-decoration: underline;
  }
`

const LogoCol = styled.div`
  flex-basis: 31%;
  padding-left: 20px;
  padding-right: 20px;
  ${mq.greaterThan('large')`
		padding-left: 40px;
		padding-right: 40px;
	`};
`
const AddressCol = styled.div`
  flex-basis: 36%;
`
const SocialCol = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  padding-right: 20px;

  ${mq.greaterThan('large')`
		padding-right: 40px;
	`};
`

const SubNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 60px 0;
  width: 90%;
  li {
    border-bottom: 1px solid white;
    text-transform: uppercase;
    font-size: ${rem(28)}rem;
    line-height: 1.35;
    padding-bottom: 25px;
    padding-top: 6px;
    a,
    a:link,
    a:visited,
    a:hover,
    a:active {
      color: white;
      text-decoration: none;
    }
  }
`

const FBLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  line-height: 40px;
	${mq.greaterThan('huge')`
		line-height: 90px;
	`}
  color: white;
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }
  img {
    vertical-align: bottom;
		width: 40px;
		
    margin-right: 10px;
    ${mq.greaterThan('medium')`

    `}
    ${mq.greaterThan('large')`
			width: 60px;
			margin-right: 15px;
    `}
    ${mq.greaterThan('veryhuge')`
			width: 90px;
			margin-right: 27px;

    `}
  }
`
const Logo = styled.img`
  //margin-left: 29%;
  margin-bottom: 20px;
  width: 51%;
  padding-top: 16px;
`
const GwLogoRow = styled.div`
  margin-top: 40px;
`

export default class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <LogoCol>
          <Logo src={footerlogo} />
          <p>© Städtisches Mädchengymnasium Borbeck</p>
          <p>Fürstäbtissinstr. 52-54</p>
          <p>45355 Essen</p>
          <p>Tel 0201 68502-30</p>
          <p>
            <a href="mailto:Maedchengymnasium-Borbeck.info@schule.essen.de">
              Maedchengymnasium-Borbeck.info@schule.essen.de
            </a>
          </p>
          <p>
            <Link to="/impressum">Impressum</Link>
          </p>
          <GwLogoRow>
            <a href="https://gedankenwerk.com" target="_blank">
              <img width="70%" src={gwlogo} />
            </a>
          </GwLogoRow>
        </LogoCol>
        <AddressCol>
          <SubNav>
            <li>
              <Link to="/">SCHULE</Link>
            </li>
            <li>
              <Link to="/maedchenstaerken">MädchenStärken</Link>
            </li>
            <li>
              <Link to="/sprachen">Sprachen und Fahrten</Link>
            </li>
            <li>
              <Link to="/mint">Mint</Link>
            </li>
            <li>
              <Link to="/kultur">Kultur</Link>
            </li>
            <li>
              <Link to="/menschen">Menschen</Link>
            </li>
            <li>
              <Link to="/anmeldung">Anmeldung</Link>
            </li>
            <li>
              <Link to="/kalender">Kalender</Link>
            </li>
            <li>
              <Link to="/downloads">Downloads</Link>
            </li>
          </SubNav>
          <FBLink href="" target="_blank">
            <img src={fblogo} width={90} />
            FOLGE UNS AUF FACEBOOK
          </FBLink>
        </AddressCol>
        <SocialCol>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSt%25C3%25A4dtisches-M%25C3%25A4dchengymnasium-Essen-Borbeck-174439166464921%2F&tabs=timeline&width=340&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=118833648248957"
            width="340"
            height="800"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </SocialCol>
      </Wrapper>
    )
  }
}
