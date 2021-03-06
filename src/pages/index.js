import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Main from "../components/sections/Main"
import MobileMenu from "../components/ui/MobileMenu"
import Footer from "../components/sections/Footer"

import Header from "../components/sections/Header"
import DesktopMenu from "../components/ui/DesktopMenu"

const IndexPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Layout>
      <SEO
        title="Marcin Kołodziej PL"
        lang="pl-PL"
        keywords={[`portfolio`, `Marcin Kołodziej`, "web", "developer"]}
        description="Strona portfolio full stack developera. Zobacz moją pracę!"
      />
      <DesktopMenu lang="pl" />
      <MobileMenu
        lang="pl"
        open={menuOpen}
        clicked={() => setMenuOpen(false)}
      />
      <Header lang="pl" clicked={() => setMenuOpen(true)} />
      <Main lang="pl" />
      <Footer />
    </Layout>
  )
}

export default IndexPage
