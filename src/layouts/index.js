import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, injectGlobal, css } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../components/navbar'
import './index.css'
import Signup from '../components/signup'
import Footer from '../components/footer'
import { mq, WrapperPadding } from '../components/util'

import './modal-video.min.css'

const theme = {
  maxWidth: '1980px',
}

injectGlobal`
  html {
    //font-size: 10px;
    box-sizing: border-box;
    font-size: 11px;
    ${mq.greaterThan('medium')`
      font-size: 12px;
    `}
    ${mq.greaterThan('huge')`
    `}
    ${mq.greaterThan('veryhuge')`
			font-size: 16px;
    `}
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background: #323537;
    //min-width: 1024px;
    p {
      line-height: 1.37em;
    }
  }
`

const Outer = styled.div`
  //width: 1366px;
  max-width: 1980px;
  margin-left: auto;
  margin-right: auto;
  ${WrapperPadding};
  position: relative;
  min-width: 960px;
  overflow: hidden;
`

const Wrapper = styled.div`
  margin: 0px auto;
  max-width: ${props => props.theme.maxWidth};
  overflow: hidden;
  section {
    overflow: hidden;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
        />
        <ThemeProvider theme={theme}>
          <Outer>
            <Navbar siteTitle={data.site.siteMetadata.title} />

            <Wrapper>
              {children}

              <Signup />
              <Footer />
            </Wrapper>
          </Outer>
        </ThemeProvider>
      </>
    )}
  />
)

export default Layout
