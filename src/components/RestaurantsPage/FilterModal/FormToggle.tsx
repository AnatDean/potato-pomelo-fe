import React from 'react';
import InputWrapper from '../../../styles/FormElements/styled.inputwrapper';
import Switch from 'react-switch';
import { myTheme } from '../../../styles/my-theme';
import FormCheckBox from './FormCheckBox';

interface FormToggleProps {
  isChecked: boolean | null;
  option: string;
  onToggle(): void;
  onCheck(): void;
  checkBoxText?: string;
}

const FormToggle: React.FC<FormToggleProps> = ({
  option,
  onToggle,
  onCheck,
  isChecked,
  checkBoxText
}) => {
  const isToggleActive: boolean = isChecked === null ? false : true;
  return (
    <InputWrapper spreadItems={true}>
      <label htmlFor={`${option}toggle`} className='switch'>
        <p>{option}</p>
      </label>
      <FormCheckBox
        option={{ key: checkBoxText || "Don't care" }}
        display={'key'}
        onChange={onCheck}
        isChecked={!isToggleActive}
      />

      <Switch
        id={`${option}toggle`}
        offColor={isToggleActive ? myTheme.colors.bad : myTheme.colors.shadowed}
        height={20}
        onColor={myTheme.colors.primary_light}
        onChange={onToggle}
        checked={isChecked === true ? true : false}
      />
    </InputWrapper>
  );
};

export default FormToggle;
