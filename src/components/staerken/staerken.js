import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import bg from './staerken-header.png'

import grid_images from './../mint-images.png'
import maskMathematik from './../assets/mask-mathematik.svg'
import Button, { LinkButton } from '../button'
import { PSmallFullMedium, SubheadMedium, PSmallMedium } from '../typo'
import { Video } from '../VideoGrid'
import { mq, rem } from '../util'

import menschenHeadline from './../menschen.svg'
import PersonGrid from '../person-grid'

import { kultur as kulturKollegen } from './../data'

const Section = styled.section`
  position: relative;
  background: #fff;
`
const Header = styled.div`
  position: relative;
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 128px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const Content = styled.div`
  padding-top: 18px;
  padding-bottom: 147px;
`

export const PageTitle = styled.span`
  position: absolute;
  bottom: -5px;
  left: -0.1em;
  font-size: 3rem;
  line-height: 0.78em;
  font-weight: 700;
  text-transform: uppercase;
  ${mq.greaterThan('small')`
		font-size: 8rem;
	`};
  ${mq.greaterThan('large')`
		font-size: 11rem;
	`};
`

export default class MintHeader extends PureComponent {
  render() {
    return (
      <Section>
        <Header>
          <Video id="musikmenschen-video" autoPlay loop muted playsInline>
            <source src={withPrefix('MGB-Maedchenstaerken-HeaderV1.mp4')} />
          </Video>
          <PageTitle>MÄDCHENSTÄRKEN</PageTitle>
        </Header>
        <Content>
          <SubheadMedium>Der Übergang von der Grundschule</SubheadMedium>
          <PSmallFullMedium>
            Der Start an einer neuen Schule ist für die Kinder immer ein großer
            Schritt, eben sind sie noch die großen 4-Klässlerinnen und jetzt
            wieder die Kleinen, die Neuen. Um diesem Übergang zu erleichtern und
            pädagogisch zu begleiten, haben wir in unserem Schulprogramm einige
            Eckpunkte verankert:
            <br />
            <br />• 2 Kolleginnen und/oder Kollegen bilden ein
            Klassenleitungsteam, damit die Mädchen in möglichst vielen Stunden
            ihre Ansprechpartner haben.
            <br />• Alle Lehrerinnen und Lehrer arbeiten in enger Absprache nach
            einem gemeinsamen pädagogischen Konzept und verbindlichen
            Lernkompetenzen-Curriculum.
            <br />• Am Kennenlern-Nachmmitag schon vor den Ferien lernen die
            Mädchen ihr Klassenleitungsteam und die neuen Mitschülerinnen
            kennen.
            <br />• Die neuen 5er bekommen im Patensystem je eine Patin aus
            einer 7. Klasse an die Seite, die ihnen beim Kennenlernen der Schule
            hilft.
            <br />• Eine feste Förderstunde in Deutsch in Klasse 5 gleicht
            Unterschiede in der Schwerpunktsetzung der Grundschulen an.
            <br />• Der individuelle Förderunterricht bis zum Ende der
            Mittelstufe stützt die persönliche Entwicklung der Mädchen, fördert
            Stärken und gleicht Schwächen an.
            <br />• Wandertage, Projektwoche, Unterrichtsgänge, Klassenfeiern u.
            a. m. führen zu einem raschen Zusammenwachsen der neuen
            Klassengemeinschaft.
            <br />• Das Doppelstundenmodell bringt eine Entlastung des
            Schultages, mehr Ruhe und eine leichtere Schultasche.
            <br />
            <br />
          </PSmallFullMedium>
          <SubheadMedium>
            Klassenarbeiten und Methodenkonzept der Sek I
          </SubheadMedium>
          <PSmallFullMedium>
            Um ein nachhaltiges und systematisches Lernen zu fördern hat sich
            das Kollegium am MGB auf folgende Absprachen für die Klassenarbeiten
            in der Sek I geeinigt:
            <br />
            <br />- jede Klassenarbeit enthält eine Wiederholungsaufgabe aus
            vorangegangenen Lektionen
            <br />
            <br />- in jeder Klassenarbeit werden Punkte für Ordnung und
            Heftführung vergeben
            <br />
            <br />- die Schülerinnen/ Eltern erhalten mit jeder Klassenarbeit
            eine Rückmeldung zur sonstigen Mitarbeit im Unterricht, eine Reihe
            von Methoden und Kompetenzen werden in festgelegten Fächern eingeübt
            und in verschiedenen Jahrgangsstufen wiederholt und vertieft.
            <br />
            <br />
          </PSmallFullMedium>

          <SubheadMedium>LERNCOACHING</SubheadMedium>
          <PSmallFullMedium>
            Tschüss Lernfrust! Bye bye Schulstress! Ciao Prüfungsangst! Au
            revoir Aufschieberitis! Du packst's! Unser{' '}
            <strong>LERNCOACHING</strong> hilft Dir bei:
            <br />• der Überwindung von Lernschwierigkeiten und Prüfungsängsten,
            <br />• der Verbesserung Deiner Lernprozesse und Selbstorganisation,
            <br />• der Entwicklung von Lernstrategien,
            <br />• dem Beseitigen von Lernblockaden,
            <br />• dem Finden neuer Motivation.
            <br />
            Was ist Lerncoaching? Es handelt sich um eine spezifische
            ressourcenorientierte Art der Lernberatung, die in mehreren
            Einzelsitzungen mit einem Lerncoach oder -berater stattfindet – für
            den Fall, dass es fachunabhängig mit dem Lernen einmal nicht so
            klappen will. Das MGB verfügt über zertifizierte Lerncoaches nach
            SkiL® und dem ZRM. Wir zaubern nicht, beraten und unterstützen aber
            neutral bei individuellen Lernprozessen, vertraulich und
            ergebnisoffen, suchen gemeinsam nach Lösungen und Auswegen. Für
            Termine sprichst du am besten deine Klassenlehrer an.
            <br />
            <br />
          </PSmallFullMedium>

          <SubheadMedium>Die gymnasiale Oberstufe am MGB</SubheadMedium>
          <PSmallFullMedium>
            Die Einführungsphase bereitet inhaltlich und methodisch auf die
            Arbeitsweisen und Inhalte der Qualifikationsphase vor.
            <br />
            <br />
            <strong>Angebotene Fächer in der Einführungsphase</strong>
            <br />• Deutsch, Englisch, fortgeführte Fremdsprachen: Französisch,
            Latein, Russisch; neueinsetzende Fremdsprache: Französisch
            <br />• Kunst, Musik
            <br />• Geschichte, Sozialwissenschaften, Erdkunde, Philosophie,
            Pädagogik
            <br />• Biologie, Chemie, Physik, Informatik, Mathematik
            <br />• Religion, Sport
            <br />
            <br />
            In den beiden Wochen vor den Herbstferien befinden sich die
            Schülerinnen im Betriebspraktikum. Die Berufsorientierung wird in
            der Q1 durch Berufsorientierungstage ergänzt.
            <br />
            <br />
            <strong>Kursangebot in der Q1/Q2</strong>
            <br />
            Als Leistungskurse bieten wir immer die folgende Fächer an: Deutsch,
            Englisch, Erdkunde, Sozialwissenschaften, Biologie, Chemie,
            Mathematik und Sport. Bei genügend Interesse kommen auch
            Leistungskurse in den Fächern Französisch, Pädagogik und Kunst
            zustande. Die Leistungskurse finden zum Teil in Kooperation mit dem
            Gymnasium Borbeck statt.
            <br />
            <br />
            Das Grundkursangebot wird durch Literatur sowie 2-3 Projektkurse
            ergänzt; Latein wird in der Qualifikationsphase nicht mehr
            angeboten, Russisch nur bei ausreichendem Interesse.
            <br />
            <br />
          </PSmallFullMedium>
        </Content>
      </Section>
    )
  }
}
