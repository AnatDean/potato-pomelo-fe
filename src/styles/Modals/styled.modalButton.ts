import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface ModalButtonProps {
  bordered?: boolean;
  round?: boolean;
  type?: string;
}

export const ModalButton = styled.button.attrs<ModalButtonProps>(
  ({ type, ...rest }) => {
    return { type: type || '', className: 'custom-button', ...rest };
  }
)<ModalButtonProps>`
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
