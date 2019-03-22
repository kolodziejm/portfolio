import React from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"

import { HamburgerClose } from "./Hamburger"

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
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
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
    margin-bottom: ${({ theme: { spaces } }) => spaces.hg};
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`

export const MobileItem = ({ href, children }) => (
  <Item>
    <Anchor href={href}>{children}</Anchor>
  </Item>
)

export const MobileMenu = ({ open, clicked, children }) => (
  <PoseGroup>
    {open && (
      <Backdrop key="backdrop">
        <HamburgerClose clicked={clicked} />
        <Nav>
          <NavList>{children}</NavList>
        </Nav>
      </Backdrop>
    )}
  </PoseGroup>
)
