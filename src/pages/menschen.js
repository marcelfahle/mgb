import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import header from './../components/headers/header-menschen.png'
import PersonGrid from '../components/person-grid'

import Layout from '../layouts/'
import { SubheadFullDark, PFullDark } from '../components/typo'
import { Video } from './../components/VideoGrid'

import menschenTitle from './../components/menschen/title.svg'

import { graphql } from 'gatsby'

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
    const { data } = this.props
    const schulleitung = data.allDatoCmsAllTeacherCopy3.edges
    const kollegium = data.allDatoCmsAllTeacherCopy2.edges

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
              Wir, die jährlich neu gewählten Schulpflegschaftsvertreter, dürfen
              voller Tatendrang die Eltern des MGB vertreten.
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
            <SubheadFullDark>F&ouml;rderverein</SubheadFullDark>
            <PFullDark>
              Die Mitglieder des Förderkreises des Mädchengymnasiums
              Essen-Borbeck e. V. sind Eltern, Lehrer, ehemalige Schülerinnen
              und Freunde unserer Schule. Seit seiner Gründung 1971 bemüht sich
              der Förderkreis zu fördern und zu helfen, Initiativen
              voranzutreiben und Lücken zu schließen, wo es Not tut. Dabei wird
              die Schule im Interesse aller Schülerinnen unterstützt und zwar
              beispielsweise durch folgende Angebote:
              <br />- &quot;Offener Ganztag&quot;
              <br />- Schulmensa und -bücherei
              <br />- Instrumental-, Chor- und Theater-AGs
              <br />- Sozialfond
              <br />- Medienausstattung
              <br />
            </PFullDark>

            <PFullDark>
              Aber auch Sie haben die Möglichkeit den Förderkreis – und damit
              die Schülerinnen – durch Ihren Beitritt voran zu bringen. Dafür
              gibt es verschiedene Möglichkeiten:
              <br />- Gerne können Sie sich aktiv mit Ihren Ideen oder Ihrer
              Zeit in die Gestaltung des Schullebens einbringen
              <br />- oder Sie unterstützen mit Ihrem Mitgliedsbeitrag oder
              einer Spende den Schulalltag
              <br />
            </PFullDark>
            <PFullDark>
              Wir freuen uns, wenn Sie über
              <a href="mailto:email@foerderkreis-mgb.de">
                email@foerderkreis-mgb.de
              </a>{' '}
              Kontakt mit uns aufnehmen.
              <br />
              Die Satzung des Vereins und Mitgliedsanträge stehen im
              Downloadbereich zur Verfügung.
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

export const query = graphql`
  query MenschenQuery {
    allDatoCmsAllTeacherCopy3(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          name
          subjects
          photo {
            id
            url
          }
        }
      }
    }
    allDatoCmsAllTeacherCopy2(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          name
          subjects
          photo {
            id
            url
          }
        }
      }
    }
  }
`
