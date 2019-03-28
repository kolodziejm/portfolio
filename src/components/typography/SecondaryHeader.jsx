import styled from "styled-components"

export default styled.h2`
  font-family: ${({ theme: { fonts } }) => fonts.heading};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  font-weight: 300;
  margin: ${({ margin }) => margin};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tabPort}) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  }
`
