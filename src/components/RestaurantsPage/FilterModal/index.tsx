import React from 'react';
import { Type } from '../../../interfaces';
import { ModalBar } from '../../../styles/Modals/styled.modalBar';
import { ModalButton } from '../../../styles/Modals/styled.modalButton';
import { ModalFormSection } from '../../../styles/Modals/styled.modalFormSection';
import { ModalButtonList } from '../../../styles/Modals/styled.modalButtonList';
import FormCheckBox from './FormCheckBox';
import CheckBoxSection from './CheckBoxSection';

interface FilterModalProps {
  types: Type[];
}

const FilterModal: React.FC<FilterModalProps> = ({ types }) => {
  return (
    <section id='modal'>
      <ModalBar bordered={true} className='modal-top'>
        <ModalButton bordered={true}>
          <p>X</p>
        </ModalButton>
        <h2>FILTER</h2>
      </ModalBar>
      <form>
        <CheckBoxSection title='type' data={types} />
      </form>
      <ModalBar bordered={true} className='modal-bottom'>
        <ModalButton bordered={true}>
          <p>clear</p>
        </ModalButton>
        <ModalButton bordered={true}>
          <p>GO</p>
        </ModalButton>
      </ModalBar>
    </section>
  );
};

export default FilterModal;
