import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Marcin Kołodziej"
      lang="pl-PL"
      keywords={[`portfolio`, `Marcin Kołodziej`, "web", "developer"]}
    />
    <h1>Hi people</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
