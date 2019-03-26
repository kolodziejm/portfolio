import styled from "styled-components"

export default styled.h5`
  font-family: ${({ theme: { fonts } }) => fonts.heading};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.black};
  text-align: ${({ align }) => {
    switch (align) {
      case "center":
        return "center"
      case "right":
        return "right"
    }
  }};
  margin: ${({ margin }) => margin};
`
