import React, { useState, useEffect } from "react"
import styled, { withTheme } from "styled-components"

import { HamburgerOpen } from "../ui/Hamburger"
import HeaderGroup from "../helpers/HeaderGroup"
import MainHeader from "../typography/MainHeader"
import SecondaryHeader from "../typography/SecondaryHeader"
import { ButtonSmoothLink } from "../ui/Button"
import Colorize from "../helpers/Colorize"
import background from "../../images/trianglify.svg"

const Header = styled.header`
  text-align: center;
  padding: ${({ theme: { spaces } }) => spaces.xs};
  height: 100vh;
  min-height: 568px;
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.white};
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  /* @media only screen and (min-height: ${({ theme: { breakpoints } }) =>
    breakpoints.height2k}) {
    height: 65vh;
  } */
`

const HeaderContent = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
`

const HeaderSection = ({ clicked, theme: { spaces }, lang }) => {
  return (
    <Header id="header">
      <HamburgerOpen clicked={clicked} />
      <HeaderContent>
        <HeaderGroup margin={`0 0 ${spaces.xl} 0`}>
          <MainHeader margin={`0 0 ${spaces.md} 0`}>
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
}

export default withTheme(HeaderSection)
