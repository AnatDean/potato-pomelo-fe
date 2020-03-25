import styled from 'styled-components';
import { myTheme } from '../my-theme';

interface InputWrapperProps {
  spreadItems?: boolean;
  type?: 'text';
}
export const InputWrapper = styled.section<InputWrapperProps>`
  padding: 0.3em;
  height: fit-content;
  width: ${props => {
    return props.spreadItems || props.type === 'text' ? '100%' : 'fit-content';
  }};
  ${props => {
    return (
      props.spreadItems &&
      `
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding-right: 0.3em;
    `
    );
  }}
  ${props => {
    return (
      props.type === 'text' &&
      `
     display: flex;
     flex-direction: column;
     align-items: start;
     margin: 1.5em;
     
    
    `
    );
  }}
`;

export default InputWrapper;
