import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import SprachenContent from '../components/sprachen/sprachen'

import Layout from '../layouts/'

const IndexPage = ({ data }) => (
  <Layout>
    <SprachenContent menschen={data.allDatoCmsAllTeacherCopy6.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MenschenSprachenQuery {
    allDatoCmsAllTeacherCopy6(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          name
          subjects
          photo {
            url
          }
        }
      }
    }
  }
`
