import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface InfoPanelButtonProps {
  readonly isCurrentlyOpen?: boolean;
  readonly hasActivities?: boolean;
}
export const InfoPanelButton = styled.li<InfoPanelButtonProps>`
  background-color: white;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => {
    return props.isCurrentlyOpen || props.hasActivities
      ? myTheme.colors.secondary_light
      : myTheme.colors.neutral;
  }};
`;
