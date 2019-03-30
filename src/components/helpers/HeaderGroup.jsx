import styled from "styled-components"
import posed from "react-pose"

const Hgroup = posed.hgroup({
  normal: { scale: 1 },
  scrolled: { scale: 0.7 },
})

export default styled(Hgroup)`
  margin: ${({ margin }) => margin};
`
