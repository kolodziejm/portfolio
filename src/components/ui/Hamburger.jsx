import React from "react"
import styled, { css } from "styled-components"

import xIcon from "../../images/x.svg"

// hamburger normal & crossed in menu

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  outline: none; /* mobile */
  background: ${({ theme: { colors }, open }) =>
    open ? colors.light : colors.white};
  position: fixed;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  z-index: 2;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    display: none;
  }
`

const Line = styled.span`
  display: block;
  width: 24px; /* change if necessary */
  border: 1px solid ${({ theme: { colors } }) => colors.body};
  border-radius: 50px;

  &:not(:last-child) {
    margin-bottom: ${({ theme: { spaces } }) => spaces.xs};
  }
`

export const HamburgerOpen = ({ clicked }) => (
  <Button open onClick={clicked} top="24px" right="16px">
    <Line />
    <Line />
    <Line />
  </Button>
)

export const HamburgerClose = ({ clicked }) => (
  <Button onClick={clicked} top="24px" right="16px">
    <img src={xIcon} alt="Close menu" />
  </Button>
)
