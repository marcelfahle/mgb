import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import header from './../components/headers/header-menschen.png'
import PersonGrid from '../components/person-grid'

import { schulleitung, kollegium } from './../components/data'

import Layout from '../layouts/'
import { SubheadFullDark, PFullDark } from '../components/typo'
import { Video } from './../components/VideoGrid'

import menschenTitle from './../components/menschen/title.svg'

const Wrapper = styled.div`
  background: #f8f8f8;
  text-align: center;
  padding-bottom: 12%;
`
const Header = styled.div`
  position: relative;

  background-position: 25% 0%;
  // &:before {
  //   display: block;
  //   content: ' ';
  //   width: 100%;
  //   padding-top: 52%;
  // }
  span {
    position: absolute;
    bottom: -6px;
    right: 0px;
    text-align: right;
    img {
      width: 93%;
    }
  }
`
const Content = styled.div`
  background: #f8f8f8;
  h3 {
    color: #4d4d4d;

    text-transform: uppercase;
    margin-top: 80px;
    margin-bottom: 46px;
  }
`

export default class Menschen extends PureComponent {
  render() {
    return (
      <Layout>
        <Wrapper>
          <Header>
            <Video id="musikmenschen-video" autoPlay loop muted playsInline>
              <source src={withPrefix('MGB-Menschen-Header.mp4')} />
            </Video>
            <span>
              <img src={menschenTitle} />
            </span>
          </Header>
          <Content>
            <SubheadFullDark>Schulleitung</SubheadFullDark>
            <PersonGrid people={schulleitung} />
            <SubheadFullDark>Kollegium</SubheadFullDark>
            <PersonGrid people={kollegium} />
            <SubheadFullDark>Schulpflegschaftvertreter</SubheadFullDark>
            <PFullDark>
              Wir, Agnes Dexling und Frank Szubertowicz dürfen voller
              Tatendrang, in diesem Schuljahr die Eltern der Mädchen des MGB
              vertreten.
            </PFullDark>
            <PFullDark>
              Gerne sind wir für Sie Ansprechpartner bei Fragen, bei jeglichen
              Angelegenheiten aber auch in Konfliktsituationen. Bei Bedarf wird
              Frau Busch Ihnen unsere Kontaktdaten nennen, sodass wir jederzeit
              für Sie ansprechbar sein werden.
            </PFullDark>
            <PFullDark>
              Wir danken Ihnen herzlich für das Vertrauen und freuen uns auf ein
              erfolgreiches Jahr.
            </PFullDark>
            <SubheadFullDark>Die Schülerinnenvertretung am MGB</SubheadFullDark>
            <PFullDark>
              Zu Beginn eines jeden Schuljahres wählen die Schülerinnen
              Vertreterinnen aus allen Jahrgangsstufen, die bei Fragen und
              Problemen ein offenes Ohr haben und in allen Belangen ansprechbar
              sind. Eine Liste der aktuellen Schülerinnenvertreterinnen sowie
              der Schülersprecherinnen und SV-Lehrerinnen des Schuljahres hängt
              am SV-Brett aus.
            </PFullDark>
            <SubheadFullDark>Verwaltung</SubheadFullDark>
            <PFullDark>
              <strong>Sekreteriat:</strong> Frau Busch
              <br />
              <strong>Hausmeister:</strong> Herr Prinz
              <br />
              <strong>Hausmeister:</strong> Herr Lennartz
              <br />
            </PFullDark>
          </Content>
        </Wrapper>
      </Layout>
    )
  }
}
