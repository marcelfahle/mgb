import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import fblogo from './assets/fb-logo.svg'
import footerlogo from './assets/footer-logo.svg'
import { mq, rem } from './util'

const Wrapper = styled.div`
  display: flex;
  color: #fff;
  background-color: #424649;
  height: 946px;
  padding-top: 32px;
  padding-bottom: 100px;
  font-size: 20px;
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
  padding-left: 4%;
`
const AddressCol = styled.div`
  flex-basis: 36%;
`
const SocialCol = styled.div`
  flex: 1;
`

const SubNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 60px 0;
  width: 72%;
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
  line-height: 90px;
  color: white;
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }
  img {
    vertical-align: bottom;
    margin-right: 27px;
  }
`
const Logo = styled.img`
  //margin-left: 29%;
  margin-bottom: 20px;
  width: 51%;
  padding-top: 16px;
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
              <Link to="/kalendar">Kalendar</Link>
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
