import React from "react"
import styled, { withTheme } from "styled-components"

import { HamburgerOpen } from "../ui/Hamburger"
import HeaderGroup from "../helpers/HeaderGroup"
import MainHeader from "../typography/MainHeader"
import SecondaryHeader from "../typography/SecondaryHeader"
import { ButtonSmoothLink } from "../ui/Button"
import Colorize from "../helpers/Colorize"

const Header = styled.header`
  text-align: center;
  padding: ${({ theme: { spaces } }) => spaces.xs};
  height: 100vh;
  min-height: 568px;
  position: relative;

  @media only screen and (min-height: ${({ theme: { breakpoints } }) =>
      breakpoints.height2k}) {
    height: 65vh;
  }
`

const HeaderContent = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
`

const HeaderSection = ({ clicked, theme: { spaces }, lang }) => (
  <Header id="header">
    <HamburgerOpen clicked={clicked} />
    <HeaderContent>
      <HeaderGroup margin={`0 0 ${spaces.lg} 0`}>
        <MainHeader margin={`0 0 ${spaces.sm} 0`}>
          Marcin
          <br />
          <Colorize color="primary">Kołodziej</Colorize>
        </MainHeader>
        <SecondaryHeader>Web developer</SecondaryHeader>
      </HeaderGroup>
      <ButtonSmoothLink
        margin="0 auto"
        width="24rem"
        href="#projects"
        offset="150"
      >
        {lang === "pl" ? "Moje projekty" : lang === "en" ? "My projects" : ""}
      </ButtonSmoothLink>
    </HeaderContent>
  </Header>
)

export default withTheme(HeaderSection)
