import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Kalender from '../components/kalender/kalender'

import Layout from '../layouts/'

const IndexPage = ({ data }) => (
  <Layout>
    <Kalender data={data.allDatoCmsCalendar.edges} key="kalender" />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query KalenderQuery {
    allDatoCmsCalendar(sort: { fields: [startDate], order: ASC }) {
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
