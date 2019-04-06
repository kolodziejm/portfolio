import styled from "styled-components"

export default styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.heading};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
  font-weight: bold;
  margin: ${({ margin }) => margin};
  color: ${({ theme: { colors } }) => colors.black};
  line-height: 1.15;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tabPort}) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.hg};
  }
`
