import React from 'react';
import styled from 'styled-components';

import BigCard from './BigCard';
import MediumHeading from '../typography/MediumHeading';
import SmallHeading from '../typography/SmallHeading';
import Paragraph from '../typography/Paragraph';
import { ButtonLink } from '../ui/Button';

const TechList = styled.ul`
  list-style: none;
`;

const TechItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: ${({ theme: { spaces } }) => `0 auto ${spaces.md} auto`};
  max-width: 25rem;
  text-align: center;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  border-radius: ${({ theme: { borderRadiuses } }) => borderRadiuses.md};
  margin-bottom: ${({ theme: { spaces } }) => spaces.xs};
`;

export default ({ title, img, frontendTech = [], backendTech = [], github, live }) => (
    <BigCard maxWidth="45rem">
      <Image src={img} alt={title}/>
      <MediumHeading align="center" margin="0 0 16px 0" >{title}</MediumHeading>
      {frontendTech.length ? (
        <Container>
          <SmallHeading margin="0 0 8px 0">Front-end</SmallHeading>
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
          <SmallHeading margin="0 0 8px 0">Back-end</SmallHeading>
          <TechList>
            {backendTech.map(name => (
              <TechItem key={name}>
                <Paragraph>{name}</Paragraph>
              </TechItem>
            ))}
          </TechList>
        </Container>
      ) : null}
      <LinksContainer>
          <ButtonLink 
          rel="noopener"
          target="_blank" 
          href={github} 
          flex="0 auto" 
          margin="0 16px 0 0" 
          width="12rem">
              Github
          </ButtonLink>
          <ButtonLink 
           rel="noopener"
          target="_blank" 
          href={live} 
          flex="0 auto" 
          width="12rem">
              Live
          </ButtonLink>
      </LinksContainer>
    </BigCard>
);