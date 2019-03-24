import React from 'react';
import styled from 'styled-components';

import BigCard from './BigCard';
import MediumHeading from '../typography/MediumHeading';
import SmallHeading from '../typography/SmallHeading';
import Paragraph from '../typography/Paragraph';
import { ButtonLink } from '../ui/Button';

const TechList = styled.ul`
  
`;

const TechItem = styled.li`
  margin-left: ${({ theme: { spaces } }) => spaces.sm};
`;

const Container = styled.div`
  margin: ${({ theme: { spaces } }) => `0 0 ${spaces.sm} 0`};
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// max-width inside BigCard
const Content = styled.div` 

`;

export default ({ title, img, frontendTech = [], backendTech = [], github, live }) => (
    <BigCard>
      <MediumHeading align="center">{title}</MediumHeading>
      <img src={img} alt={title}/>
      {frontendTech.length ? (
        <Container>
          <SmallHeading>Front-end</SmallHeading>
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
        <>
          <SmallHeading>Back-end</SmallHeading>
          <TechList>
            {backendTech.map(name => (
              <TechItem key={name}>
                <Paragraph>{name}</Paragraph>
              </TechItem>
            ))}
          </TechList>
        </>
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