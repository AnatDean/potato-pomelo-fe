import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface TypesPanelProps {
  readonly highlighted: boolean;
}

export const TypesPanel = styled.li<TypesPanelProps>`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 2px ${myTheme.colors.neutral};

  background-color: ${props => {
    return props.highlighted
      ? myTheme.colors.highlighted
      : myTheme.colors.neutral;
  }};
`;
