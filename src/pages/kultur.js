import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import KulturContent from '../components/kultur/kultur'

import Layout from '../layouts/'

const IndexPage = ({ data }) => (
  <Layout>
    <KulturContent menschen={data.allDatoCmsAllTeacherCopy5.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MenschenKulturQuery {
    allDatoCmsAllTeacherCopy5(sort: { fields: [position], order: ASC }) {
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
