const spacingUnit = 8

export default {
  colors: {
    primary: "#6320EE",
    black: "#000",
    white: "#FFF",
    light: "#FAFAFA",
    shadow: "#BEBEBE",
    body: "#555",
    error: "#F63E02",
    errorText: "#6B0504",
    success: "#38A700",
    successText: "#386C0B",
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Roboto, sans-serif",
  },
  fontSizes: {
    xs: "1.25rem",
    sm: "1.6rem",
    md: "2rem",
    lg: "2.56rem",
    xl: "3.84rem",
    xxl: "6.4rem",
    hg: "9.6rem",
  },
  borderRadiuses: {
    sm: "2px",
    md: "4px",
    lg: "8px",
  },
  spacingUnit,
  spaces: {
    xxs: `${spacingUnit / 2}px`,
    xs: `${spacingUnit}px`,
    sm: `${spacingUnit * 2}px`,
    md: `${spacingUnit * 3}px`,
    lg: `${spacingUnit * 4}px`,
    xl: `${spacingUnit * 5}px`,
    xxl: `${spacingUnit * 6}px`,
    hg: `${spacingUnit * 8}px`,
    gi: `${spacingUnit * 12}px`,
  },
  breakpoints: {
    tabPort: "37.5em", // 600px
    tabLand: "56.25em", // 900px
    desktop: "75em", // 1200px
  },
}
