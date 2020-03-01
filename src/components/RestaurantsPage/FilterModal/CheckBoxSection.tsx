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
}
const CheckBoxSection: React.FC<CheckBoxSectionProps> = ({
  title,
  property,
  data,
  alt,
  imgUrl
}) => {
  return (
    <ModalFormSection>
      <ModalBar className='form-bar'>
        <h2>
          {title} {imgUrl && <img src={imgUrl} alt={alt} />}{' '}
        </h2>
      </ModalBar>
      <ModalButtonList>
        {data.map((option: any) => {
          return <FormCheckBox display={property} option={option} />;
        })}
      </ModalButtonList>
    </ModalFormSection>
  );
};

export default CheckBoxSection;
