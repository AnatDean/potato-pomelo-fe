import styled from 'styled-components';

interface InputWrapperProps {
  spreadItems?: boolean;
}
export const InputWrapper = styled.section<InputWrapperProps>`
  padding: 0.3em;
  height: 1.3em;
  width: ${props => {
    return props.spreadItems ? '100%' : 'fit-content';
  }};
  ${props => {
    return (
      props.spreadItems &&
      `
     display: flex;
     justify-content: space-between;
     padding-right: 1em;
    `
    );
  }}
`;

export default InputWrapper;
