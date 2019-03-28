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
        title="Marcin Kołodziej"
        lang="en"
        keywords={[`portfolio`, `Marcin Kołodziej`, "web", "developer"]}
        description="Full stack developer's portfolio website. Check out my work!"
      />
      <DesktopMenu />
      <MobileMenu open={menuOpen} clicked={() => setMenuOpen(false)} />
      <Header clicked={() => setMenuOpen(true)} />
      <Main lang="en" />
      <Footer />
    </Layout>
  )
}

export default IndexPage
