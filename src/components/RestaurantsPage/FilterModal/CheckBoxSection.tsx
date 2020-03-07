import React from 'react';
import { FormSection } from '../../../styles/FormElements/styled.formSection';
import { Bar } from '../../../styles/Bars/styled.Bar';
import { ButtonList } from '../../../styles/FormElements/styled.ButtonList';
import FormCheckBox from './FormCheckBox';

interface CheckBoxSectionProps {
  title: string;
  property: string;
  data: any;
  alt?: string;
  imgUrl?: string;
  checkedValues: number[];
  onChange(input: number): void;
}
const CheckBoxSection: React.FC<CheckBoxSectionProps> = ({
  title,
  property,
  data,
  checkedValues,
  alt,
  imgUrl,
  onChange
}) => {
  return (
    <FormSection>
      <Bar className='form-bar'>
        <h2>
          {title}s {imgUrl && <img src={imgUrl} alt={alt} />}{' '}
        </h2>
      </Bar>
      <ButtonList>
        {data.map((option: any) => {
          return (
            <FormCheckBox
              key={option[`${title.toLowerCase()}_id`]}
              onChange={() => onChange(option[`${title.toLowerCase()}_id`])}
              isChecked={checkedValues.includes(
                option[`${title.toLowerCase()}_id`]
              )}
              display={property}
              option={option}
            />
          );
        })}
      </ButtonList>
    </FormSection>
  );
};

export default CheckBoxSection;
