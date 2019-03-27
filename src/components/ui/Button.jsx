import styled, { css } from "styled-components"

const buttonStyles = css`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  margin: ${({ margin }) => margin};
  flex: ${({ flex }) => flex};
  display: block;
  background: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.body : colors.primary};
  border: 1px solid
    ${({ theme: { colors }, disabled }) =>
      disabled ? colors.shadow : colors.primary};
  padding: ${({ theme: { spaces } }) => `${spaces.xs} 0`};
  border-radius: ${({ theme: { borderRadiuses } }) => borderRadiuses.md};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  transition: all 0.4s;
  transition-timing-function: cubic-bezier(0.64, 0.49, 0.71, 1.08);
  text-align: center;

  &:hover {
    background: ${({ theme: { colors }, disabled }) =>
      disabled ? colors.white : colors.primary};
    color: ${({ theme: { colors }, disabled }) =>
      disabled ? colors.body : colors.white};
  }
`

export const Button = styled.button`
  ${buttonStyles};
`

export const ButtonLink = styled.a`
  ${buttonStyles};
  text-decoration: none;
`
