import React from 'react';
import { ModalFormSection } from '../../../styles/Modals/styled.modalFormSection';
import { ModalBar } from '../../../styles/Modals/styled.modalBar';
import { ModalButtonList } from '../../../styles/Modals/styled.modalButtonList';
import FormCheckBox from './FormCheckBox';

interface CheckBoxSectionProps {
  title: string;
  data: any;
}
const CheckBoxSection: React.FC<CheckBoxSectionProps> = ({ title, data }) => {
  return (
    <ModalFormSection>
      <ModalBar className='form-bar'>
        <h2>{`${title[0].toUpperCase()}${title.slice(1)}s`}</h2>
      </ModalBar>
      <ModalButtonList>
        {data.map((option: any) => {
          return <FormCheckBox display={title} option={option} />;
        })}
      </ModalButtonList>
    </ModalFormSection>
  );
};

export default CheckBoxSection;
