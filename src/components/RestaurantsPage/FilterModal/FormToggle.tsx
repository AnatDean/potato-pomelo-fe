import React from 'react';
import InputWrapper from '../../../styles/Modals/styled.inputwrapper';
import Switch from 'react-switch';
import { myTheme } from '../../../styles/my-theme';

interface FormToggleProps {
  isChecked: boolean;
  option: string;
  onChange(): void;
}

const FormToggle: React.FC<FormToggleProps> = ({
  option,
  onChange,
  isChecked
}) => {
  return (
    <InputWrapper spreadItems={true}>
      <label htmlFor={`${option}toggle`} className='switch'>
        <p>{option}</p>
      </label>
      <Switch
        id={`${option}toggle`}
        offColor={myTheme.colors.shadowed}
        height={20}
        onColor={myTheme.colors.primary_light}
        onChange={onChange}
        checked={isChecked}
      />
    </InputWrapper>
  );
};

export default FormToggle;
