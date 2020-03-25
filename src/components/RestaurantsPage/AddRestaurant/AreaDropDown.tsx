import React from 'react';
import { Area } from '../../../interfaces';
import { FormSection } from '../../../styles/FormElements/styled.formSection';
import { Bar } from '../../../styles/Bars/styled.Bar';
import InputWrapper from '../../../styles/FormElements/styled.inputwrapper';

interface DropDownProps {
  areas: Area[];
  title: string;
  img: string;
  alt: string;
  onChange(value: number): void;
}
const DropDown: React.FC<DropDownProps> = ({
  areas,
  title,
  img,
  alt,
  onChange
}) => {
  const renderDropDownOption = (area: Area): any => {
    return (
      <option value={area.area_id} key={area.area_id}>
        {area.area_name}
      </option>
    );
  };
  return (
    <FormSection>
      <InputWrapper type='text'>
        <Bar className='form-bar'>
          <label htmlFor='area-input'>
            <h2>
              {title} <img src={img} alt={alt} />
            </h2>
          </label>
        </Bar>

        <select
          onChange={(e): void => onChange(+e.target.value)}
          id='area-input'>
          <option value='' selected disabled hidden>
            Choose here
          </option>
          {areas.map(renderDropDownOption)}
        </select>
      </InputWrapper>
    </FormSection>
  );
};

export default DropDown;
