import React, { Component } from 'react'
import styled from 'styled-components'
import { mq, rem } from '../util'
import { P } from '../typo'

const Wrapper = styled.li`
  background: #73a9c8;
  margin-bottom: 10px;
  color: #fff;
  display: flex;
  padding-right: 20px;
  padding-bottom: 20px;
`

const Day = styled.div`
  font-weight: 700;
  text-align: center;
  border: 2px solid white;
  margin: 10px 0px 10px 12px;
  font-size: 33px;
  width: 48px;
  height: 48px;
  line-height: 46px;

  ${mq.greaterThan('small')`
		display: block;
		border: 4px solid white;
		margin: 10px 0px 10px 42px;
		font-size: 63px;
		width: 88px;
		height: 88px;
		line-height: 76px;
	`};
  ${mq.greaterThan('large')`
		font-size: 93px;
		width: 128px;
		height: 128px;
		line-height: 113px;
		margin: 10px 40px 10px 72px;
	`};
`
const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  ${mq.greaterThan('small')`
		margin-left: 20px;
	`};
`
const EventDate = styled.div`
  margin-top: 12px;
  margin-bottom: 4px;

  font-size: 14px;
  ${mq.greaterThan('small')`
		font-size: 24px;

	`};
  ${mq.greaterThan('large')`
		font-size: 31px;
		margin-bottom: 12px;
	`};
`
const Title = styled.div`
  font-weight: 600;

  font-size: 14px;
  ${mq.greaterThan('xxs')`
		font-size: 16px;
	`};
  ${mq.greaterThan('small')`
		font-size: 24px;
		margin-bottom: 7px;
	`};
  ${mq.greaterThan('large')`
		font-size: 31px;
	`};
`
const Description = styled.div`
  margin-bottom: 4px;
  p {
    margin: 0.4em 0;
  }

  font-size: 14px;
  ${mq.greaterThan('xxs')`
		font-size: 16px;
	`};
  ${mq.greaterThan('small')`
		font-size: 20px;
		p {
			margin: 0.4em 0;
		}

	`};
  ${mq.greaterThan('large')`
		margin-bottom: 12px;
		font-size: 26px;
	`};
`

export default class Event extends Component {
  render() {
    const { day, date, title, description } = this.props
    return (
      <Wrapper>
        <Day>{day}</Day>
        <Details>
          <EventDate>{date}</EventDate>
          <Title>{title}</Title>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
        </Details>
      </Wrapper>
    )
  }
}
