import styled from 'styled-components';
import { myTheme } from '../my-theme';

export const FormSection = styled.section`
  display: block;
  width: 100%;
  height: fit-content;
  background-color: white;
  border-bottom: solid 2px ${myTheme.colors.neutral};
  padding-top: 0.5em;
`;
