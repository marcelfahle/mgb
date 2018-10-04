import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { SubheadFullDark, PFullDark } from '../typo'

const Section = styled.section`
  position: relative;
  background: white;
  padding-top: 1px;
  -webkit-clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 92%);
  clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 92%);
  z-index: 60;
  margin-top: -9%;
  margin-right: -1px;
`
const Content = styled.div`
  padding-top: 7vw;
  padding-bottom: 67px;
  text-align: center;
  h3 {
    margin-top: 0;
    margin-bottom: 40px;
  }
  p {
  }
`

export default class HomeGanztag extends PureComponent {
  render() {
    return (
      <Section>
        <Content>
          <SubheadFullDark>Ganztag / Mensa</SubheadFullDark>
          <PFullDark>
            Im offenen Ganztag können die Schülerinnen von 13:30 bis 14:30 in
            der hauseigenen Mensa zu Mittag essen.
          </PFullDark>
          <PFullDark>
            Wir bieten auch eine 45minütige Hausaufgabenbetreuung von 14:15 –
            15:00 an sowie im Anschluss eine Reihe von wechselnden
            Arbeitsgemeinschaften (z.B. Kreativ-AG/ Nähen, Töpfern und
            Sportangebote).
          </PFullDark>
          <PFullDark>
            Das Mädchengymnasium Essen Borbeck im Rahmen des offenen Ganztags
            ein umfangreiches sowie abwechslungsreiches Betreuungsangebot nach
            dem regulären Vormittagsunterricht an.
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
