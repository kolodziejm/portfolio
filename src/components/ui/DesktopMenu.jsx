import React, { useState, useEffect } from "react"
import posed from "react-pose"
import { Link } from "gatsby"
import styled from "styled-components"
import _ from "lodash"

import MediumHeading from "../typography/MediumHeading"
import SmoothAnchor from "../helpers/SmoothAnchor"

import logo from "../../images/MK.png"

const PosedImage = posed.img({
  normal: { scale: 1 },
  scrolled: { scale: 0.8 },
})

const Logo = styled(PosedImage)`
  border-radius: ${({ theme: { borderRadiuses } }) => borderRadiuses.sm};
  width: 40px;
  height: 40px;
`

const Content = styled.div`
  max-width: 128rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navbar = styled.nav`
  padding: ${({ theme: { spaces }, scrollPos }) =>
    scrollPos > 100
      ? `${spaces.sm} ${spaces.lg}`
      : `${spaces.md} ${spaces.lg}`};
  box-shadow: 0 2px 4px ${({ theme: { colors } }) => colors.shadow};
  background: ${({ theme: { colors } }) => colors.white};
  position: fixed;
  width: 100%;
  display: none;
  z-index: 9999;
  border-top: 1px solid ${({ theme: { colors } }) => colors.primary};
  transition: all 0.2s;
  transition-timing-function: cubic-bezier(0.64, 0.49, 0.71, 1.08);

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    display: block;
  }
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
`

const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: ${({ theme: { spaces } }) => spaces.lg};
  }
`

const StyledAnchor = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.64, 0.49, 0.71, 1.08);

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`

const SmoothLink = ({ href, children, scrollPos }) => (
  <NavItem>
    <MediumHeading pose={scrollPos > 100 ? "scrolled" : "normal"}>
      <SmoothAnchor offset="150" href={href}>
        {children}
      </SmoothAnchor>
    </MediumHeading>
  </NavItem>
)

const StandardLink = ({ href, children, scrollPos }) => (
  <NavItem>
    <MediumHeading pose={scrollPos > 100 ? "scrolled" : "normal"}>
      <StyledAnchor to={href}>{children}</StyledAnchor>
    </MediumHeading>
  </NavItem>
)

const LogoLink = ({ borderRadiuses, scrollPos }) => (
  <SmoothAnchor href="#header">
    <Logo
      pose={scrollPos > 100 ? "scrolled" : "normal"}
      src={logo}
      alt="Marcin Kołodziej logo"
    />
  </SmoothAnchor>
)

const PLLinks = ({ scrollPos }) => (
  <>
    <SmoothLink scrollPos={scrollPos} href="#about">
      O mnie
    </SmoothLink>
    <SmoothLink scrollPos={scrollPos} href="#skills">
      Umiejętności
    </SmoothLink>
    <SmoothLink scrollPos={scrollPos} href="#projects">
      Projekty
    </SmoothLink>
    <SmoothLink scrollPos={scrollPos} href="#contact">
      Kontakt
    </SmoothLink>
    <StandardLink scrollPos={scrollPos} href="/en">
      EN
    </StandardLink>
  </>
)

const ENLinks = ({ scrollPos }) => (
  <>
    <SmoothLink scrollPos={scrollPos} href="#about">
      About me
    </SmoothLink>
    <SmoothLink scrollPos={scrollPos} href="#skills">
      Skills
    </SmoothLink>
    <SmoothLink scrollPos={scrollPos} href="#projects">
      Projects
    </SmoothLink>
    <SmoothLink scrollPos={scrollPos} href="#contact">
      Contact
    </SmoothLink>
    <StandardLink scrollPos={scrollPos} href="/">
      PL
    </StandardLink>
  </>
)

const DesktopMenu = ({ lang }) => {
  const [scrollPos, setScrollPos] = useState(0)

  const scrollHandler = _.throttle(() => {
    setScrollPos(window.scrollY)
  }, 100)

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)

    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return (
    <Navbar scrollPos={scrollPos}>
      <Content>
        <LogoLink scrollPos={scrollPos} />
        <NavList>
          {lang === "pl" ? (
            <PLLinks scrollPos={scrollPos} />
          ) : lang === "en" ? (
            <ENLinks scrollPos={scrollPos} />
          ) : (
            ""
          )}
        </NavList>
      </Content>
    </Navbar>
  )
}

export default DesktopMenu
