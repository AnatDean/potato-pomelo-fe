import React from 'react';
import { ModalFormSection } from '../../../styles/Modals/styled.modalFormSection';
import { ModalBar } from '../../../styles/Modals/styled.modalBar';
import { ModalButtonList } from '../../../styles/Modals/styled.modalButtonList';
import FormCheckBox from './FormCheckBox';

interface CheckBoxSectionProps {
  title: string;
  property: string;
  data: any;
  alt?: string;
  imgUrl?: string;
  onChange(input: string | number): void;
}
const CheckBoxSection: React.FC<CheckBoxSectionProps> = ({
  title,
  property,
  data,
  alt,
  imgUrl,
  onChange
}) => {
  return (
    <ModalFormSection>
      <ModalBar className='form-bar'>
        <h2>
          {title}s {imgUrl && <img src={imgUrl} alt={alt} />}{' '}
        </h2>
      </ModalBar>
      <ModalButtonList>
        {data.map((option: any) => {
          return (
            <FormCheckBox
              key={option[`${title.toLowerCase()}_id`]}
              onChange={() => onChange(option[`${title.toLowerCase()}_id`])}
              display={property}
              option={option}
            />
          );
        })}
      </ModalButtonList>
    </ModalFormSection>
  );
};

export default CheckBoxSection;
