import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import theme from "../theme"

import Header from "../components/sections/Header"

import MainHeader from "../components/typography/MainHeader"
import SecondaryHeader from "../components/typography/SecondaryHeader"
import HeaderGroup from "../components/helpers/HeaderGroup"
import Colorize from "../components/helpers/Colorize"
import { ButtonLink } from "../components/ui/Button"
import SectionTitle from "../components/typography/SectionTitle"
import Main from "../components/sections/Main"
import Paragraph from "../components/typography/Paragraph"
import Section from "../components/sections/Section"

const HeaderContent = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
`

const { spaces } = theme

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Marcin Kołodziej"
        lang="pl-PL"
        keywords={[`portfolio`, `Marcin Kołodziej`, "web", "developer"]}
      />
      <Header>
        <HeaderContent>
          <HeaderGroup margin={`0 0 ${spaces.md} 0`}>
            <MainHeader margin={`0 0 ${spaces.sm} 0`}>
              Marcin
              <br />
              <Colorize color="primary">Kołodziej</Colorize>
            </MainHeader>
            <SecondaryHeader>Web developer</SecondaryHeader>
          </HeaderGroup>
          <ButtonLink margin="0 auto" width="24rem" href="#">
            Poznaj mnie
          </ButtonLink>
        </HeaderContent>
      </Header>
      <Main>
        <Section>
          <SectionTitle>O mnie</SectionTitle>
          <Paragraph margin={`0 0 ${spaces.md} 0`}>
            Tworzenie oprogramowania to moja pasja, którą z przyjemnością
            rozwijam każdego dnia poprzez budowanie aplikacji oraz naukę nowych
            technologii.
          </Paragraph>
          <Paragraph>
            Specjalizuję się w technologiach front-endowych, jednak w trakcie
            tworzenia aplikacji poznałem również technologie back-endowe oraz
            dobre praktyki związane z UI / UX
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Umiejętności</SectionTitle>
        </Section>
      </Main>
    </Layout>
  )
}

export default IndexPage
