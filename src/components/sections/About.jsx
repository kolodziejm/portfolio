import React from 'react';
import { withTheme } from 'styled-components';

import Section from './Section';
import Content from '../helpers/Content';
import SectionTitle from '../typography/SectionTitle';
import Paragraph from '../typography/Paragraph';

const About = ({ theme: { spaces }, lang }) => (
  <Section id="about">
          <Content>
            <SectionTitle>O mnie</SectionTitle>
            <Paragraph margin={`0 0 ${spaces.md} 0`}>
              Tworzenie oprogramowania to moja pasja, którą z przyjemnością
              rozwijam każdego dnia poprzez budowanie aplikacji oraz naukę
              nowych technologii.
            </Paragraph>
            <Paragraph>
              Specjalizuję się w technologiach front-endowych, jednak w trakcie
              tworzenia aplikacji poznałem również technologie back-endowe oraz
              dobre praktyki związane z UI / UX
            </Paragraph>
          </Content>
  </Section>
);

export default withTheme(About);