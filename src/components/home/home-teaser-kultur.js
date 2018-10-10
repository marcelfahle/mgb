import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import bg from './../teaser-kultur.png'
import grid_images from './../kultur-images.png'
import layover from './../assets/layover-kultur.svg'
import { LinkButton } from '../button'
import { SubheadFullLight, PFullLight, SubheadLight, PLight } from '../typo'
import { Row, Grid, GridItem, GridVideo, Video } from '../VideoGrid'

const Section = styled.section`
  position: relative;
  background-image: linear-gradient(to right, #ff8e00 0%, #ac005f 100%);
  padding-top: 1px;
  padding-bottom: 140px;
`
const Header = styled.div`
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0% 100%);

  margin-top: -2.5%;
`
const Content = styled.div`
  text-align: center;
  padding-top: 18px;
  padding-bottom: 67px;
`

const Actions = styled.div`
  padding-top: 64px;
`
const LayoverElement = styled.img`
  position: absolute;
  bottom: 0px;
  right: -10px;
  width: 96%;
`

export default class HomeTeaserKultur extends PureComponent {
  render() {
    return (
      <Section>
        <Header>
          <Video id="musikmenschen-video" autoPlay loop muted playsInline>
            <source src={withPrefix('MGB-Kultur-Header.mp4')} />
          </Video>
          <LayoverElement src={layover} />
        </Header>
        <Content>
          <SubheadFullLight>Musik. Kunst. Theater.</SubheadFullLight>
          <PFullLight>
            Maßgeblich zeichnet sich das MGB durch einen künstlerisch-musischen
            Schwerpunkt aus, der mit zahlreichen Veranstaltungen und einem engen
            Bezug zum künstlerischen Leben im Stadtteil das Schuljahr belebt.
          </PFullLight>
          <Grid>
            <Row>
              <GridVideo className="v1">
                <Video
                  className="left-video"
                  id="musik-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={withPrefix('MGB-Kachel-Schule-Musik.mp4')} />
                </Video>
              </GridVideo>
              <GridItem className="g1">
                <SubheadLight>Musik am MGB …</SubheadLight>
                <PLight>
                  ... heißt Singen, Spielen, Hören und Zuhören, Komponieren,
                  Arrangieren, Analysieren und Nachdenken über Musik und
                  Musiker. Und Musik am MGB ist nicht nur ein Fach im
                  Stundenplan.
                  <br />
                  <br />
                  Es ist auch Einstudieren, Proben und Darbieten, kurzum: das
                  Erleben von Musik.
                </PLight>
              </GridItem>
            </Row>
            <Row>
              <GridVideo className="v2">
                <Video
                  className="right-video"
                  id="kunst-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={withPrefix('MGB-Kachel-Schule-Kunst.mp4')} />
                </Video>
              </GridVideo>
              <GridItem className="g2">
                <SubheadLight>Kunst am MGB…</SubheadLight>
                <PLight>
                  … heißt Malen, Aquarellieren, Zeichnen, Collagieren,Drucken,
                  mit Ton arbeiten, Steine behauen, experimentelle Techniken
                  erforschen und mit dem Zufall spielen.
                </PLight>
              </GridItem>
            </Row>
            <Row>
              <GridVideo className="v3">
                <Video
                  className="left-video"
                  id="theater-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={withPrefix('MGB-Kachel-Schule-Theater.mp4')} />
                </Video>
              </GridVideo>
              <GridItem className="g3">
                <SubheadLight>Theater am MGB…</SubheadLight>
                <PLight>
                  ... heißt Theaterluft schnuppern, Theater sehen und
                  selbstverständlich auch Theater spielen! Am Mädchengymnasium
                  können Schülerinnen von der Klasse 5 bis zum Abitur in der Q2
                  Theater als Unterrichtsfach oder AG wählen.
                </PLight>
              </GridItem>
            </Row>
          </Grid>
          <Actions>
            <LinkButton to="/kultur" secondary>
              Mehr erfahren
            </LinkButton>
          </Actions>
        </Content>
      </Section>
    )
  }
}
