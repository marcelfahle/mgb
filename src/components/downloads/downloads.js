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
    return (
      <Section>
        <Header>
          <span>Downloads</span>
        </Header>
        <Content>
          <SubheadMedium>
            Alle wichtigen Informationen als download
          </SubheadMedium>
          <PSmallFullMedium>
            Berufsberatung
            <br />
            <a href="#">Berufsberatung MGB.pdf</a>
            <br />
            <br />
            Biologie <br />
            <a href="#">Curriculum Biologie Sek I.pdf</a>
            <br />
            <a href="#">Curriculum_Biologie_EF.pdf</a>
            <br />
            <a href="#">Curriculum_Biologie_Q1_Evolution.pdf</a>
            <br />
            <a href="#">Curriculum_Biologie_Q1_Genetik.pdf</a>
            <br />
            <a href="#">Curriculum_Biologie_Q1_Oeko.pdf </a>
            <br />
            <a href="#">Curriculum_biologie_Q2 </a>
            <br />
            <a href="#">Neurophysiologie.pdf</a>
            <br />
            <br />
            Certilingua/ Europaschule
            <br />
            <a href="#">Auslansschuljahr.pdf</a>
            <br />
            <a href="#">Certilingua.pdf</a>
            <br />
            <a href="#">Fahrtenkonzept des MGB.pdf</a>
            <br />
            <br />
            <br />
            Chemie
            <br />
            <a href="#">Curriculum_Chemie_EF.pdf</a>
            <br />
            <a href="#">Curriculum_Chemie_Q_GK.pdf </a>
            <br />
            <a href="#">Curriculum_Chemie_Q_LK.pdf</a>
            <br />
            <br />
            Berufsberatung
            <br />
            <a href="#">Berufsberatung MGB.pdf</a>
            <br />
            <br />
            Biologie <br />
            <a href="#">Curriculum Biologie Sek I.pdf</a>
            <br />
            <a href="#">Curriculum_Biologie_EF.pdf</a>
            <br />
            <a href="#">Curriculum_Biologie_Q1_Evolution.pdf</a>
            <br />
            <a href="#">Curriculum_Biologie_Q1_Genetik.pdf</a>
            <br />
            <a href="#">Curriculum_Biologie_Q1_Oeko.pdf </a>
            <br />
            <a href="#">Curriculum_biologie_Q2 </a>
            <br />
            <a href="#">Neurophysiologie.pdf</a>
            <br />
            <br />
            Certilingua/ Europaschule
            <br />
            <a href="#">Auslansschuljahr.pdf</a>
            <br />
            <a href="#">Certilingua.pdf</a>
            <br />
            <a href="#">Fahrtenkonzept des MGB.pdf</a>
            <br />
            <br />
            <br />
            Chemie
            <br />
            <a href="#">Curriculum_Chemie_EF.pdf</a>
            <br />
            <a href="#">Curriculum_Chemie_Q_GK.pdf </a>
            <br />
            <a href="#">Curriculum_Chemie_Q_LK.pdf</a>
          </PSmallFullMedium>
        </Content>
      </Section>
    )
  }
}
