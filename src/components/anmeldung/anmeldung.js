import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

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
  &:before {
    display: block;
    content: ' ';
    width: 1px;
    padding-top: 50%;
  }
  span {
    position: absolute;
    bottom: -24px;
    left: -18px;
    font-size: 11rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`
const Content = styled.div`
  padding-top: 18px;
  padding-bottom: 147px;
`

export default class Anmeldung extends PureComponent {
  render() {
    return (
      <Section>
        <Header>
          <Video id="musikmenschen-video" autoPlay loop muted playsInline>
            <source src={withPrefix('MGB-Maedchenstaerken-HeaderV1.mp4')} />
          </Video>
          <span>Anmeldung</span>
        </Header>
        <Content>
          <SubheadMedium>
            Zu den Anmeldungetagen freuen wir uns, Sie und Ihre Tochter bei uns
            zu begrüßen.
          </SubheadMedium>
          <SubheadMedium>Termine Im Schuljahr 2018/19</SubheadMedium>
          <PSmallFullMedium>
            Donnerstag, 07.03.2019 - Samstag, 09.03.2019, jeweils 9.00 - 12.00
            Uhr
            <br />
            <br />
            Sollte Sie vorher eine Beratung zur möglichen Aufnahme Ihrer Tochter
            benötigen (z.B. mit eingeschränkter Empfehlung der Grundschule), so
            stehen Ihnen unsere Schulleiterin Frau Jutta Reimann und unsere
            Erprobungsstufenkoordinatorin Frau Antje Bock gerne zur Verfügung.
            Gemeinsam mit Ihrer Tochter sprechen wir über die Möglichkeiten und
            Förderung an unserer Schule. Melden Sie sich hierzu bitte bei
            unserem Sekretariat bei Fr. Busch. Sie leitet Ihre Anfrage dann
            weiter. (0201 88480710)
          </PSmallFullMedium>
          <SubheadMedium>Zur Anmeldung benötigen wir:</SubheadMedium>
          <PSmallFullMedium>
            <ul>
              <li>
                Beide Eltern oder die Erziehungsberechtigten mit Ihrer Tochter
              </li>

              <ul>
                <li>
                  Bei abweichender Regelung der Erziehungsberechtigung
                  (Scheidung, Pflege o.ä.) bringen Sie bitte einen
                  entsprechenden Nachweis in Kopie mit. (z.B. die
                  Scheidungsurkunde mit der Sorgerechtsvereinbarung).
                </li>
              </ul>
              <li>
                Die Anmeldebögen, die Sie von der Grundschule erhalten haben
                (Meist sind dies 3 Ausfertigungen)
              </li>
              <li>Eine Kopie vom Zeugnis des 1. Halbjahres der 4. Klasse</li>
              <li>Eine Kopie der Geburtsurkunde Ihrer Tochter</li>
              <li>
                Überlegen Sie bitte vorab mit Ihrer Tochter, ob sie die
                Musikklasse besuchen möchte und welchen Religionsunterricht
                (katholische -, evangelische Religion oder praktische
                Philosophie) sie besuchen soll.
              </li>
            </ul>
            <br />
            <br />
            Die genannten Unterlagen müssen vollständig sein, sonst kann Ihre
            Tochter nicht aufgenommen werden.
          </PSmallFullMedium>
        </Content>
      </Section>
    )
  }
}
