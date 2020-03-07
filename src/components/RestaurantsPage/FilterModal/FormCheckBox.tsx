import React from 'react';
import InputWrapper from '../../../styles/FormElements/styled.inputwrapper';

interface FormCheckBoxProps {
  option: any;
  display: string;
  onChange(): void;
  isChecked: boolean;
}

const FormCheckBox: React.FC<FormCheckBoxProps> = ({
  option,
  display,
  onChange,
  isChecked
}) => {
  return (
    <InputWrapper>
      <input
        checked={isChecked}
        onChange={onChange}
        id={`${option[display]}`}
        type='checkbox'
      />
      <label htmlFor={`${option[display]}`}>{option[display]}</label>
    </InputWrapper>
  );
};

export default FormCheckBox;
