import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import HomeHeader from '../components/headers/header-home'
import HomeIntro from '../components/home/home-intro'
import HomeTeaserLanguages from '../components/home/home-teaser-languages'
import HomeTeaserMint from '../components/home/home-teaser-mint'
import HomeTeaserKultur from '../components/home/home-teaser-kultur'
import HomeGanztag from '../components/home/home-ganztag'
import Layout from '../layouts/'

const Wrapper = styled.div``

const IndexPage = () => (
  <Layout>
    <HomeHeader />
    <HomeIntro />
    <HomeTeaserLanguages />
    <HomeTeaserMint />
    <HomeTeaserKultur />
    <HomeGanztag />
  </Layout>
)

export default IndexPage
