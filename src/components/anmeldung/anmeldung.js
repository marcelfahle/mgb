import React, {PureComponent} from 'react'
import styled from 'styled-components'
import {withPrefix} from 'gatsby-link'
import moment from 'moment'
import {extendMoment} from 'moment-range'

import Event from './../kalender/event'
import {Calender} from './../kalender/kalender'
import Button, {LinkButton} from '../button'
import {
	PageTitle,
	TypoDiv,
	PSmallFullMedium,
	SubheadMedium,
	PSmallMedium,
} from '../typo'
import {Video} from '../VideoGrid'
import {mq, rem} from '../util'

import menschenHeadline from './../menschen.svg'
import PersonGrid from '../person-grid'

import {kultur as kulturKollegen} from './../data'

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
  }
`
const Content = styled.div`
  padding-top: 18px;
  padding-bottom: 147px;
`

const Events = styled.ul`
  padding: 0;
`

export default class Anmeldung extends PureComponent {
	getMonth = d => d.toLocaleString('de-de', {month: 'long'})

	getDay = d => new Date(d).toLocaleString('de-de', {day: '2-digit'})

	getKey = (d, t) => `${d.replace(/\s/g, '')}-${t.replace(/\s/g, '')}`

	formatDate = (s, e) => {
		const start = new Date(s).toLocaleDateString('de-de')
		const end = e ? ` - ${new Date(e).toLocaleDateString('de-de')}` : ''
		return `${start}${end}`
	}

	formatTime = (s, e) => {
		const sd = new Date(s)
		const ed = e ? new Date(e) : null
		const start =
			sd.getHours() != 1 && sd.getHours() != 0
				? sd.toLocaleTimeString('de-de', {hour: '2-digit', minute: '2-digit'})
				: ''
		const end =
			e && start != '' && ed.getHours() != 1 && sd.getHours() != 0
				? ed.toLocaleTimeString('de-de', {hour: '2-digit', minute: '2-digit'})
				: ''
		return start != '' ? `Zeit: ${start} ${end != '' ? ` - ${end}` : ''}` : ''
	}

	render() {
		const {data} = this.props
		return (
			<Section>
				<Header>
					<Video id="musikmenschen-video" autoPlay loop muted playsInline>
						<source src={withPrefix('MGB-Maedchenstaerken-HeaderV1.mp4')} />
					</Video>
					<PageTitle>Anmeldung</PageTitle>
				</Header>
				<Content>
					<SubheadMedium>
						Zu den Anmeldungetagen freuen wir uns, Sie und Ihre Tochter bei uns
						zu begrüßen.
          </SubheadMedium>
					<PSmallFullMedium>
						<strong>
							Informationsveranstaltungen für Grundschuleltern und
														              Grundschülerinnen Schuljahr 2020/21
														   </PSmallFullMedium>
					<Calender>
						  <Events>
							 {data.map(d => {
								 return (
									 <Event
										 key={this.getKey(d.node.startDate, d.node.title)}
											ay={this.getDay(d.node.startDate)}
											date={this.formatDate(d.node.startDate, d.node.endDate)}
											time={this.formatTime(d.node.startDate, d.node.endDate)}
											title={d.node.title}
											description={
											  d.node.descriptionNode.childMarkdownRemark.html +
												<br/>' +
												this.formatTime(d.node.startDate, d.node.endDate)
																						
																						alender>
											         <SubheadMedium>Zur Anmeldung benötigen wir:</SubheadMedium>
																						  <ul>
												 <li>
													 Beide Eltern oder die Erziehungsberechtigten mit Ihrer Tochter
														i>
														              <ul>
							  <li>
															 Bei abweichender Regelung der Erziehungsberechtigung
																Scheidung, Pflege o.ä.) bringen Sie bitte einen
																entsprechenden Nachweis in Kopie mit. (z.B. die
																Scheidungsurkunde mit der Sorgerechtsvereinbarung).
																li>
																     </ul>
							<li>
															  Die Anmeldebögen, die Sie von der Grundschule erhalten haben
																Meist sind dies 3 Ausfertigungen)
																li>
																      <li>Eine Kopie vom Zeugnis des 1. Halbjahres der 4. Klasse</li>
							<li>Eine Kopie der Geburtsurkunde Ihrer Tochter</li>
																<li>
																  Überlegen Sie bitte vorab mit Ihrer Tochter, ob sie die
																	usikklasse besuchen möchte und welchen Religionsunterricht
																	(katholische -, evangelische Religion oder praktische
																	Philosophie) sie besuchen soll.
																	li>
																	    </ul>
						<br />
																<br />
																Über die Aufnahme Ihrer Tochter an unserer Schule entscheidet nicht
            die Reihenfolge der Anmeldung, Sie können ohne Sorge einen für Sie
            passenden Termin an einem der drei Tage vereinbaren.
            <br />
            Falls Sie noch Fragen zum Anmeldeverfahren haben oder einen
            individuellen Gesprächstermin zur Beratung wünschen, sprechen Sie
            uns bitte über das Sekretariat bei Frau Busch (Tel: 0201/88480710)
            an. Wir beraten Sie gerne!
          </TypoDiv>
        </Content>
				Section>
						  
