import styled from 'styled-components';

export default styled.li`
  list-style: none;
  box-shadow: 0 3px 6px ${({ theme: { colors } }) => colors.shadow};
  border-radius: ${({ theme: { borderRadiuses } }) => borderRadiuses.lg};
  padding: ${({ theme: { spaces } }) => `${spaces.md} ${spaces.sm}`};
  max-width: ${({ maxWidth }) => maxWidth};
`;