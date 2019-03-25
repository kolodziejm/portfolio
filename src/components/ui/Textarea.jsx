import styled from 'styled-components';

export default styled.textarea`
  margin: ${({ margin }) => margin};
  height: auto;
  width: ${({ width }) => width ? width : '100%'};
  min-height: 16rem;
  border-radius: ${({ theme: { borderRadiuses } }) => borderRadiuses.md};
  border: 1px solid ${({ theme: { colors } }) => colors.shadow};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  color: ${({ theme: { colors } }) => colors.body};
  font-family: ${({ theme: { fonts } }) => fonts.body};
  padding: ${({ theme: { spaces } }) => `${spaces.xs} ${spaces.xxs} ${spaces.xs} ${spaces.sm}`};
  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.64, 0.49, 0.71, 1.08);
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme: { colors } }) => colors.primary};
  }
`;