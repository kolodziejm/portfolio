import styled from "styled-components"

export default styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  margin: ${({ margin }) => margin};
`
