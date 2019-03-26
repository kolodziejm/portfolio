import React from 'react';
import styled from 'styled-components';

import Paragraph from '../typography/Paragraph';

const Footer = styled.footer`
  padding: ${({ theme: { spaces } }) => `${spaces.md} ${spaces.xs}`};
  text-align: center;
  border-top: 1px solid ${({ theme: { colors } }) => colors.primary};
  max-width: 960px;
  margin: 0 auto;
`;

const SocialList = styled.ul`
  list-style: none;
  display: flex;
`;

const SocialItem = styled.li`
  list-style: none;
`;

const Anchor = styled.a`
  text-decoration: none;
`;

export default () => (
  <Footer>
     <Paragraph>Copyright &copy; Marcin Kołodziej {new Date().getFullYear()}</Paragraph>
  </Footer>
);