import styled from 'styled-components';
import { myTheme } from '../my-theme';

export const ModalFormSection = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${myTheme.colors.neutral};
  border-bottom: solid 2px ${myTheme.colors.primary_light};
  padding-top: 0.5em;
`;
