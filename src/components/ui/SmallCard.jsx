import React from 'react';
import styled from 'styled-components';

import Paragraph from '../typography/Paragraph';

const Item = styled.li`
  list-style: none;
  max-width: 8rem;
  height: 9.6rem;
  box-shadow: 0 2px 4px ${({ theme: { colors } }) => colors.shadow};
  border-radius: ${({ theme: { borderRadiuses } }) => borderRadiuses.sm};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 4rem;
  height: 4rem;
  margin-bottom: ${({ theme: { spaces } }) => spaces.xxs};
`;

export default ({ img, alt, text }) => (
  <Item>
    <Image src={img} alt={`${text} icon`}/>
    <Paragraph small >
      {text}
    </Paragraph>
  </Item>
);