import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"

import agency from "../../images/agency.png"
import cahee from "../../images/cahee.png"
import habitCreator from "../../images/habit-creator.png"
import kolomar from "../../images/kolomar.png"
import litenote from "../../images/litenote.png"
import portfolio from "../../images/portfolio.png"

import Section from "./Section"
import Content from "../helpers/Content"
import SectionTitle from "../typography/SectionTitle"
import Project from "../ui/Project"

const Grid = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 28rem));
  grid-gap: ${({ theme: { spaces } }) => spaces.lg};
  justify-content: center;
`

const Projects = ({ lang }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          habitCreator: file(relativePath: { eq: "habit-creator.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          liteNote: file(relativePath: { eq: "litenote.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          kolomar: file(relativePath: { eq: "kolomar.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          portfolio: file(relativePath: { eq: "portfolio.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          agency: file(relativePath: { eq: "agency.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          cahee: file(relativePath: { eq: "cahee.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Section id="projects">
          <Content>
            <SectionTitle>
              {" "}
              {lang === "pl" ? "Projekty" : lang === "en" ? "Projects" : ""}
            </SectionTitle>
            <Grid>
              <Project
                title="Habit Creator"
                img={data.habitCreator.childImageSharp.fluid}
                frontendTech={["React", "Redux", "Material UI"]}
                backendTech={["Node.js (express)", "MongoDB"]}
                github="https://github.com/kolodziejm/habit-creator"
                live="https://habit-creator.cf/#/"
              />
              <Project
                title="liteNote"
                img={data.liteNote.childImageSharp.fluid}
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
                img={data.kolomar.childImageSharp.fluid}
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
                title="Portfolio"
                img={data.portfolio.childImageSharp.fluid}
                frontendTech={["GatsbyJS", "React", "styled-components"]}
                backendTech={["Firebase"]}
                github="https://github.com/kolodziejm/portfolio"
              />
              <Project
                title="Challenge #37"
                img={data.agency.childImageSharp.fluid}
                frontendTech={["HTML5", "CSS3", "JavaScript", "Sass"]}
                github="https://github.com/kolodziejm/challenge-37"
                live="https://kolodziejm.github.io/challenge-37/"
              />
              <Project
                title="Challenge #2"
                img={data.cahee.childImageSharp.fluid}
                frontendTech={["HTML5", "CSS3", "JavaScript", "Sass"]}
                github="https://github.com/kolodziejm/challenge-2"
                live="https://kolodziejm.github.io/challenge-2/"
              />
            </Grid>
          </Content>
        </Section>
      )}
    />
  )
}
export default Projects
