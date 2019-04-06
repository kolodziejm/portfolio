import React from "react"
import styled, { withTheme } from "styled-components"

import jsIcon from "../../images/js.svg"
import css3Icon from "../../images/css3.svg"
import firebaseIcon from "../../images/firebase.svg"
import gitIcon from "../../images/git.svg"
import graphqlIcon from "../../images/graphql.svg"
import html5Icon from "../../images/html5.svg"
import jestIcon from "../../images/jest.svg"
import mongodbIcon from "../../images/mongodb.svg"
import nodeIcon from "../../images/node.svg"
import reactIcon from "../../images/react.svg"
import reduxIcon from "../../images/redux.svg"
import rtlIcon from "../../images/rtl.png"
import sassIcon from "../../images/sass.svg"

import Section from "./Section"
import Content from "../helpers/Content"
import SectionTitle from "../typography/SectionTitle"
import MediumHeading from "../typography/MediumHeading"
import Spacer from "../helpers/Spacer"
import GridList from "../lists/GridList"
import SmallCard from "../ui/SmallCard"
import FlexList from "../lists/FlexList"

const SkillsList = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Skills = ({ theme: { spaces }, lang }) => (
  <Section id="skills">
    <Content>
      <SectionTitle>
        {lang === "pl" ? "Umiejętności" : lang === "en" ? "Skills" : ""}
      </SectionTitle>
      <MediumHeading align="center" margin={`0 0 ${spaces.sm} 0`}>
        Front-end
      </MediumHeading>
      <Spacer margin={`0 0 ${spaces.hg} 0`}>
        <SkillsList>
          <SmallCard img={jsIcon} text="JavaScript ES6+" />
          <SmallCard img={reactIcon} text="React" />
          <SmallCard img={reduxIcon} text="Redux" />
          <SmallCard img={html5Icon} text="HTML5" />
          <SmallCard img={css3Icon} text="CSS3" />
          <SmallCard img={sassIcon} text="Sass" />
          <SmallCard img={graphqlIcon} text="GraphQL" />
        </SkillsList>
      </Spacer>
      <MediumHeading align="center" margin={`0 0 ${spaces.sm} 0`}>
        Back-end
      </MediumHeading>
      <Spacer margin={`0 0 ${spaces.hg} 0`}>
        <SkillsList>
          <SmallCard img={nodeIcon} text="Node.js" />
          <SmallCard img={mongodbIcon} text="MongoDB" />
          <SmallCard img={graphqlIcon} text="GraphQL" />
          <SmallCard img={firebaseIcon} text="Firebase" />
        </SkillsList>
      </Spacer>
      <MediumHeading align="center" margin={`0 0 ${spaces.sm} 0`}>
        {lang === "pl"
          ? "Kontrola wersji"
          : lang === "en"
          ? "Version control"
          : ""}
      </MediumHeading>
      <Spacer margin={`0 0 ${spaces.hg} 0`}>
        <SkillsList>
          <SmallCard img={gitIcon} text="Git" />
        </SkillsList>
      </Spacer>
      <MediumHeading align="center" margin={`0 0 ${spaces.sm} 0`}>
        {lang === "pl" ? "Testy" : lang === "en" ? "Tests" : ""}
      </MediumHeading>
      <Spacer margin={`0 0 ${spaces.lg} 0`}>
        <SkillsList>
          <SmallCard img={jestIcon} text="Jest" />
          <SmallCard img={rtlIcon} text="RTL" />
        </SkillsList>
      </Spacer>
    </Content>
  </Section>
)

export default withTheme(Skills)
