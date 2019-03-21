import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Header from "../components/sections/Header"

import MainHeader from "../components/typography/MainHeader"
import SecondaryHeader from "../components/typography/SecondaryHeader"
import HeaderGroup from "../components/helpers/HeaderGroup"
import Colorize from "../components/helpers/Colorize"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Marcin Kołodziej"
      lang="pl-PL"
      keywords={[`portfolio`, `Marcin Kołodziej`, "web", "developer"]}
    />
    <Header>
      <HeaderGroup>
        <MainHeader>
          Marcin
          <br />
          <Colorize color="primary">Kołodziej</Colorize>
        </MainHeader>
        <SecondaryHeader>Web developer</SecondaryHeader>
      </HeaderGroup>
    </Header>
  </Layout>
)

export default IndexPage
