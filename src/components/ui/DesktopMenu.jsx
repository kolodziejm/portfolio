import React from "react"
import { Link } from "gatsby"
import styled, { withTheme } from "styled-components"
import MediumHeading from "../typography/MediumHeading"
import SmoothAnchor from "../helpers/SmoothAnchor"

import logo from "../../images/MK.png"

const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navbar = styled.nav`
  padding: ${({ theme: { spaces } }) => `${spaces.md} ${spaces.xs}`};
  box-shadow: 0 2px 4px ${({ theme: { colors } }) => colors.shadow};
  background: ${({ theme: { colors } }) => colors.white};
  position: fixed;
  width: 100%;
  display: none;
  z-index: 9999;
  border-top: 1px solid ${({ theme: { colors } }) => colors.primary};

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
`

const SmoothLink = ({ href, children }) => (
  <NavItem>
    <MediumHeading>
      <SmoothAnchor offset="150" href={href}>
        {children}
      </SmoothAnchor>
    </MediumHeading>
  </NavItem>
)

const StandardLink = ({ href, children }) => (
  <NavItem>
    <MediumHeading>
      <StyledAnchor to={href}>{children}</StyledAnchor>
    </MediumHeading>
  </NavItem>
)

const LogoLink = ({ borderRadiuses }) => (
  <SmoothAnchor href="#header">
    <img
      style={{ borderRadius: `${borderRadiuses.sm}` }}
      width="40"
      height="40"
      src={logo}
      alt="Marcin Kołodziej logo"
    />
  </SmoothAnchor>
)

const DesktopMenu = ({ lang, theme: { borderRadiuses } }) => {
  return (
    <Navbar>
      <Content>
        <LogoLink borderRadiuses={borderRadiuses} />
        <NavList>
          <SmoothLink href="#about">O mnie</SmoothLink>
          <SmoothLink href="#skills">Umiejętności</SmoothLink>
          <SmoothLink href="#projects">Projekty</SmoothLink>
          <SmoothLink href="#contact">Kontakt</SmoothLink>
          <StandardLink href="en">EN</StandardLink>
        </NavList>
      </Content>
    </Navbar>
  )
}

export default withTheme(DesktopMenu)
