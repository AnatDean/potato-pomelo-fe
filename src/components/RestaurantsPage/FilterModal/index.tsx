import React, { useState, useEffect } from 'react';
import { Type, Area } from '../../../interfaces';
import { ModalBar } from '../../../styles/Modals/styled.modalBar';
import { ModalButton } from '../../../styles/Modals/styled.modalButton';
import CheckBoxSection from './CheckBoxSection';
import { getAreas } from '../../../api';
import { images } from '../../../styles/CardImages';

interface FilterModalProps {
  types: Type[];
}

const FilterModal: React.FC<FilterModalProps> = ({ types }) => {
  const [areas, setAreas] = useState<Area[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAreas()
      .then(areas => {
        setAreas(areas);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <section id='modal'>
      <ModalBar bordered={true} className='modal-top'>
        <ModalButton bordered={true}>
          <img alt={images.close.alt} src={images.close.img} />
        </ModalButton>
        <h2>FILTER</h2>
      </ModalBar>
      <form>
        <CheckBoxSection
          title='Types'
          imgUrl={images.bar.img}
          alt={images.bar.alt}
          property='type'
          data={types}
        />
        <CheckBoxSection
          title='Areas'
          imgUrl={images.pin.img}
          alt={images.pin.alt}
          property='area_name'
          data={areas}
        />
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
