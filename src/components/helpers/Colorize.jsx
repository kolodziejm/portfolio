import styled from "styled-components"

export default styled.span`
  color: ${({ color, theme: { colors } }) => {
    switch (color) {
      case "primary":
        return colors.primary
    }
  }};
`
