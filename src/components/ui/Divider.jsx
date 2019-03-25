import styled from "styled-components"

export default styled.hr`
  display: block;
  width: 8rem;
  border: 1px solid ${({ theme: { colors } }) => colors.primary};
  height: 5px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: 50px;
  margin: ${({ margin }) => margin};
`
