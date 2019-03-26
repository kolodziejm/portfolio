import styled from 'styled-components';

export default styled.form`
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '100%'};
  margin: ${({ margin }) => margin}; 
`;