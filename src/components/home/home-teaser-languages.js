import React, { PureComponent } from 'react'
import styled from 'styled-components'

import bg from './../teaser-languages.png'
import { LinkButton } from '../button'
import { rem, mq } from './../util'
import { PFullDark } from '../typo'

const Section = styled.section`
  position: relative;
  margin-top: -5%;
  background: white;
`
const Header = styled.div`
  position: relative;
  background: white url(${bg}) no-repeat;
  background-size: cover;
  padding-top: 14%;
  padding-bottom: 14%;
  display: flex;
  align-items: center;
  ${mq.greaterThan('medium')`
		display: block;
		//&:before {
		//	display: block;
		//		content: ' ';
		//	width: 100%;
		//		padding-top: 43.5%;
		//	}

	`};
`
const Headline = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  color: white;
  font-size: ${rem(38)}rem;
  font-weight: 700;

  ${mq.greaterThan('small')`
		font-size: ${rem(78)}rem;
	`};
  ${mq.greaterThan('large')`
		font-size: ${rem(128)}rem;
		left: 8%;
	`};
`
const Teaser = styled.div`
  position: relative;

  p.actions {
    padding-left: 5%;
    margin-top: 4em;
    margin-bottom: 4em;

    ${mq.greaterThan('large')`
    padding-left: 8%;

	`};
  }
`

const Content = styled.div`
  position: absolute;
`

export default class HomeTeaserLanguages extends PureComponent {
  render() {
    return (
      <Section>
        <Header>
          <Headline>Europaschule, Sprachen und Fahrten</Headline>
        </Header>
        <Teaser>
          <PFullDark>
            Seit 2007 ist das MGB zertifizierte Europaschule des Landes NRW und
            Mitglied im Europaschulverein Essen. Dies beinhaltet ein erweitertes
            Fremdsprachenangebot, die Teilnahme an Wettbewerben und Austauschen
            sowie Auslandspraktika und die Möglichkeit zur Erlangung des
            Sprachzertifikats DELF sowie des Exzellenzlabels „CertiLingua“.
          </PFullDark>
          <PFullDark>
            Unsere Fahrten führen uns nach England, Frankreich, Griechenland,
            Russland und die USA.
          </PFullDark>
          <p className="actions">
            <LinkButton to="/sprachen">Mehr erfahren</LinkButton>
          </p>
        </Teaser>
      </Section>
    )
  }
}
