import styled from 'styled-components';
import { myTheme } from './my-theme';

export const Nav = styled.nav`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  border-bottom: solid 1px ${myTheme.colors.shadowed};
  border-top: solid 1px ${myTheme.colors.shadowed};
`;
