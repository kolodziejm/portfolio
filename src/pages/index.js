import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import theme from "../theme"

import logoImg from '../images/MK.png';
import jsIcon from '../images/js.svg';
import css3Icon from '../images/css3.svg';
import firebaseIcon from '../images/firebase.svg';
import gitIcon from '../images/git.svg';
import githubIcon from '../images/github.svg';
import graphqlIcon from '../images/graphql.svg';
import html5Icon from '../images/html5.svg';
import jestIcon from '../images/jest.svg';
import linkedinIcon from '../images/linkedin.svg';
import mongodbIcon from '../images/mongodb.svg';
import nodeIcon from '../images/node.svg';
import reactIcon from '../images/react.svg';
import reduxIcon from '../images/redux.svg';
import rtlIcon from '../images/rtl.png';
import sassIcon from '../images/sass.svg';
import agency from '../images/agency.png';
import cahee from '../images/cahee.png';
import habitCreator from '../images/habit-creator.png';
import kolomar from '../images/kolomar.png';
import litenote from '../images/litenote.png';

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
import Content from "../components/helpers/Content"
import { HamburgerOpen } from "../components/ui/Hamburger"
import { MobileItem, MobileMenu } from "../components/ui/MobileMenu"
import SmallCard from '../components/ui/SmallCard';
import MediumHeading from '../components/typography/MediumHeading';
import GridList from '../components/lists/GridList';
import FlexList from '../components/lists/FlexList';
import Spacer from '../components/helpers/Spacer';
import Project from '../components/ui/Project';

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
          <img style={{ borderRadius: `${borderRadiuses.sm}` }} width={40} height={40} src={logoImg} alt="Marcin Kołodziej"/>
        </MobileItem>
        <MobileItem href="#about" clicked={() => setMenuOpen(false)}>O mnie</MobileItem>
        <MobileItem href="#skills" clicked={() => setMenuOpen(false)}>Umiejętności</MobileItem>
        <MobileItem href="#projects" clicked={() => setMenuOpen(false)}>Projekty</MobileItem>
        <MobileItem href="#contact" clicked={() => setMenuOpen(false)}>Kontakt</MobileItem>
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
        <Section id="about">
          <Content>
            <SectionTitle>O mnie</SectionTitle>
            <Paragraph margin={`0 0 ${spaces.md} 0`}>
              Tworzenie oprogramowania to moja pasja, którą z przyjemnością
              rozwijam każdego dnia poprzez budowanie aplikacji oraz naukę
              nowych technologii.
            </Paragraph>
            <Paragraph>
              Specjalizuję się w technologiach front-endowych, jednak w trakcie
              tworzenia aplikacji poznałem również technologie back-endowe oraz
              dobre praktyki związane z UI / UX
            </Paragraph>
          </Content>
        </Section>
        <Section id="skills">
          <Content>
            <SectionTitle>Umiejętności</SectionTitle>
            <MediumHeading align="center" margin={`0 0 ${spaces.md} 0`} >Front-end</MediumHeading>
            <Spacer margin={`0 0 ${spaces.xl} 0`}>
            <GridList columns={3} rows={3} minWidth="5rem" maxWidth="8rem" >
              <SmallCard img={jsIcon} text="JavaScript ES6+" />
              <SmallCard img={reactIcon} text="React" />
              <SmallCard img={reduxIcon} text="Redux" />
              <SmallCard img={html5Icon} text="HTML5" />
              <SmallCard img={css3Icon} text="CSS3" />
              <SmallCard img={sassIcon} text="Sass" />
              <SmallCard img={graphqlIcon} text="GraphQL" centerGrid />
            </GridList>
            </Spacer>
            <MediumHeading align="center" margin={`0 0 ${spaces.md} 0`}>Back-end</MediumHeading>
            <Spacer margin={`0 0 ${spaces.xl} 0`}>
            <GridList columns={3} rows={2} minWidth="5rem" maxWidth="8rem">
              <SmallCard img={nodeIcon} text="Node.js" />
              <SmallCard img={mongodbIcon} text="MongoDB" />
              <SmallCard img={graphqlIcon} text="GraphQL" />
              <SmallCard img={firebaseIcon} text="Firebase" centerGrid />
            </GridList>
            </Spacer>
            <MediumHeading align="center" margin={`0 0 ${spaces.md} 0`}>Kontrola wersji</MediumHeading>
            <Spacer margin={`0 0 ${spaces.xl} 0`}>
            <ul style={{ listStyle: 'none', width: '100%' }}>
              <SmallCard img={gitIcon} text="Git" margin="0 auto" />
            </ul>
            </Spacer>
            <MediumHeading align="center" margin={`0 0 ${spaces.md} 0`}>Testy</MediumHeading>
            <Spacer margin={`0 0 ${spaces.lg} 0`}>
            <FlexList>
              <SmallCard img={jestIcon} text="Jest" flex="auto" margin={`0 ${spaces.sm} 0 0 `} />
              <SmallCard img={rtlIcon} text="RTL" flex="auto"  />
            </FlexList>
            </Spacer>
          </Content>
        </Section>
        <Section id="projects">
          <Content>
            <SectionTitle>Projekty</SectionTitle>
            <Project 
              title="Habit Creator"
              img={habitCreator}
              frontendTech={['React', 'Redux', 'Material UI']}
              backendTech={['Node.js (express)', 'MongoDB']}
              github="https://github.com/kolodziejm/habit-creator"
              live="https://habit-creator.cf/#/"
            />
            <Project 
              title="liteNote"
              img={litenote}
              frontendTech={['React (hooks)', 'Apollo Client', 'styled-components']}
              backendTech={['Node.js (express)', 'Apollo Server', 'MongoDB']}
              github="https://github.com/kolodziejm/liteNote"
              live="https://litenote.ga/#/"
            />
            <Project 
              title="Blog"
              img={kolomar}
              frontendTech={['GatsbyJS', 'React', 'styled-components', 'GraphQL']}
              github="https://github.com/kolodziejm/blog"
              live="https://www.kolomar.com/"
            />
            <Project 
              title="Challenge #37"
              img={agency}
              frontendTech={['HTML5', 'CSS3', 'JavaScript', 'Sass']}
              github="https://github.com/kolodziejm/challenge-37"
              live="https://kolodziejm.github.io/challenge-37/"
            />
            <Project 
              title="Challenge #2"
              img={cahee}
              frontendTech={['HTML5', 'CSS3', 'JavaScript', 'Sass']}
              github="https://github.com/kolodziejm/challenge-2"
              live="https://kolodziejm.github.io/challenge-2/"
            />
          </Content>
        </Section>
      </Main>
    </Layout>
  )
}

export default IndexPage
