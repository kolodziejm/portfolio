import React from "react"
import styled from "styled-components"

import LargeHeading from "./LargeHeading"
import Divider from "../ui/Divider"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme: { spaces } }) => spaces.md};
`

export default ({ children }) => (
  <Container>
    <LargeHeading margin="0 0 8px 0">{children}</LargeHeading>
    <Divider />
  </Container>
)
