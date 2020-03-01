import React from 'react';
import { Type } from '../../../interfaces';
import InputWrapper from '../../../styles/Modals/styled.checkbox';

interface FormCheckBoxProps {
  option: any;
  display: string;
}

const FormCheckBox: React.FC<FormCheckBoxProps> = ({ option, display }) => {
  return (
    <InputWrapper>
      <input id={`${option[display]}`} type='checkbox' />
      <label htmlFor={`${option[display]}`}>{option[display]}</label>
    </InputWrapper>
  );
};

export default FormCheckBox;
