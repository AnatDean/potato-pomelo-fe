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
     align-items: center;
      justify-content: space-around;
     padding-right: 0.3em;
    `
    );
  }}
`;

export default InputWrapper;
