import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  &:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    /* font-size: 90%; */
  }

  body, #___gatsby {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme: { colors } }) => colors.body};
    box-sizing: border-box;
    overflow-x: hidden;
    line-height: 1.25;
    font-kerning: normal;
  }

  ::selection {
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
  }
`

export default GlobalStyles
