import React from "react"
import { withTheme } from "styled-components"

import agency from "../../images/agency.png"
import cahee from "../../images/cahee.png"
import habitCreator from "../../images/habit-creator.png"
import kolomar from "../../images/kolomar.png"
import litenote from "../../images/litenote.png"

import Section from "./Section"
import Content from "../helpers/Content"
import SectionTitle from "../typography/SectionTitle"
import Project from "../ui/Project"

const Projects = ({ theme, lang }) => (
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
        frontendTech={["React (hooks)", "Apollo Client", "styled-components"]}
        backendTech={["Node.js (express)", "Apollo Server", "MongoDB"]}
        github="https://github.com/kolodziejm/liteNote"
        live="https://litenote.ga/#/"
      />
      <Project
        title="Blog"
        img={kolomar}
        frontendTech={["GatsbyJS", "React", "styled-components", "GraphQL"]}
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
)

export default withTheme(Projects)
