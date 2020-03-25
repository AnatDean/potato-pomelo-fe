import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface InputProps {
  // value: String;
}
const Input = styled.input<InputProps>`
  height: 100%;
  width: 75%;
  font-size: 100%;
  border: 0;
  padding-top: 0.5em;
  border-bottom: 2px solid ${myTheme.colors.primary_light};
  outline: 0;
`;

export default Input;
