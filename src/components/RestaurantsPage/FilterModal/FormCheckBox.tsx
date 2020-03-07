import React from 'react';
import InputWrapper from '../../../styles/Modals/styled.inputwrapper';

interface FormCheckBoxProps {
  option: any;
  display: string;
  onChange(): void;
}

const FormCheckBox: React.FC<FormCheckBoxProps> = ({
  option,
  display,
  onChange
}) => {
  return (
    <InputWrapper>
      <input onChange={onChange} id={`${option[display]}`} type='checkbox' />
      <label htmlFor={`${option[display]}`}>{option[display]}</label>
    </InputWrapper>
  );
};

export default FormCheckBox;
