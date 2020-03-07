import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface ModalBarProps {
  bordered?: boolean;
  noMargin?: boolean;
  fill?: boolean;
}

export const ModalBar = styled.section<ModalBarProps>`
  width: 100%;
  height: fit-content;
  background-color: ${props => {
    return props.fill ? myTheme.colors.secondary_light : 'white';
  }};
  ${props => {
    return (
      props.bordered && `border-bottom: solid 2px ${myTheme.colors.neutral};`
    );
  }}
  padding-top: 0.5em;
  ${props => {
    if (!props.noMargin) {
      return `margin-bottom: 3vh;`;
    }
  }}

  align-items: center;
`;
