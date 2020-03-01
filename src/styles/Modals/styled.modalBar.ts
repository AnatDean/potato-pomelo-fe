import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface ModalBarProps {
  bordered?: boolean;
}

export const ModalBar = styled.section<ModalBarProps>`
  width: 100%;
  height: 10vh;
  background-color: ${myTheme.colors.neutral};
  ${props => {
    return (
      props.bordered &&
      `border-bottom: solid 2px ${myTheme.colors.primary_light};`
    );
  }}
  padding-top: 0.5em;
`;
