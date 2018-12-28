import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

import Button, { LinkButton } from '../button'
import {
  PageTitle,
  PSmallFullMedium,
  SubheadMedium,
  PSmallMedium,
} from '../typo'
import { Video } from '../VideoGrid'
import { mq, rem } from '../util'

import menschenHeadline from './../menschen.svg'
import PersonGrid from '../person-grid'

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
  height: 160px;
  background-image: linear-gradient(
    -90deg,
    #fad961 0%,
    #ef9649 42%,
    #da121a 100%
  );
  ${mq.greaterThan('small')`
		height: 420px;
	`};
`
const Content = styled.div`
  padding-top: 18px;
  padding-bottom: 147px;
`

export default class Downloads extends PureComponent {
  render() {
    const { downloads } = this.props
    return (
      <Section>
        <Header>
          <PageTitle>Downloads</PageTitle>
        </Header>
        <Content>
          <SubheadMedium>
            Alle wichtigen Informationen als download
          </SubheadMedium>
          {downloads.map(dl => {
            const { id, group, download } = dl.node
            return (
              <PSmallFullMedium key={id}>
                {group}
                <br />
                {download &&
                  download.map((d, i) => (
                    <React.Fragment key={d.file ? d.file.id : `f-${i}`}>
                      <a target="_blank" href={d.file ? d.file.url : null}>
                        {d.filename}
                      </a>
                      <br />
                    </React.Fragment>
                  ))}
              </PSmallFullMedium>
            )
          })}
        </Content>
      </Section>
    )
  }
}
