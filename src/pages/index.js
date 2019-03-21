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
  </Layout>
)

export default IndexPage
