import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { withPrefix } from 'gatsby-link'
import moment from 'moment'
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

moment.locale('de')

export default class Kalender extends PureComponent {
  state = {
    current: 0,
  }

  goto = (i, e) => {
    e.preventDefault()
    this.setState({ current: i })
  }

  getMonth = d => d.toLocaleString('de-de', { month: 'long' })

  getDay = d => new Date(d).toLocaleString('de-de', { day: '2-digit' })

  getKey = (d, t) => `${d.replace(/\s/g, '')}-${t.replace(/\s/g, '')}`

  formatDate = (s, e) => {
    const start = new Date(s).toLocaleDateString('de-de')
    const end = e ? ` - ${new Date(e).toLocaleDateString('de-de')}` : ''
    return `${start}${end}`
  }

  render() {
    const { data } = this.props
    const now = new Date()
    return (
      <Section>
        <Header>
          <span>Kalender</span>
        </Header>
        <Content>
          <SubheadMedium>VERANSTALTUNGEN UND TERMINE</SubheadMedium>
          <PSmallFullMedium>
            Ob nun Prüfungen anstehen, eine Reise oder eine Schulveranstaltung
            der alle entgegenfiebern – hier werden sie fündig.
          </PSmallFullMedium>

          <Calender>
            <Months>
              {data.map((m, i) => (
                <Month expired={now > new Date(m.node.startDate)}>
                  <a href="#" onClick={e => this.goto(i, e)}>
                    {this.getMonth(new Date(m.node.startDate))}
                  </a>
                </Month>
              ))}
            </Months>

            <TableHeader>
              <LinkWrapper>
                <a href="#">&lt; VORHERIGER MONAT</a>
              </LinkWrapper>
              <CurrentMonth>MAI 2018</CurrentMonth>
              <LinkWrapper>
                <a href="#">NÄCHSTER MONAT &gt;</a>
              </LinkWrapper>
            </TableHeader>

            <Events>
              {data.map(d => {
                return (
                  <Event
                    key={this.getKey(d.node.startDate, d.node.title)}
                    day={this.getDay(d.node.startDate)}
                    date={this.formatDate(d.node.startDate, d.node.endDate)}
                    title={d.node.title}
                    description={d.node.description}
                  />
                )
              })}
            </Events>
          </Calender>
        </Content>
      </Section>
    )
  }
}

export const query = graphql`
  query DatesQuery {
    allDatoCmsCalendar {
      edges {
        node {
          startDate
          endDate
          title
          description
        }
      }
    }
  }
`
