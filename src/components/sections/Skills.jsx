import React from "react"
import { withTheme } from "styled-components"

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

const Skills = ({ theme: { spaces }, lang }) => (
  <Section id="skills">
    <Content>
      <SectionTitle>Umiejętności</SectionTitle>
      <MediumHeading align="center" margin={`0 0 ${spaces.md} 0`}>
        Front-end
      </MediumHeading>
      <Spacer margin={`0 0 ${spaces.xl} 0`}>
        <GridList columns={3} rows={3} minWidth="5rem" maxWidth="8rem">
          <SmallCard img={jsIcon} text="JavaScript ES6+" />
          <SmallCard img={reactIcon} text="React" />
          <SmallCard img={reduxIcon} text="Redux" />
          <SmallCard img={html5Icon} text="HTML5" />
          <SmallCard img={css3Icon} text="CSS3" />
          <SmallCard img={sassIcon} text="Sass" />
          <SmallCard img={graphqlIcon} text="GraphQL" centerGrid />
        </GridList>
      </Spacer>
      <MediumHeading align="center" margin={`0 0 ${spaces.md} 0`}>
        Back-end
      </MediumHeading>
      <Spacer margin={`0 0 ${spaces.xl} 0`}>
        <GridList columns={3} rows={2} minWidth="5rem" maxWidth="8rem">
          <SmallCard img={nodeIcon} text="Node.js" />
          <SmallCard img={mongodbIcon} text="MongoDB" />
          <SmallCard img={graphqlIcon} text="GraphQL" />
          <SmallCard img={firebaseIcon} text="Firebase" centerGrid />
        </GridList>
      </Spacer>
      <MediumHeading align="center" margin={`0 0 ${spaces.md} 0`}>
        Kontrola wersji
      </MediumHeading>
      <Spacer margin={`0 0 ${spaces.xl} 0`}>
        <ul style={{ listStyle: "none", width: "100%" }}>
          <SmallCard img={gitIcon} text="Git" margin="0 auto" />
        </ul>
      </Spacer>
      <MediumHeading align="center" margin={`0 0 ${spaces.md} 0`}>
        Testy
      </MediumHeading>
      <Spacer margin={`0 0 ${spaces.lg} 0`}>
        <FlexList>
          <SmallCard
            img={jestIcon}
            text="Jest"
            flex="auto"
            margin={`0 ${spaces.sm} 0 0 `}
          />
          <SmallCard img={rtlIcon} text="RTL" flex="auto" />
        </FlexList>
      </Spacer>
    </Content>
  </Section>
)

export default withTheme(Skills)
