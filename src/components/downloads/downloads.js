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
  background-image: linear-gradient(
    -90deg,
    #fad961 0%,
    #ef9649 42%,
    #da121a 100%
  );
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

export default class Downloads extends PureComponent {
  render() {
    const { downloads } = this.props
    return (
      <Section>
        <Header>
          <span>Downloads</span>
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
