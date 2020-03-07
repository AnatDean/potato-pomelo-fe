import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface ButtonProps {
  bordered?: boolean;
  round?: boolean;
  type?: string;
}

export const Button = styled.button.attrs<ButtonProps>(({ type, ...rest }) => {
  return { type: type || '', className: 'custom-button', ...rest };
})<ButtonProps>`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  ${({ bordered }) => {
    if (bordered) return `border: solid 2px ${myTheme.colors.neutral};`;
  }}
  ${({ round }) => {
    if (round) return `border-radius: 30px;`;
  }}
  padding: 0.5em;
  margin: 0.4em;
`;
