import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import theme from "../theme"

import logoImg from "../images/MK.png"
import agency from "../images/agency.png"
import cahee from "../images/cahee.png"
import habitCreator from "../images/habit-creator.png"
import kolomar from "../images/kolomar.png"
import litenote from "../images/litenote.png"

import Header from "../components/sections/Header"
import MainHeader from "../components/typography/MainHeader"
import Label from "../components/typography/Label"
import SecondaryHeader from "../components/typography/SecondaryHeader"
import HeaderGroup from "../components/helpers/HeaderGroup"
import Colorize from "../components/helpers/Colorize"
import { ButtonLink, Button } from "../components/ui/Button"
import SectionTitle from "../components/typography/SectionTitle"
import Main from "../components/sections/Main"
import Paragraph from "../components/typography/Paragraph"
import Section from "../components/sections/Section"
import Content from "../components/helpers/Content"
import { HamburgerOpen } from "../components/ui/Hamburger"
import { MobileItem, MobileMenu } from "../components/ui/MobileMenu"
import SmallCard from "../components/ui/SmallCard"
import MediumHeading from "../components/typography/MediumHeading"
import GridList from "../components/lists/GridList"
import FlexList from "../components/lists/FlexList"
import Spacer from "../components/helpers/Spacer"
import Project from "../components/ui/Project"
import Input from "../components/ui/Input"
import Textarea from "../components/ui/Textarea"
import Form from "../components/ui/Form"
import SmallHeading from "../components/typography/SmallHeading"
import Footer from "../components/sections/Footer"
import Contact from "../components/sections/Contact"
import About from "../components/sections/About"
import Skills from "../components/sections/Skills"

const HeaderContent = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
`

const { spaces, borderRadiuses } = theme

const IndexPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Layout>
      <SEO
        title="Marcin Kołodziej"
        lang="pl-PL"
        keywords={[`portfolio`, `Marcin Kołodziej`, "web", "developer"]}
      />
      <MobileMenu open={menuOpen} clicked={() => setMenuOpen(false)}>
        <MobileItem href="#header" clicked={() => setMenuOpen(false)}>
          <img
            style={{ borderRadius: `${borderRadiuses.sm}` }}
            width={40}
            height={40}
            src={logoImg}
            alt="Marcin Kołodziej"
          />
        </MobileItem>
        <MobileItem href="#about" clicked={() => setMenuOpen(false)}>
          O mnie
        </MobileItem>
        <MobileItem href="#skills" clicked={() => setMenuOpen(false)}>
          Umiejętności
        </MobileItem>
        <MobileItem href="#projects" clicked={() => setMenuOpen(false)}>
          Projekty
        </MobileItem>
        <MobileItem href="#contact" clicked={() => setMenuOpen(false)}>
          Kontakt
        </MobileItem>
      </MobileMenu>
      <Header id="header">
        <HamburgerOpen clicked={() => setMenuOpen(true)} />
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
            Moje projekty
          </ButtonLink>
        </HeaderContent>
      </Header>
      <Main>
        <About />
        <Skills />
        <Section id="projects">
          <Content>
            <SectionTitle>Projekty</SectionTitle>
            <Project
              title="Habit Creator"
              img={habitCreator}
              frontendTech={["React", "Redux", "Material UI"]}
              backendTech={["Node.js (express)", "MongoDB"]}
              github="https://github.com/kolodziejm/habit-creator"
              live="https://habit-creator.cf/#/"
            />
            <Project
              title="liteNote"
              img={litenote}
              frontendTech={[
                "React (hooks)",
                "Apollo Client",
                "styled-components",
              ]}
              backendTech={["Node.js (express)", "Apollo Server", "MongoDB"]}
              github="https://github.com/kolodziejm/liteNote"
              live="https://litenote.ga/#/"
            />
            <Project
              title="Blog"
              img={kolomar}
              frontendTech={[
                "GatsbyJS",
                "React",
                "styled-components",
                "GraphQL",
              ]}
              github="https://github.com/kolodziejm/blog"
              live="https://www.kolomar.com/"
            />
            <Project
              title="Challenge #37"
              img={agency}
              frontendTech={["HTML5", "CSS3", "JavaScript", "Sass"]}
              github="https://github.com/kolodziejm/challenge-37"
              live="https://kolodziejm.github.io/challenge-37/"
            />
            <Project
              title="Challenge #2"
              img={cahee}
              frontendTech={["HTML5", "CSS3", "JavaScript", "Sass"]}
              github="https://github.com/kolodziejm/challenge-2"
              live="https://kolodziejm.github.io/challenge-2/"
            />
          </Content>
        </Section>
        <Contact />
      </Main>
      <Footer />
    </Layout>
  )
}

export default IndexPage
