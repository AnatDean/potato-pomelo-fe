import React from 'react';
import { ModalFormSection } from '../../../styles/Modals/styled.modalFormSection';
import { ModalBar } from '../../../styles/Modals/styled.modalBar';
import { ModalButtonList } from '../../../styles/Modals/styled.modalButtonList';
import FormCheckBox from './FormCheckBox';
import FormToggle from './FormToggle';

interface ToggleSectionProps {
  title: string;
  data: any;
}

const ToggleSection: React.FC<ToggleSectionProps> = ({ title, data }) => {
  return (
    <ModalFormSection>
      <ModalBar className='form-bar'>
        <h2>{title}</h2>
      </ModalBar>
      <ModalButtonList>
        {data.map((option: any) => {
          return <FormToggle option={option} />;
        })}
      </ModalButtonList>
    </ModalFormSection>
  );
};

export default ToggleSection;
