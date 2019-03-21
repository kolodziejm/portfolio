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

  body {
    font-family: 'Roboto', sans-serif;
    color: #555;
    box-sizing: border-box;
    overflow-x: hidden;
    line-height: 1.25;
    font-kerning: normal;
  }
`

export default GlobalStyles
