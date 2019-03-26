import styled from "styled-components"

export default styled.label`
  font-family: ${({ theme: { fonts } }) => fonts.heading};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.black};
  margin: ${({ margin }) => margin};
  display: block;
`
