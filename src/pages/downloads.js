import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Downloads from '../components/downloads/downloads'

import Layout from '../layouts/'

const DownloadsPage = ({ data }) => (
  <Layout>
    <Downloads downloads={data.allDatoCmsDownloadsGroup.edges} />
  </Layout>
)

export default DownloadsPage

export const query = graphql`
  query DownloadsQuery {
    allDatoCmsDownloadsGroup {
      edges {
        node {
          id
          group
          download {
            filename
            file {
              id
              url
            }
          }
        }
      }
    }
  }
`
