import styled, { css } from "styled-components"

const buttonStyles = css`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  display: block;
  background: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.primary};
  border: 1px solid ${({ theme: { colors } }) => colors.primary};
  padding: ${({ theme: { spaces } }) => `${spaces.xs} 0`};
  border-radius: ${({ theme: { borderRadiuses } }) => borderRadiuses.md};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  transition: all 0.4s;
  transition-timing-function: cubic-bezier(0.64, 0.49, 0.71, 1.08);

  &:hover {
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
  }
`

export const Button = styled.button`
  ${buttonStyles};
`

export const ButtonLink = styled.a`
  ${buttonStyles};
  text-decoration: none;
`
