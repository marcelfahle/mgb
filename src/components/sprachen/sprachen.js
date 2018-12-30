import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import bg from './../headers/header-sprachen.png'
import russiaImg from './russia.png'
import usaImg from './usa.png'
import londonImg from './london.png'
import logosImg from './logos.png'
import grid_images from './../mint-images.png'
import maskMathematik from './../assets/mask-mathematik.svg'
import layover from './../assets/layover-mint.svg'
import Button, { LinkButton } from '../button'
import {
  Menschen,
  MenschenHeadline,
  MenschenHeadlineWrapper,
  PSmallFullMedium,
  SubheadMedium,
  PSmallMedium,
  SubheadFullDark,
  PFullDark,
} from '../typo'
import { mq, rem } from '../util'

import paris from './france.png'

import menschenHeadline from './../menschen.svg'
import PersonGrid from '../person-grid'

import { kultur as kulturKollegen } from './../data'

const Section = styled.section`
  position: relative;
  background: #fff;
`
const Header = styled.div`
  position: relative;
  background: transparent url(${bg}) no-repeat;
  background-size: cover;
  color: #ffffff;
  font-family: 'Open Sans';
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:before {
    display: block;
    content: ' ';
    width: 1px;
    padding-top: 50%;
  }

  padding-top: ${rem(64)}rem;
  font-size: ${rem(40)}rem;
  ${mq.greaterThan('mini')`
		font-size: ${rem(60)}rem;
	`};
  ${mq.greaterThan('large')`
		font-size: ${rem(128)}rem;
	`};
  ${mq.greaterThan('huge')`

	`};
  ${mq.greaterThan('veryhuge')`

	`};
`
const Content = styled.div`
  text-align: center;
  padding-top: 18px;
  padding-bottom: 2%;
`
const Headline = styled.h3`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
`

const P = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 37px;
  line-height: 1.3;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 72px;
`

const Grid = styled.div`
position: relative;
  //background: transparent url(${grid_images}) no-repeat;
  background-size: 100%;
  padding-bottom: 1px;
`

const GridItem = styled.div`
  ${mq.greaterThan('medium')`
		max-width: 50%;
		text-align: left;
		&.grid1 {
			margin-right: 2%;
			margin-left: auto;
			padding-top: 2%;
		}
	`};

  h4 {
    font-family: 'Open Sans';
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 1.1em;
  }
  p {
  }
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
const GridVideo = styled.div`
  ${mq.greaterThan('medium')`
		position: absolute;
		width: 50%;
	`};
  img {
    width: 100%;
  }
`

const LayoverElement = styled.img`
  position: absolute;
  bottom: 8px;
  left: 0px;
`

const Block = styled.div`
  display: block;
  margin-top: 4%;
  &.russian {
    margin-top: 0;
  }
`

const Head = styled.div`
  position: relative;
  background: transparent url(${russiaImg}) no-repeat;
  background-size: cover;
  color: #ffffff;
  font-family: 'Open Sans';
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:before {
    display: block;
    content: ' ';
    width: 1px;
    padding-top: 40%;
  }

  font-size: ${rem(58)}rem;
  line-height: 1.64em;
  ${mq.greaterThan('large')`
		font-size: ${rem(128)}rem;

	`};
  ${mq.greaterThan('huge')`

	`};
  ${mq.greaterThan('veryhuge')`

	`};
`
const Logos = styled.img`
  margin: 0 auto;
  width: 50%;
`

const MenschenSubheadline = styled.h4`
  font-size: ${rem(50)}rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-top: 5%;
  padding-bottom: 3%;
  color: #4d4d4d;
  text-align: left;
  padding-left: 5%;

  ${mq.greaterThan('large')`
		padding-left: 8%;
	`};
`

export default class MintHeader extends PureComponent {
  render() {
    const { menschen } = this.props
    return (
      <Section>
        <Header>
          Europaschule, Sprachen <br />
          und Fahrten.
        </Header>
        <Content>
          <PSmallFullMedium>
            Das MGB ist Mitglied des Netzwerk „Europaschulen Essen“. Alle
            Mitgliedsschulen haben sich verpflichtet, den Europagedanken in den
            Curricula der Fächer besonders zu verankern und zusätzliche
            internationale Projekte mit ihren Partnerschulen durchzuführen.
            <br />
            <br />
            Am MGB findet zu den planmäßigen Fahrten und Austauschen der
            Fremdsprachen regelmäßig ein Erasmus+ Projekt mit verschiedenen
            europäischen Partnern statt und die Mädchen werden aufgefordert,
            sich auch um internationale Praktikumsplätze zu bemühen, um ihren
            europäischen und beruflichen Horizont zu erweitern.
            <br />
            <br />
            Die Europaschulen Essen veranstalten gemeinsame Projekte und
            Wettbewerbe der Schulen untereinander und feiern jährlich gemeinsame
            Europatreffen und Zertifizierungsveranstaltungen für Schüler und
            Schülerinnen, die sich in besonderem Maße für den europäischen
            Gedanken eingesetzt haben.
          </PSmallFullMedium>
          <Grid>
            <GridVideo className="vw-mathematik">
              <img src={paris} />
            </GridVideo>
            <GridItem className="grid1">
              <SubheadMedium>FRANKREICHAUSTAUSCH AM MGB</SubheadMedium>
              <PSmallMedium>
                Der Schüleraustausch mit unserem Nachbarland Frankreich kann am
                MGB auf eine lange Tradition zurückblicken. Bereits 1976 fuhren
                erstmals Schülerinnen in die Essener Partnerstadt Grenoble.
                <br />
                <br />
                Seit 2001 besteht ein regelmäßiger Schüleraustausch mit unserer
                Partnerschule Collège-Lycée Fénelon Notre Dame in La Rochelle.
                Mit diesem Austausch werden schwerpunktmäßig die Schülerinnen
                der Jahrgangsstufe 8 angesprochen und jährlich nutzt eine Gruppe
                von ca. 30 Schülerinnen diese Möglichkeit, eigenständig neue
                Erfahrungen in französischen Familien und dem französischen
                Schulsystem zu sammeln.
              </PSmallMedium>
            </GridItem>
          </Grid>
          <Block className="russian">
            <Head>Wie wär’s mit Russisch?</Head>
            <PSmallFullMedium>
              Ein Exot unter den Schulfächern und damit die Möglichkeit zur
              besonderen Profilierung unserer Schülerinnen: Russisch als dritte
              Fremdsprache im Differenzierungsbereich II.
              <br />
              <br />
              Das Fach Russisch ist ab der achten Klasse wählbar und wird in der
              Oberstufe bei ausreichendem Interesse als Grundkurs bis zum Abitur
              geführt. Abiturprüfungen sind sowohl mündlich als auch schriftlich
              im Fach Russisch möglich. Schülerinnen, die besondere Begabung und
              Engagement im Bereich Fremdsprachen aufweisen, erhalten durch die
              dritte Fremdsprache gute Voraussetzungen zusätzlich zum Abitur das
              Excellenzlabel CertiLingua zu erwerben.
              <br />
              <br />
              Von 1999 bis 2013 bestand im Rahmen der Städtepartnerschaft Essen
              - Nizhnij Novgorod ein Schüleraustausch zwischen dem MGB und dem
              Nizhegoroder Gymnasium Nr. 80. Seit 2014 hat das MGB eine neue
              Partnerschaft mit dem Gymnasium Nr. 12 der Stadt Perm in der
              aufstrebenden Kulturregion Vorderer Ural.
            </PSmallFullMedium>
            <SubheadMedium>
              Für Russisch gibt es viele gute Gründe!
              <br />
              Also: Wie wär’s mit Russisch?!
            </SubheadMedium>
          </Block>
          <Block>
            <img src={usaImg} width="100%" />
            <SubheadMedium>Amerikafahrt</SubheadMedium>
            <PSmallFullMedium>
              In Kooperation mit dem Kölner Anbieter EEI bietet sich
              MGB-Schülerinnen der Jahrgänge 9 - Q1 seit dem Jahr 2008 die
              Möglichkeit, 3 Wochen in den USA zu verbringen.
              <br />
              <br />
              Seitdem reist in jedem Jahr eine Gruppe von ca.14 Schülerinnen mit
              einem begleitenden Lehrer über den Atlantik ins "Land der
              unbegrenzten Möglichkeiten". Dort wohnen die Mädchen bei
              Gastfamilien und besuchen jeweils eine private High School.
              <br />
              <br />
              Neben drei Ausflügen, die die Gruppe jeweils gemeinsam macht,
              unternehmen alle Familien immer viel mit ihren Gästen, so dass
              alle Reisenden einen Einblick ins Leben einer amerikanischen
              Familie und einen Eindruck der Region gewinnen können. In den
              Schulen werden wir immer sehr herzlich aufgenommen und der
              Schulalltag kann mit dem aus Filmen wie "High School Musical"
              verglichen werden. In jedem Jahr werden unendlich viele Eindrücke
              mit nach Hause genommen und viele neue Freundschaften geschlossen.
            </PSmallFullMedium>
            {/*<SubheadMedium>Ansprechpartner</SubheadMedium>*/}
          </Block>
          <Block>
            <img src={londonImg} width="100%" />
            <SubheadMedium>
              Klassenfahrten der Jahrgangsstufe 9 nach England
            </SubheadMedium>
            <PSmallFullMedium>
              Die von der Schulkonferenz für die Jahrgangsstufe 9 festgesetzte
              Klassenfahrt führt seit vielen Jahren zu unterschiedlichen Zielen
              nach Großbritannien. Schließlich gehört zum Erlernen einer
              Fremdsprache auch der Besuch des Landes und das Kennenlernen der
              englischsprachigen Kultur.
              <br />
              <br />
              Organisiert wird die Fahrt von einem Reiseunternehmen, das auf
              Schülerfahrten spezialisiert ist. In jedem Fall werden die
              Schülerinnen in Gastfamilien untergebracht und absolvieren während
              ihres Aufenthaltes in England ein vielfältiges Programm. Ein
              Highlight aller Fahrten nach England ist für die Schülerinnen der
              Besuch Londons in Kleingruppen, der intensiv vorbereitet wird. Mit
              Stadtplan und Extra-Reiseführer ausgestattet, erkunden die
              Schülerinnen Sehenswürdigkeiten und Einkaufsmöglichkeiten der
              Hauptstadt und haben so Gelegenheit London ganz individuell kennen
              zu lernen.
              <br />
              <br />
              Wenn es dann nach einer erlebnisreichen Woche wieder mit vielen
              neuen Eindrücken nach Hause geht, steht für viele Schülerinnen
              fest, dass sie England auf jeden Fall wieder besuchen wollen.
            </PSmallFullMedium>
          </Block>
          <Actions>
            <Button secondary={1}>Mehr erfahren</Button>
          </Actions>
          <Actions>
            <SubheadFullDark>Teilnahme an Sprach-Wettbewerben</SubheadFullDark>

            <PFullDark>
              <strong>
                <a
                  href="https://www.schulministerium.nrw.de/docs/Schulsystem/Unterricht/Lernbereiche-und-Faecher/Fremdsprachen/CertiLingua/index.html"
                  target="_blank"
                >
                  Certilingua
                </a>
              </strong>

              <strong>
                <a
                  href="http://www.europaeischer-referenzrahmen.de/delf.php"
                  target="_blank"
                >
                  delf
                </a>
              </strong>
            </PFullDark>
          </Actions>
          <Logos src={logosImg} />
        </Content>
        <Menschen>
          <MenschenHeadline />
          <MenschenSubheadline>
            Die Menschen hinter den Sprachen
          </MenschenSubheadline>
          <PersonGrid people={menschen} />
          <Actions>
            <LinkButton to="/menschen">Alle kennenlernen</LinkButton>
          </Actions>
        </Menschen>
      </Section>
    )
  }
}
