import React from "react"
import { Link } from "gatsby"
import styled, { withTheme } from "styled-components"
import posed, { PoseGroup } from "react-pose"

import { HamburgerClose } from "./Hamburger"

import logoImg from "../../images/MK.png"

const navPoses = {
  enter: { x: "0%", opacity: 1, staggerChildren: 100 },
  exit: { x: "100%", opacity: 0 },
}

const itemPoses = {
  enter: { x: 0 },
  exit: { x: 30 },
}

const backdropPoses = {
  enter: { opacity: 1 },
  exit: { opacity: 0, beforeChildren: true },
}

const Backdrop = styled(posed.div(backdropPoses))`
  position: fixed !important; /* override pose's default position absolute injection */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    display: none;
  }
`

const Nav = styled(posed.nav(navPoses))`
  text-align: center;
`

const NavList = styled.ul`
  list-style: none;
`

const Item = styled(posed.li(itemPoses))`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  font-family: ${({ theme: { fonts } }) => fonts.heading};
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.black};
  &:not(:last-child) {
    margin-bottom: ${({ theme: { spaces } }) => spaces.xxl};
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const MobileItem = ({ href, children, clicked }) => (
  <Item onClick={clicked}>
    <Anchor href={href}>{children}</Anchor>
  </Item>
)

const LanguageSwitchItem = ({ href, children, clicked }) => (
  <Item onClick={clicked}>
    <StyledLink to={href}>{children}</StyledLink>
  </Item>
)

const PLLinks = ({ clicked }) => (
  <>
    <MobileItem href="#about" clicked={clicked}>
      O mnie
    </MobileItem>
    <MobileItem href="#skills" clicked={clicked}>
      Umiejętności
    </MobileItem>
    <MobileItem href="#projects" clicked={clicked}>
      Projekty
    </MobileItem>
    <MobileItem href="#contact" clicked={clicked}>
      Kontakt
    </MobileItem>
    <LanguageSwitchItem href="/en" clicked={clicked}>
      EN
    </LanguageSwitchItem>
  </>
)

const ENLinks = ({ clicked }) => (
  <>
    <MobileItem href="#about" clicked={clicked}>
      About me
    </MobileItem>
    <MobileItem href="#skills" clicked={clicked}>
      Skills
    </MobileItem>
    <MobileItem href="#projects" clicked={clicked}>
      Projects
    </MobileItem>
    <MobileItem href="#contact" clicked={clicked}>
      Contact
    </MobileItem>
    <LanguageSwitchItem href="/" clicked={clicked}>
      PL
    </LanguageSwitchItem>
  </>
)

const MobileMenu = ({ open, clicked, lang, theme: { borderRadiuses } }) => (
  <PoseGroup>
    {open && (
      <Backdrop key="backdrop">
        <HamburgerClose clicked={clicked} />
        <Nav>
          <NavList>
            <MobileItem href="#header" clicked={clicked}>
              <img
                style={{ borderRadius: `${borderRadiuses.sm}` }}
                width={32}
                height={32}
                src={logoImg}
                alt="Marcin Kołodziej logo"
              />
            </MobileItem>
            {lang === "pl" ? (
              <PLLinks clicked={clicked} />
            ) : lang === "en" ? (
              <ENLinks clicked={clicked} />
            ) : (
              ""
            )}
          </NavList>
        </Nav>
      </Backdrop>
    )}
  </PoseGroup>
)

export default withTheme(MobileMenu)
