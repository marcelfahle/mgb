import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { withPrefix } from 'gatsby-link'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

import Button, { LinkButton } from '../button'
import { P, PSmallFullMedium, SubheadMedium, PSmallMedium } from '../typo'
import { Video } from '../VideoGrid'
import { mq, rem } from '../util'
import Event from './event'

import { kultur as kulturKollegen } from './../data'

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
  height: 420px;
  background-image: linear-gradient(-90deg, #8de9ff 0%, #55a6df 100%);
  span {
    position: absolute;
    bottom: -26px;
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

export const Calender = styled.div`
  width: 90%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  ${mq.greaterThan('large')`
		width: 75%;
	`};
`

const Months = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
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
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0;
  align-items: center;
`
const LinkWrapper = styled.div`
  flex: 1;
  flex-basis: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 22px;
    text-transform: uppercase;
    text-decoration: none;
    color: #808080;
  }
`

Moment.locale('de-de')
const moment = extendMoment(Moment)

export default class Kalender extends PureComponent {
  getMonthIndex = () => {
    const months = this.allMonths(this.props.data)
    const current = moment()
    const i = months.findIndex(
      e => this.getMonth(new Date(e.node.startDate)) == current.format('MMMM')
    )
    return i
  }

  goto = (i, e) => {
    e.preventDefault()
    this.setState({ current: i })
  }

  nextMonth = e => {
    e.preventDefault()
    this.setState({
      current:
        this.state.current == this.allMonths().length - 1
          ? 0
          : this.state.current + 1,
    })
  }
  previousMonth = e => {
    e.preventDefault()
    this.setState({
      current:
        this.state.current == 0
          ? this.allMonths().length - 1
          : this.state.current - 1,
    })
  }

  getMonth = d => d.toLocaleString('de-de', { month: 'long' })

  getDay = d => new Date(d).toLocaleString('de-de', { day: '2-digit' })

  getKey = (d, t) => `${d.replace(/\s/g, '')}-${t.replace(/\s/g, '')}`

  formatDate = (s, e) => {
    const start = new Date(s).toLocaleDateString('de-de')
    const end = e ? ` - ${new Date(e).toLocaleDateString('de-de')}` : ''
    return `${start}${end}`
  }

  formatTime = (s, e) => {
    console.log('formattime', s, e)
    const sd = new Date(s)
    const ed = e ? new Date(e) : null
    const start =
      sd.getHours() != 1 && sd.getHours() != 0
        ? sd.toLocaleTimeString('de-de', { hour: '2-digit', minute: '2-digit' })
        : ''
    const end =
      e && start != '' && ed.getHours() != 1 && sd.getHours() != 0
        ? ed.toLocaleTimeString('de-de', { hour: '2-digit', minute: '2-digit' })
        : ''
    return start != '' ? `Zeit: ${start} ${end != '' ? ` - ${end}` : ''}` : ''
  }

  allMonths = () => {
    const months = {}
    return this.props.data.filter(d => {
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
      moment(months[this.state.current].node.startDate)
    const lastMonth = Moment().subtract('month', 1)
    const currentRange = currentMonthDate && currentMonthDate.range('month')
    return (
      <Section>
        <Header>
          <span>Kalender</span>
        </Header>
        <Content>
          <SubheadMedium>VERANSTALTUNGEN UND TERMINE</SubheadMedium>
          <PSmallFullMedium>
            Ob nun Prüfungen anstehen, eine Reise oder eine Schulveranstaltung,
            der alle entgegenfiebern – hier werden sie fündig.
          </PSmallFullMedium>

          <Calender>
            <Months>
              {months.map((m, i) => (
                <Month
                  key={m.node.startDate}
                  expired={lastMonth > new Date(m.node.startDate)}
                  selected={this.state.current == i}
                >
                  <a href="#" onClick={e => this.goto(i, e)}>
                    {this.getMonth(new Date(m.node.startDate))}
                  </a>
                </Month>
              ))}
            </Months>

            <TableHeader>
              <LinkWrapper>
                <a href="#" onClick={this.previousMonth}>
                  &lt; VORHERIGER MONAT
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
                  NÄCHSTER MONAT &gt;
                </a>
              </LinkWrapper>
            </TableHeader>

            <Events>
              {data.map(d => {
                const date = moment(d.node.startDate)
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
