import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Anmeldung from '../components/anmeldung/anmeldung'

import Layout from '../layouts/'

const IndexPage = ({ data }) => (
  <Layout>
    <Anmeldung data={data.allDatoCmsSignupDate.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AnmeldungQuery {
    allDatoCmsSignupDate(sort: { fields: [startDate], order: ASC }) {
      edges {
        node {
          startDate
          endDate
          title
          description
          descriptionNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
