import React from "react"

import GlobalStyles from "../GlobalStyles"

export default ({ children }) => (
  <div>
    <GlobalStyles />
    {children}
  </div>
)
