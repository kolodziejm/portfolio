import styled from "styled-components"

export default styled.section`
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ theme: { spaces } }) => spaces.gi};
`
