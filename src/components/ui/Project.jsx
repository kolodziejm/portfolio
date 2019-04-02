import React from "react"
import styled, { withTheme } from "styled-components"
import Img from "gatsby-image"

import BigCard from "./BigCard"
import MediumHeading from "../typography/MediumHeading"
import SmallHeading from "../typography/SmallHeading"
import Paragraph from "../typography/Paragraph"
import { ButtonLink } from "../ui/Button"
import Divider from "./Divider"

const TechList = styled.ul`
  list-style: none;
`

const TechItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  margin: ${({ theme: { spaces } }) => `0 auto ${spaces.md} auto`};
  max-width: 25rem;
  text-align: center;
`

const LinksContainer = styled.div`
  margin-bottom: 0;
  display: flex;
  justify-content: center;
`

const Image = styled(Img)`
  width: 100% !important;
  border-radius: ${({ theme: { borderRadiuses } }) =>
    borderRadiuses.md} !important;
  margin-bottom: ${({ theme: { spaces } }) => spaces.sm} !important;
`

const Project = ({
  title,
  img,
  frontendTech = [],
  backendTech = [],
  github,
  live,
  theme: { spaces },
}) => (
  <BigCard maxWidth="100%">
    <>
      <Image style={{}} fluid={img} alt={title} />
      <MediumHeading align="center" margin={`0 0 ${spaces.xs} 0`}>
        {title}
      </MediumHeading>
      <Divider margin={`0 auto ${spaces.md} auto`} />
      {frontendTech.length ? (
        <Container>
          <SmallHeading margin={`0 0 ${spaces.xs} 0`}>Front-end</SmallHeading>
          <TechList>
            {frontendTech.map(name => (
              <TechItem key={name}>
                <Paragraph>{name}</Paragraph>
              </TechItem>
            ))}
          </TechList>
        </Container>
      ) : null}
      {backendTech.length ? (
        <Container>
          <SmallHeading margin={`0 0 ${spaces.xs} 0`}>Back-end</SmallHeading>
          <TechList>
            {backendTech.map(name => (
              <TechItem key={name}>
                <Paragraph>{name}</Paragraph>
              </TechItem>
            ))}
          </TechList>
        </Container>
      ) : null}
    </>
    <LinksContainer>
      {github ? (
        <ButtonLink
          rel="noopener"
          target="_blank"
          href={github}
          flex="0 auto"
          margin={github && live ? `0 ${spaces.sm} 0 0` : 0}
          width="12rem"
        >
          Github
        </ButtonLink>
      ) : null}
      {live ? (
        <ButtonLink
          rel="noopener"
          target="_blank"
          href={live}
          flex="0 auto"
          width="12rem"
        >
          Live
        </ButtonLink>
      ) : null}
    </LinksContainer>
  </BigCard>
)

export default withTheme(Project)
