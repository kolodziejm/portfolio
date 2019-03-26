import React from "react"
import styled from "styled-components"

import Contact from "./Contact"
import About from "./About"
import Skills from "./Skills"
import Projects from './Projects';

const Main = styled.main`
  padding: 0 ${({ theme: { spaces } }) => spaces.xs};
`

export default ({ lang }) => (
  <Main>
    <About lang={lang} />
    <Skills lang={lang} />
    <Projects lang={lang} />
    <Contact lang={lang} />
  </Main>
)
