import styled from "styled-components"
import posed from "react-pose"

const PosedH4 = posed.h4({
  normal: { scale: 1 },
  scrolled: {
    scale: 0.8,
  },
})

export default styled(PosedH4)`
  font-family: ${({ theme: { fonts } }) => fonts.heading};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.black};
  text-align: ${({ align }) => {
    switch (align) {
      case "center":
        return "center"
      case "right":
        return "right"
      default:
        return "left"
    }
  }};
  margin: ${({ margin }) => margin};
`
