import styled from 'styled-components';
import { myTheme } from '../my-theme';

export const PageInfoBar = styled.section`
  width: 100%;
  height: fit-content;
  padding: 0.5em;
  background-color: white;
  display: flex;
  border-bottom: solid 1px ${myTheme.colors.shadowed};
`;
