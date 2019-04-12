import styled from "styled-components"
import posed from "react-pose"

const PosedP = posed.p({
  normal: { scale: 1 },
  scrolled: {
    scale: 0.85,
  },
})

export default styled(PosedP)`
  font-family: ${({ theme: { fonts } }) => fonts.heading};
  font-size: 1.9rem;
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
