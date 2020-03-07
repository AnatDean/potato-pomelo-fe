import React, { ReactNode } from 'react';
import { FormSection } from '../../../styles/FormElements/styled.formSection';
import { Bar } from '../../../styles/Bars/styled.Bar';
import { ButtonList } from '../../../styles/FormElements/styled.ButtonList';
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
    <FormSection>
      <Bar className='form-bar'>
        <h2>{title}</h2>
      </Bar>
      <ButtonList>{data.map(renderToggle)}</ButtonList>
    </FormSection>
  );
};

export default ToggleSection;
