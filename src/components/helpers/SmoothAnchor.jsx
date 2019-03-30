import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default styled(AnchorLink)`
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.64, 0.49, 0.71, 1.08);

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`
