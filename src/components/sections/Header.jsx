import styled from "styled-components"

export default styled.header`
  text-align: center;
  padding: ${({ theme: { spaces } }) => spaces.xs};
  height: 100vh;
  min-height: 568px;
  position: relative;
`
