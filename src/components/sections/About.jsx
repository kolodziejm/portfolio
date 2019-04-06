import React from "react"
import { withTheme } from "styled-components"

import Section from "./Section"
import Content from "../helpers/Content"
import SectionTitle from "../typography/SectionTitle"
import Paragraph from "../typography/Paragraph"

const PLContent = ({ spaces }) => (
  <>
    <SectionTitle>O mnie</SectionTitle>
    <Paragraph center margin={`0 auto ${spaces.md} auto`}>
      Tworzenie oprogramowania to moja pasja, którą z przyjemnością rozwijam
      każdego dnia poprzez budowanie aplikacji oraz naukę nowych technologii.
    </Paragraph>
    <Paragraph center margin="0 auto">
      Specjalizuję się w technologiach front-endowych, jednak w trakcie
      tworzenia aplikacji poznałem również technologie back-endowe oraz dobre
      praktyki związane z UI / UX.
    </Paragraph>
  </>
)

const ENContent = ({ spaces }) => (
  <>
    <SectionTitle>About me</SectionTitle>
    <Paragraph center margin={`0 auto ${spaces.md} auto`}>
      Software development is my passion, in which I happily improve daily by
      building apps and learning new technologies.
    </Paragraph>
    <Paragraph center margin="0 auto">
      I specialize in front-end technologies, although during the process of
      making my projects, I've also learned back-end technologies as well as
      good practices concerning UI / UX.
    </Paragraph>
  </>
)

const About = ({ theme: { spaces }, lang }) => (
  <Section id="about" marginTop={spaces.xl}>
    <Content>
      {lang === "pl" ? (
        <PLContent spaces={spaces} />
      ) : lang === "en" ? (
        <ENContent spaces={spaces} />
      ) : (
        ""
      )}
    </Content>
  </Section>
)

export default withTheme(About)
