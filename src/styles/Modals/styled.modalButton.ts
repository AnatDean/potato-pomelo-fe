import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface ModalButtonProps {
  readonly bordered?: boolean;
  readonly round?: boolean;
}

export const ModalButton = styled.button<ModalButtonProps>`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  ${({ bordered }) => {
    return `border: solid 2px ${myTheme.colors.primary_light};`;
  }}
  ${({ round }) => {
    if (round) return `border-radius: 30px;`;
  }}
  padding: 0.5em;
  margin: 0.4em;
`;
