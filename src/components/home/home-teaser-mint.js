import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import bg from './../teaser-mint.png'
import grid_images from './../mint-images.png'
import maskMathematik from './../assets/mask-mathematik.svg'
import layover from './../assets/layover-mint.svg'
import { LinkButton } from '../button'
import { SubheadFullLight, PLight, PFullLight, SubheadLight } from '../typo'
import { Row, Grid, GridItem, GridVideo, Video } from '../VideoGrid'

const Section = styled.section`
  position: relative;
  background-image: linear-gradient(85deg, #76c7a5 0%, #51a8b1 100%);
`
const Header = styled.div`
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0% 100%);
`
const Content = styled.div`
  text-align: center;
  padding-top: 18px;
  padding-bottom: 147px;
`

const Actions = styled.div`
  padding-top: 64px;
`

const LayoverElement = styled.img`
  position: absolute;
  bottom: 0%;
  left: 0px;
  width: 90%;
`

export default class HomeTeaserMint extends PureComponent {
  render() {
    return (
      <Section>
        <Header>
          <Video id="musikmenschen-video" autoPlay loop muted playsInline>
            <source src={withPrefix('MGB-Schule-MintV1.mp4')} />
          </Video>
          <LayoverElement src={layover} />
        </Header>
        <Content>
          <SubheadFullLight>
            Mathematik. informatik. naturwissenschaften. technik.
          </SubheadFullLight>
          <PFullLight>
            Ein weiterer Schwerpunkt ist – über den üblichen Fächerkanon hinaus
            – die MINT-Förderung. Unvoreingenommen wird an die vielfältigen
            naturwissenschaftlichen Herausforderungen unserer Zeit herangeführt.
            Es soll das Interesse an diesen Fächern geweckt werden, denn hier
            warten großartige Chancen in der späteren Arbeitswelt.
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
                  <source
                    src={withPrefix('MGB-Kachel-Schule-Mathematik.mp4')}
                  />
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
                  <source
                    src={withPrefix('MGB-Kachel-Schule-Informatik.mp4')}
                  />
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
                    src={withPrefix(
                      'MGB-Kachel-Schule-Naturwissenschaften.mp4'
                    )}
                  />
                </Video>
              </GridVideo>
              <GridItem className="g3">
                <SubheadLight>Naturwissenschaften</SubheadLight>
                <PLight>
                  Neugierig sein - Fragen zu Phänomenen in der Natur zu stellen,
                  sie zu beobachten, zu untersuchen und zu experimentieren – das
                  steht im Mittelpunkt des naturwissenschaftlichen Unterrichts
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
                  <source src={withPrefix('MGB-Kachel-Schule-Technik.mp4')} />
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
            <LinkButton to="/mint" secondary={1}>
              Mehr erfahren
            </LinkButton>
          </Actions>
        </Content>
      </Section>
    )
  }
}
