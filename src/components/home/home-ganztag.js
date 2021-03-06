import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { SubheadFullDark, PFullDark } from '../typo'
import { FullWidthVideo } from '../FullWidthVideo'
import { mq } from '../util'

const Section = styled.section`
  position: relative;
  background: white;
  padding-top: 1px;

  clip-path: polygon(0 2%, 100% 0, 100% 100%, 0 97%);

  z-index: 60;
  margin-top: -12%;
  margin-right: -1px;
`
const Content = styled.div`
  position: relative;
  z-index: 120;
  padding-top: 50%;
  padding-bottom: 12%;
  text-align: center;
  > div {
    top: -5%;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 40px;
  }
`

export default class HomeGanztag extends PureComponent {
  render() {
    return (
      <Section>
        <Content>
          <FullWidthVideo src="MGB-Schule-Mensa.mp4" />
          <SubheadFullDark>Ganztag / Mensa</SubheadFullDark>
          <PFullDark>
            Im offenen Ganztag können die Schülerinnen von 13:30 bis 14:30 in
            der hauseigenen Mensa zu Mittag essen.
          </PFullDark>
          <PFullDark>
            Wir bieten auch eine 45minütige Hausaufgabenbetreuung von 14:15 –
            15:00 an sowie im Anschluss eine Reihe von wechselnden
            Arbeitsgemeinschaften (z.B. Kreativ-AG/ Nähen, Töpfern und
            Sportangebote).
          </PFullDark>
          <PFullDark>
            Das Mädchengymnasium Essen Borbeck bietet im Rahmen des offenen
            Ganztags ein umfangreiches sowie abwechslungsreiches
            Betreuungsangebot nach dem regulären Vormittagsunterricht an.
          </PFullDark>
          <PFullDark>
            Die Schulleitung, das Kollegium und das Betreuungsteam des Ganztags
            arbeiten gemeinsam an einem vielfältigen Bildungs-und
            Betreuungsangebot, um ihre Kinder im Nachmittagsbereich nachhaltig
            zu fördern.
          </PFullDark>
          <PFullDark>
            Der Leitgedanke „Stark durch Vielfalt“ orientiert sich an einer
            individuellen und transparenten Förderung der Kinder, bei der die
            Mädchen ihre kognitiven, kreativen und sozialen Kompetenzen
            weiterentwickeln. Wir möchten aber auch erreichen, dass sich Ihre
            Töchter in ihrer Schule wohl fühlen und die Geborgenheit des
            Mädchengymnasiums erfahren, so dass sie an ihrem Lernort Wurzeln
            fassen können.
          </PFullDark>
        </Content>
      </Section>
    )
  }
}
