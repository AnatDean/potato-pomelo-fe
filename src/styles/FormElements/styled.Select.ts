import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface SelectProps {}

export const Select = styled.select.attrs<SelectProps>(({ ...rest }) => {
  return { className: 'custom-select', ...rest };
})<SelectProps>`
  width: 50%;
  height: fit-content;
  border: 1px solid ${myTheme.colors.primary_light};
  padding: 0.5em;
  font-weight: bold;
  font-size: 1em;
  margin: 0.4em;
`;

interface OptionProps {
  value: string | number;
}

// TRYING TO GET OPTION HOVER COLOUR CORRECT

// export const StyledOption = styled.svg`
//   flex: none;
//   transition: fill 0.25s;
//   width: 48px;
//   height: 48px;

//   ${Option}:hover & {
//     fill: ${myTheme.colors.primary_light};
//   }
// `;
