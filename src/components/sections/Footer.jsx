import React from 'react';
import styled from 'styled-components';

import linkedinIcon from '../../images/linkedin.svg';
import githubIcon from '../../images/github.svg';

import Paragraph from '../typography/Paragraph';

const Footer = styled.footer`
  padding: ${({ theme: { spaces } }) => `${spaces.md} ${spaces.xs}`};
  text-align: center;
  border-top: 1px solid ${({ theme: { colors } }) => colors.primary};
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tabPort}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const SocialList = styled.ul`
  list-style: none;
  display: flex;
`;

const SocialItem = styled.li`
  list-style: none;
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  margin: ${({ margin }) => margin};
`;

const Anchor = styled.a`
  text-decoration: none;
`;

const Link = ({ href, src, alt, margin }) => (
  <SocialItem margin={margin}>
    <Anchor href={href} target="_blank" rel="noopener">
      <img width="100%" src={src} alt={alt} />
    </Anchor>
  </SocialItem>
);

export default () => (
  <Footer>
    <SocialList>
      <Link 
      margin="0 16px 16px 0" 
      href="https://github.com/kolodziejm" 
      src={githubIcon} 
      alt="Github" />
      <Link 
      href="https://www.linkedin.com/in/markolo"
      src={linkedinIcon} 
      alt="linkedIn"  />
    </SocialList>
     <Paragraph>Copyright &copy; Marcin Kołodziej {new Date().getFullYear()}</Paragraph>
  </Footer>
);