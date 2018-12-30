import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import {
  SubheadLight,
  SubheadDark,
  SubheadFullLight,
  SubheadFullDark,
  PDark,
  PLight,
  PFullLight,
  PFullDark,
  Menschen,
  MenschenSubheadline,
  MenschenHeadlineWrapper,
  MenschenHeadline,
} from '../typo'

import bg from './../headers/header-kultur.png'
import grid_images from './../mint-images.png'
import maskMathematik from './../assets/mask-mathematik.svg'
import layover from './../assets/layover-kultur.svg'
import introImg from './kultur-intro.png'
import vocalNightImg from './girls-vocal-night.png'
import theaterHeader from './theater.png'
import theater1 from './theater1.png'
import theater2 from './theater2.png'
import kunstHeader from './kunst.png'
import { LinkButton } from '../button'
import menschenHeadline from './../menschen.svg'
import PersonGrid from '../person-grid'
import { Row, Grid, GridItem, GridVideo, Video } from '../VideoGrid'
import { FullWidthVideo } from '../FullWidthVideo'

const Section = styled.section`
  position: relative;
  background-image: linear-gradient(to right, #ff8e00 0%, #ac005f 100%);
`
const Header = styled.div`
  position: relative;
  //background: transparent url(${bg}) no-repeat;
  //background-size: 105%;
  background-position: 25% 0%;
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
  position: relative;
  z-index: 50;
  //background-image: linear-gradient(to right, #ff8e00 0%, #ac005f 100%);
  //background: #ff8e00;
  color: white;
  //clip-path: polygon(0 0.4%, 100% 0, 100% 100%, 0 92%);
  margin-top: -4%;
  &:before {
    display: block;
    content: ' ';
    width: 100%;
    padding-top: 4.2%;
  }
`

const Actions = styled.div`
  padding-top: 64px;

  h3 {
  }
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
  bottom: -2px;
  right: 0px;
  width: 98%;
`

const Intro = styled.div`
  position: relative;
  padding-top: 48%;
  margin-top: 6%;
  background: #ff8e00;
  & + ${Grid} + ${Actions}, & + ${Grid} {
    background: #ff8e00;
    margin-top: 0;
    padding-top: 2%;
  }
  & + ${Grid} + ${Actions} {
    padding-bottom: 77px;
  }
  p {
    padding-bottom: 5em;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const VocalNight = styled.div`
  background: #ff8e00;
  position: relative;
  padding-top: 48%;
  padding-bottom: 14%;
  z-index: 60;
  img {
    position: absolute;
    top: -15%;
    width: 100%;
  }
`

const Theater = styled.div`
  position: relative;
  z-index: 70;
  background: #d1422c;
  padding-top: 28%;
`
const TheaterIntro = styled.div`
  padding-top: 19%;
  padding-bottom: 0;
  img {
    position: absolute;
    top: -13%;
    width: 100%;
  }
`
const TheaterBody = styled.div`
  background: #d1422c;
  padding-bottom: 5%;
`

const Kunst = styled.div`
  position: relative;
  background: #a30154;
  z-index: 90;
  margin-bottom: -70px;
`
const KunstIntro = styled.div`
  padding-top: 50%;
  padding-bottom: 20%;
`

export default class KulturHeader extends PureComponent {
  render() {
    const { menschen } = this.props
    return (
      <Section>
        <Header>
          <Video id="musikmenschen-video" autoPlay loop muted playsInline>
            <source src={withPrefix('MGB-Kultur-Header.mp4')} />
          </Video>
          <LayoverElement src={layover} />
        </Header>
        <Content>
          <SubheadFullLight>Unser Konzept</SubheadFullLight>
          <PFullLight>
            Wir fördern Kreativität, Phantasie und künstlerische Fähigkeiten
            genauso wie den Teamgeist. Um allen Talenten gerecht zu werden,
            setzen wir auf möglichst viele unterschiedliche Techniken und
            Themen, die möglichst viele Bereiche abdecken.
          </PFullLight>

          <Intro>
            <FullWidthVideo src="MGB-Kultur-HeaderV2.mp4" />
            <SubheadFullLight>Musik am MGB</SubheadFullLight>
            <PFullLight>
              Am MGB wird in Zusammenarbeit mit der Folkwang Musikschule die
              Musikklasse "Streichinstrumente“ angeboten. Alle Schülerinnen
              dieser Klasse lernen in den Jahrgangsstufen 5 und 6 ein
              Streichinstrument. Zur Auswahl stehen Geige, Bratsche, Cello oder
              Kontrabass. Die Schülerinnen der Musikklasse haben neben dem
              regulären Musikunterricht zwei weitere praktische Stunden bei
              Instrumentalpädagogen der Folkwang Musikschule davon eine
              Orchesterstunde. Die Instrumental- sowie Orchesterstunden sind in
              den regulären Stundenplan integriert.
              <br />
              <br />
              So öffnen sich ihnen musikalische Horizonte für unterschiedliche
              Instrumente und Musikstile. Nach der Erprobungsstufe stehen den
              Schülerinnen das Streichorchester, Schulorchester und der Chor
              "Die Sirenen" zur Auswahl. Sie können in diesen Ensembles das
              musikalische Jahr am MGB auf aktive Weise mitgestalten, unsere
              Schule nach außen repräsentieren und Hunderte von Zuhörern in die
              Aula locken.
            </PFullLight>
          </Intro>

          <Grid>
            <Row>
              <GridVideo className="v1">
                <Video
                  className="left-video-special"
                  id="orchestar-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={withPrefix('MGB-Kachel-Kultur-Schulorchester.mp4')}
                  />
                </Video>
              </GridVideo>
              <GridItem className="g1">
                <SubheadLight>Das Schulorchester</SubheadLight>
                <PLight>
                  Auch das Schulorchester wird zur Zeit von Herrn Sykora
                  geleitet. Hier finden alle Instrumentalisten (nicht nur die
                  Streicher) ein zuhause. Holz- und Blechbläserinnen mit
                  entsprechenden Vorkenntnissen können ab der 6. Klasse
                  mitspielen und treffen hier auf die fortgeschrittenen
                  Streicher. Die Literatur, die das Schulorchester einstudiert,
                  ist vielseitig und reicht von klassischen Stücken über
                  Filmmusik bis zu Bearbeitungen aus dem Bereich der Popmusik.
                </PLight>
              </GridItem>
            </Row>
            <Row>
              <GridVideo className="v2-special">
                <Video
                  className="right-video-special"
                  id="projektkurs-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={withPrefix(
                      'MGB-Kachel-Kultur-Musical-Projektkurs.mp4'
                    )}
                  />
                </Video>
              </GridVideo>
              <GridItem className="g2">
                <SubheadLight>Musical Projektkurs</SubheadLight>
                <PLight>
                  Dies ist ein englisch-sprachiger Kurs, der in der Q1
                  unterrichtet wird und die Fächer Musik und Englisch verbindet.
                  In diesem Kurs wird ein englisches Theaterstück mit eigenen
                  Kompositionen in ein Musical verwandelt, das dann am Ende des
                  Schuljahres aufgeführt wird.
                </PLight>
              </GridItem>
            </Row>
          </Grid>
          <Actions>
            <PFullLight>
              Am Mädchengymnasium Borbeck finden über das Jahr verteilt
              verschiedene musikalische Darbietungen statt und zum Schulkonzert
              am Schuljahresende treten alle Musikensembles des MGB auf.
            </PFullLight>
          </Actions>
        </Content>
        <VocalNight>
          <FullWidthVideo src="MGB-Kultur-Header3V2.mp4" />
          <SubheadFullLight>Girls' Vocal Night</SubheadFullLight>
          <PFullLight>
            Die Girls' Vocal Night, oder kurz GVN wie sie meistens genannt wird,
            ist ein Rock- und Popkonzert in der Aula des MGB, das zwischen
            Weihnachten und Ostern stattfindet.
            <br />
            <br />
            Der von den Schülerinnen geprägte Begriff verrät, dass dieser Abend
            voll und ganz dem Singen gewidmet ist. Es singen die beiden Chöre
            der Schule, aber auch Solistinnen stellen ihr Können unter Beweis.
            Die Bühne wird professionell beleuchtet und auch die live-Band
            besteht aus professionellen Musikern. Dadurch ist dieser Abend immer
            ein ganz besonderer und Karten sollte man sich frühzeitig sichern!
          </PFullLight>
        </VocalNight>
        <Theater>
          <TheaterIntro>
            <FullWidthVideo src="MGB-Kultur-Header4V2.mp4" />
            <SubheadFullLight>Vorhang auf - Theater am MGB</SubheadFullLight>
            <PFullLight>
              Am Mädchengymnasium können Schülerinnen von der Klasse 5 bis zum
              Abitur in der Q2 Theaterluft schnuppern, Theater sehen und
              selbstverständlich auch Theater spielen!
            </PFullLight>
          </TheaterIntro>
          <TheaterBody>
            <Grid>
              <Row>
                <GridVideo className="v2-special">
                  <Video
                    className="left-video-special"
                    id="projektkurs-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source
                      src={withPrefix(
                        'MGB-Kachel-Kultur-AlsUnterrichtsfachV1.mp4'
                      )}
                    />
                  </Video>
                </GridVideo>
                <GridItem className="g1">
                  <SubheadLight>Als Unterrichtsfach</SubheadLight>
                  <PLight>
                    Besonders ist dabei die Möglichkeit „Theater“ sogar als
                    Schulfach zu wählen. Im Wahlpflichtfach „Darstellendes
                    Spiel“ können unsere Mädchen in Klasse 8 & 9 die ganze
                    Bandbreite der Theaterarbeit kennenlernen. Dazu gehören -
                    neben dem Spiel auf unserer Aulabühne - das Entstehen eines
                    Theatertextes im Schreiben eigener Szenen, Stimmtraining,
                    Rollenarbeit, Bühnentechnik,Theaterbesuche, uvm.
                  </PLight>
                </GridItem>
              </Row>
              <Row>
                <GridVideo className="v2-special">
                  <Video
                    className="right-video-special"
                    id="projektkurs-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source
                      src={withPrefix('MGB-Kachel-Kultur-Als AGV1.mp4')}
                    />
                  </Video>
                </GridVideo>
                <GridItem className="g2" style={{ paddingTop: 40 }}>
                  <SubheadLight>Als AG</SubheadLight>
                  <PLight>
                    Bereits ab Klasse 5 sehen wir unsere Schülerinnen in
                    Aufführungen der Theater-AG des offenen Ganztags auf der
                    Bühne. Für die Mittel- und Oberstufe gibt es eine gemeinsame
                    AG, in der die Mädchen z. B. mit neuen Interpretationen von
                    Shakespeare oder Schiller nicht nur auf der Schulbühne
                    überzeugen, sondern auch den Sprung auf die Bühne des
                    Grillo-Theaters im Rahmen der Essener Schultheatertage
                    wagen.
                  </PLight>
                </GridItem>
              </Row>
            </Grid>
            <SubheadFullLight>Die grosse Bühne</SubheadFullLight>
            <PFullLight>
              Durch die Kooperation mit dem Essener Grillo-Theater erhalten
              unsere Schülerinnen die Gelegenheit, auch hinter die Kulissen der
              großen Bühnen zu blicken, Probenprozesse zu begleiten oder sich
              ganz eigene Zugänge zu Stücken im Rahmen von Workshops zu
              erspielen.
            </PFullLight>
          </TheaterBody>
        </Theater>
        <Kunst>
          <KunstIntro>
            <FullWidthVideo src="MGB-Kultur-Header5V2.mp4" />
            <SubheadFullLight>Kunst am MGB</SubheadFullLight>
            <PFullLight>
              Kunst am MGB geht weit über die bloße Anwendung von verschiedenen
              Techniken hinaus! Es wird genau hingeschaut, beobachtet, sehen
              gelernt. Es wird geplant, gestaltet, beurteilt, optimiert,
              ausgeführt. Der Blick auf die Wirklichkeit wird geschärft und neue
              Wirklichkeiten werden von den Schülerinnen in ihren Arbeiten auf
              gestalterischem Wege hervorgebracht.
            </PFullLight>
          </KunstIntro>
        </Kunst>
        <Menschen>
          <MenschenHeadline />
          <MenschenSubheadline>
            Die Menschen hinter der Kultur
          </MenschenSubheadline>
          <PersonGrid people={menschen} />
          <Actions className="actions">
            <LinkButton to="/menschen" primary>
              Alle kennenlernen
            </LinkButton>
          </Actions>
        </Menschen>
      </Section>
    )
  }
}
