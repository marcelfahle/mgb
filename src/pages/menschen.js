import React, { PureComponent } from 'react'
import styled from 'styled-components'

import header from './../components/headers/header-menschen.png'
import PersonGrid from '../components/person-grid'

import { schulleitung, kollegium } from './../components/data'

import Layout from '../layouts/'
import { SubheadFullDark, PFullDark } from '../components/typo'

const Wrapper = styled.div`
  background: #f8f8f8;
  text-align: center;
`
const Header = styled.div`
  img {
    width: 100%;
  }
`
const Content = styled.div`
  h3 {
    color: #4d4d4d;

    text-transform: uppercase;
    margin-top: 80px;
    margin-bottom: 46px;
  }
  > p {
    color: #4d4d4d;

    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`

export default class Menschen extends PureComponent {
  render() {
    return (
      <Layout>
        <Wrapper>
          <Header>
            <img src={header} />
          </Header>
          <Content>
            <SubheadFullDark>im Lehrerportrait</SubheadFullDark>
            <PFullDark>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </PFullDark>
            <SubheadFullDark>Schulleitung</SubheadFullDark>
            <PersonGrid people={schulleitung} />
            <SubheadFullDark>Kollegium</SubheadFullDark>
            <PersonGrid people={kollegium} />
            <SubheadFullDark>Schulpflegschaftvertreter</SubheadFullDark>
            <PFullDark>
              Wir Agnes Dexling und Frank Szubertowicz dürfen voller Tatendrang,
              in diesem Schuljahr die Eltern der Mädchen des MGB vertreten.
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
              Vertreterinnen aus allen Jahrgangsstufen , die bei Fragen und
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
