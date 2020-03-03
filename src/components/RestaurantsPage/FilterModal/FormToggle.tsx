import React, { useState } from 'react';
import InputWrapper from '../../../styles/Modals/styled.inputwrapper';
import Switch from 'react-switch';
import { myTheme } from '../../../styles/my-theme';

interface FormToggleProps {
  option: any;
}

const FormToggle: React.FC<FormToggleProps> = ({ option }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

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
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
      />
    </InputWrapper>
  );
};

export default FormToggle;
