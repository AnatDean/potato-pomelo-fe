import React, { ReactNode } from 'react';
import { ModalFormSection } from '../../../styles/Modals/styled.modalFormSection';
import { ModalBar } from '../../../styles/Modals/styled.modalBar';
import { ModalButtonList } from '../../../styles/Modals/styled.modalButtonList';
import FormToggle from './FormToggle';

interface ToggleSectionProps {
  title: string;
  data: any;
  onToggle(option: any): void;
  onCheck(option: any): void;
}

const ToggleSection: React.FC<ToggleSectionProps> = ({
  title,
  data,
  onToggle,
  onCheck
}) => {
  const renderToggle = (toggleOption: any): ReactNode => {
    const option: string = toggleOption[0];
    const isChecked: boolean | null = toggleOption[1];
    return (
      <FormToggle
        key={option}
        onToggle={(): void => onToggle(option)}
        onCheck={(): void => onCheck(option)}
        isChecked={isChecked}
        option={option}
      />
    );
  };
  return (
    <ModalFormSection>
      <ModalBar className='form-bar'>
        <h2>{title}</h2>
      </ModalBar>
      <ModalButtonList>{data.map(renderToggle)}</ModalButtonList>
    </ModalFormSection>
  );
};

export default ToggleSection;
