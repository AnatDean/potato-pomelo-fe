import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface ModalButtonProps {
  readonly bordered?: boolean;
}

export const ModalButton = styled.button<ModalButtonProps>`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  ${({ bordered }) => {
    return  `border: solid 2px ${myTheme.colors.primary_light};`;
  }}
  padding: 0.5em;
`;
