import React from 'react';
import { Type } from '../../../interfaces';
import InputWrapper from '../../../styles/Modals/styled.checkbox';

interface FormCheckBoxProps {
  type: Type;
}

const FormCheckBox: React.FC<FormCheckBoxProps> = ({ type }) => {
  return (
    <InputWrapper>
      <input id={`${type.type}`} type='checkbox' />
      <label htmlFor={`${type.type}`}>{type.type}</label>
    </InputWrapper>
  );
};

export default FormCheckBox;
