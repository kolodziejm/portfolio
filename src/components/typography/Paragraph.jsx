import styled from "styled-components"

export default styled.p`
  font-size: ${({ theme: { fontSizes }, small }) =>
    small ? fontSizes.xs : fontSizes.sm};
  margin: ${({ margin }) => margin};
  text-align: ${({ center }) => (center ? "center" : "left")};
  max-width: 960px;
`
