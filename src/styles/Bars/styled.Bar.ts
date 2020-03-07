import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface BarProps {
  bordered?: boolean;
  noMargin?: boolean;
  fill?: boolean;
}

export const Bar = styled.section<BarProps>`
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
