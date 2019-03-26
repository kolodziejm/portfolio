import styled from "styled-components"

export default styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: ${({ columns, minWidth, maxWidth }) => {
    if (minWidth && maxWidth) {
      return `repeat(${columns}, minmax(${minWidth}, ${maxWidth}))`
    } else {
      return `repeat(${columns}, 1fr)`
    }
  }};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  grid-gap: ${({ theme: { spaces } }) => `${spaces.sm} ${spaces.sm}`};
  justify-content: center;
`
