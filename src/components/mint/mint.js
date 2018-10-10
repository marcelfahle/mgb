import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import bg from './../headers/header-mint.png'
import grid_images from './../mint-images.png'
import maskMathematik from './../assets/mask-mathematik.svg'
import layover from './../assets/layover-mint.svg'
import robertaImg from './mint-roberta.png'
import { LinkButton } from '../button'
import menschenHeadline from './../menschen.svg'
import PersonGrid from '../person-grid'
import { Row, Grid, GridItem, GridVideo, Video } from '../VideoGrid'

import { mint } from './../data'
import {
  SubheadFullLight,
  PFullLight,
  SubheadFullDark,
  PFullDark,
  SubheadLight,
  PLight,
} from '../typo'

const Section = styled.section`
  position: relative;
  background-image: linear-gradient(85deg, #76c7a5 0%, #51a8b1 100%);
`
const Header = styled.div`
  position: relative;
  //background: transparent url(${bg}) no-repeat;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0% 100%);
  //&:before {
  //  display: block;
  //  content: ' ';
  //  width: 100%;
  //  padding-top: 52%;
  //}
`
const Content = styled.div`
  text-align: center;
  padding-top: 18px;
  padding-bottom: 277px;
`

const Actions = styled.div`
  padding-top: 64px;

  p {
    strong {
      font-weight: 700;
      text-transform: uppercase;
      display: block;
      margin-bottom: 1.2em;
      &:first-child {
        padding-top: 1.2em;
      }
    }
  }
`

const LayoverElement = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 90%;
`

const Roberta = styled.div`
  position: relative;
  background: white;
  color: #333333;
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 90%);
  padding-top: 442px;
  h4 {
  }
  p {
    max-width: 75%;

    padding-bottom: 5em;
    margin-bottom: 50px;
  }
`
const RobertaImg = styled.img`
  margin-top: -74px;
  width: 100%;
`

const MenschenHeadlineWrapper = styled.div`
  position: absolute;
  right: -1px;
  top: -140px;
  text-align: right;
  img {
    width: 90%;
  }
`
const MenschenHeadline = () => (
  <MenschenHeadlineWrapper>
    <img src={menschenHeadline} />
  </MenschenHeadlineWrapper>
)
const Menschen = styled.div`
  position: relative;
  min-height: 400px;
  background-image: linear-gradient(to right, #f8f8f8 0%, #f2f2f2 100%);
  padding-bottom: 100px;
  ${Actions} {
    text-align: center;
    padding-top: 96px;
    padding-bottom: 96px;
  }
`
const MenschenSubheadline = styled.h4`
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  padding-top: 100px;
  padding-bottom: 86px;
  text-align: center;
  color: #4d4d4d;
`
const FullVideo = styled.div`
  clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
  height: 442px;
  position: absolute;
  z-index: 70;
  top: -30px;
  video {
    width: 100%;
  }
`

export default class MintHeader extends PureComponent {
  render() {
    return (
      <Section>
        <Header>
          <Video id="musikmenschen-video" autoPlay loop muted playsInline>
            <source src={withPrefix('MGB-MINT-Header.mp4')} />
          </Video>
          <LayoverElement src={layover} />
        </Header>
        <Content>
          <SubheadFullLight>
            Mathematik. informatik. naturwissenschaften. technik.
          </SubheadFullLight>
          <PFullLight>
            Unsere Motivation ist, Mädchen und junge Frauen für
            MINT-Studiengänge und Berufe zu begeistern, denn in Zukunft werden
            mehr Fachkräfte benötigt und Führungspositionen besetzt, die
            vorrangig eine Männerdomäne waren.
            <br />
            <br />
            Wettbewerbe und Projekte rund um diese Themen, fördern den Spaß, die
            Kreativität und schaffen Freiraum für Innovationen.
          </PFullLight>

          <Grid>
            <Row>
              <GridVideo className="v1">
                <Video
                  className="left-video"
                  id="mathematik-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={withPrefix('MGB-Kachel-MINT-Mathematik.mp4')} />
                </Video>
              </GridVideo>
              <GridItem className="g1">
                <SubheadLight>Mathematik</SubheadLight>
                <PLight>
                  Mathematik am MGB bedeutet, die wesentlichen Eigenschaften der
                  Mathematik wie Struktur, Wahrheit, Schönheit kennen lernen zu
                  können.
                  <br />
                  Es ist nicht nur ein Unterrichtsfach, wir nehmen auch an
                  überregionalen Wettbewerben teil.
                </PLight>
              </GridItem>
            </Row>
            <Row>
              <GridVideo className="v2">
                <Video
                  className="right-video"
                  id="informatik-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={withPrefix('MGB-Kachel-MINT-Informatik.mp4')} />
                </Video>
              </GridVideo>
              <GridItem className="g2">
                <SubheadLight>Informatik</SubheadLight>
                <PLight>
                  Informatik, das ist nicht nur Programmieren. Hier geht es z.B.
                  auch um das Innere eines Rechners, um Verschlüsselungen, um
                  die Nutzung des Internets und der sozialen Medien, um den
                  Datenschutz und um den sicheren Umgang mit den neuen Medien.
                </PLight>
              </GridItem>
            </Row>
            <Row>
              <GridVideo className="v3">
                <Video
                  className="left-video"
                  id="natur-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={withPrefix('MGB-Kachel-MINT-Naturwissenschaften.mp4')}
                  />
                </Video>
              </GridVideo>
              <GridItem className="g3">
                <SubheadLight>Naturwissenschaften</SubheadLight>
                <PLight>
                  Neugierig sein - Fragen zu Phänomenen in der Natur zu stellen,
                  sie zu beobachten, zu untersuchen und zu experimentieren – das
                  steht im Mittelpunkt des naturwissenschaft-lichen Unterrichts
                  am Mädchengymnasium.
                </PLight>
              </GridItem>
            </Row>
            <Row>
              <GridVideo className="v4">
                <Video
                  className="right-video"
                  id="technik-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={withPrefix('MGB-Kachel-MINT-Technik.mp4')} />
                </Video>
              </GridVideo>
              <GridItem className="g4">
                <SubheadLight>Technik</SubheadLight>
                <PLight>
                  Spaß an Technik vermitteln, Roboter gemeinsam im Team bauen
                  und programmieren, kreativ werden und Figuren entwickeln, im
                  Wettbewerb auf der Bühne stehen: Das ist ROBERTA am MGB.
                </PLight>
              </GridItem>
            </Row>
          </Grid>
          <Actions>
            <SubheadFullLight>
              Teilnahme an mathematischen Wettbewerben
            </SubheadFullLight>
            <PFullLight>
              Seit 1990 nimmt das MGB regelmäßig an Wettbewerben in Mathematik
              teil.
            </PFullLight>
            <PFullLight>
              Wir bieten heute die Teilnahme an den folgenden sechs
              verschiedenen Mathematikwettbewerben im Jahr an unserer Schule an:
            </PFullLight>
            <PFullLight>
              <strong>Essener Mathematikwettbewerb</strong>
              <strong>Der Bundeswettbewerb Mathematik</strong>
              <strong>Känguru-Wettbewerb</strong>
              <strong>Online-Team-Wettbewerb</strong>
              <strong>PANGEA- Wettbewerb</strong>
              <strong>Bolyai-Wettbewerb</strong>
            </PFullLight>
          </Actions>
        </Content>
        <Menschen>
          <MenschenHeadline />
          <MenschenSubheadline>Die Menschen hinter MINT</MenschenSubheadline>
          <PersonGrid people={mint} />
          <Actions>
            <LinkButton primary to="/menschen">
              Alle kennenlernen
            </LinkButton>
          </Actions>
        </Menschen>
      </Section>
    )
  }
}
