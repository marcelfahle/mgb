import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import MintContent from '../components/mint/mint'

import Layout from '../layouts/'

const IndexPage = ({ data }) => (
  <Layout>
    <MintContent menschen={data.allDatoCmsAllTeacherCopy4.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MenschenMintQuery {
    allDatoCmsAllTeacherCopy4(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          name
          subjects
          photo {
            id
            url
          }
        }
      }
    }
  }
`
