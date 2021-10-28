import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { withPrefix } from 'gatsby-link'
import moment from 'moment'
import { extendMoment } from 'moment-range'

import Button, { LinkButton } from '../button'
import {
  PageTitle,
  P,
  PSmallFullMedium,
  SubheadMedium,
  PSmallMedium,
} from '../typo'
import { Video } from '../VideoGrid'
import { mq, rem } from '../util'
import Event from './event'

import { kultur as kulturKollegen } from './../data'
import prev from './prev.png'
import next from './next.png'

const Section = styled.section`
  position: relative;
  background: white;
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
  height: 160px;
  background-image: linear-gradient(-90deg, #8de9ff 0%, #55a6df 100%);

  ${mq.greaterThan('small')`
		height: 420px;
	`};
`
const Content = styled.div`
  padding-top: 18px;
  padding-bottom: 147px;
`

export const Calender = styled.div`
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;

  ${mq.greaterThan('medium')`
		width: 90%;
		padding-left: 20px;
		padding-right: 20px;
	`};
  ${mq.greaterThan('large')`
		width: 75%;
	`};
`

const Months = styled.ul`
  display: none;
  list-style: none;
  padding: 0;
  text-align: center;
  ${mq.greaterThan('small')`
		display: block;
	`};
`
const Month = styled.li`
  ${P};
  display: inline-block;
  margin-right: 24px;
  &:last-child {
    margin-right: 0;
  }

  ${({ expired }) =>
    expired
      ? `
    a {
      color: #ccc;
    }
  `
      : `
    a {
      color: #666;
    }
  `};
  ${({ selected }) => (selected ? `font-weight: bold;` : ``)};
`
const MonthHeader = styled.div`
  display: block;
`

const Events = styled.ul`
  padding: 0;
`

const TableHeader = styled.div`
  display: flex;
  padding-top: 40px;
`
const CurrentMonth = styled.p`
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0;
  align-items: center;
  ${mq.greaterThan('tablet')`
		font-size: 50px;
	`};
`
const LinkWrapper = styled.div`
  flex: 1;
  flex-basis: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    text-decoration: none;
    color: #808080;
    i {
      vertical-align: middle;
    }
    span {
      display: none;
    }
    ${mq.greaterThan('tablet')`
			span {
				display: inline;
			}
		`};
    ${mq.greaterThan('large')`
			font-size: 22px;
		`};
  }
`

moment.locale('de')
const mom = extendMoment(moment)

export default class Kalender extends PureComponent {
  getMonthIndex = () => {
    const months = this.allMonths(this.props.data)
    const current = mom().locale('de')
    current.locale('de')
    const i = months.findIndex(
      (e) =>
        this.getEnMonth(new Date(e.node.startDate)) == current.format('MMMM')
    )
    return i
  }

  goto = (i, e) => {
    e.preventDefault()
    this.setState({ current: i })
  }

  nextMonth = (e) => {
    e.preventDefault()
    this.setState({
      current:
        this.state.current == this.allMonths().length - 1
          ? 0
          : this.state.current + 1,
    })
  }
  previousMonth = (e) => {
    e.preventDefault()
    this.setState({
      current:
        this.state.current == 0
          ? this.allMonths().length - 1
          : this.state.current - 1,
    })
  }

  getEnMonth = (d) => d.toLocaleString('en-GB', { month: 'long' })

  getMonth = (d) => d.toLocaleString('de-de', { month: 'long' })

  getDay = (d) => new Date(d).toLocaleString('de-de', { day: '2-digit' })

  getKey = (d, t) => `${d.replace(/\s/g, '')}-${t.replace(/\s/g, '')}`

  formatDate = (s, e) => {
    const start = new Date(s).toLocaleDateString('de-de')
    const end = e ? ` - ${new Date(e).toLocaleDateString('de-de')}` : ''
    return `${start}${end}`
  }

  formatTime = (s, e) => {
    // const sd = new Date(s)
    const sf = s.split('T')[1].split('+')[0].substring().substr(0, 5)
    const ef = e.split('T')[1].split('+')[0].substring().substr(0, 5)
    // const ed = e ? new Date(e) : null
    const start =
      sf !== '00:00'
        ? // ? sd.toLocaleTimeString('de-de', { hour: '2-digit', minute: '2-digit' })
          s.split('T')[1].split('+')[0].substring().substr(0, 5)
        : ''
    const end =
      ef !== '00:00'
        ? // ? ed.toLocaleTimeString('de-de', { hour: '2-digit', minute: '2-digit' })
          e.split('T')[1].split('+')[0].substring().substr(0, 5)
        : ''
    return start != '' ? `Zeit: ${start} ${end != '' ? ` - ${end}` : ''}` : ''
  }

  timeString = (d) => {
    const dd = [d.getHours(), d.getMinutes()].map((a) => (a < 10 ? '0' + a : a))
    return dd.join(':')
  }

  allMonths = () => {
    const months = {}
    return this.props.data.filter((d) => {
      const month = this.getMonth(new Date(d.node.startDate))
      return months.hasOwnProperty(month) ? false : (months[month] = month)
    })
  }

  state = {
    current: this.getMonthIndex(),
    months: this.allMonths(this.props.data),
  }

  render() {
    const { data } = this.props
    const months = this.allMonths()

    const currentMonthDate =
      months[this.state.current] &&
      mom(months[this.state.current].node.startDate)
    const lastMonth = moment().subtract('month', 1)
    const currentRange = currentMonthDate && currentMonthDate.range('month')
    return (
      <Section>
        <Header>
          <PageTitle>Kalender</PageTitle>
        </Header>
        <Content>
          <SubheadMedium>VERANSTALTUNGEN UND TERMINE</SubheadMedium>
          <PSmallFullMedium>
            Ob nun Prüfungen anstehen, eine Reise oder eine Schulveranstaltung,
            der alle entgegenfiebern – hier werden sie fündig. <br />
            <br />
            Alle Termine stehen unter dem Vorbehalt, dass sich die Corona-Lage
            weiterhin positiv entwickelt.
          </PSmallFullMedium>

          <Calender>
            <Months>
              {months.map((m, i) => (
                <Month
                  key={m.node.startDate}
                  expired={lastMonth > new Date(m.node.startDate)}
                  selected={this.state.current == i}
                >
                  <a href="#" onClick={(e) => this.goto(i, e)}>
                    {this.getMonth(new Date(m.node.startDate))}
                  </a>
                </Month>
              ))}
            </Months>

            <TableHeader>
              <LinkWrapper>
                <a href="#" onClick={this.previousMonth}>
                  <i>
                    <img src={prev} alt="VORHERIGER MONAT" />
                  </i>{' '}
                  <span>VORHERIGER MONAT</span>
                </a>
              </LinkWrapper>
              <CurrentMonth>
                {currentMonthDate &&
                  currentMonthDate
                    .toDate()
                    .toLocaleString('de-de', { month: 'long' })}{' '}
                {currentMonthDate && currentMonthDate.format('YYYY')}
              </CurrentMonth>
              <LinkWrapper>
                <a href="#" onClick={this.nextMonth}>
                  <span>NÄCHSTER MONAT</span>{' '}
                  <i>
                    <img src={next} alt="NÄCHSTER MONAT" />
                  </i>
                </a>
              </LinkWrapper>
            </TableHeader>

            <Events>
              {data.map((d) => {
                const date = mom(d.node.startDate)
                return currentRange && date.within(currentRange) ? (
                  <Event
                    key={this.getKey(d.node.startDate, d.node.title)}
                    day={this.getDay(d.node.startDate)}
                    date={this.formatDate(d.node.startDate, d.node.endDate)}
                    time={this.formatTime(d.node.startDate, d.node.endDate)}
                    title={d.node.title}
                    description={
                      d.node.description +
                      '<br/>' +
                      this.formatTime(d.node.startDate, d.node.endDate)
                    }
                  />
                ) : null
              })}
            </Events>
          </Calender>
        </Content>
      </Section>
    )
  }
}
