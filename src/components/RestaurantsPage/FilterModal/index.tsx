import React, { useState, useEffect } from 'react';
import { Type, Area } from '../../../interfaces';
import { ModalBar } from '../../../styles/Modals/styled.modalBar';
import { ModalButton } from '../../../styles/Modals/styled.modalButton';
import CheckBoxSection from './CheckBoxSection';
import { getAreas } from '../../../api';
import { images } from '../../../styles/CardImages';
import ToggleSection from './ToggleSection';
import Loading from '../../Loading';

interface FilterModalProps {
  types: Type[];
  toggleModal(): void;
}

// TODO:  possible refactors
// formik
// yup - schema for form
// joi - (heavier schema for server)

interface formInputs {
  area: Array<number>;
  type: Array<number | string>;
  options: {
    has_activities: boolean;
    open_late: boolean;
  };
}

const FilterModal: React.FC<FilterModalProps> = ({ types, toggleModal }) => {
  const [areas, setAreas] = useState<Area[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formInput, setFormInput] = useState<formInputs>({
    area: [],
    type: [],
    options: {
      has_activities: false,
      open_late: false
    }
  });

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
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section id='modal'>
      <ModalBar bordered={true} className='modal-top'>
        <ModalButton bordered={true}>
          <img
            onClick={toggleModal}
            alt={images.close.alt}
            src={images.close.img}
          />
        </ModalButton>
        <h2>FILTER</h2>
      </ModalBar>
      <form>
        <CheckBoxSection
          title='Type'
          onChange={(input: string | number): void =>
            setFormInput({ ...formInput, type: [...formInput.type, input] })
          }
          imgUrl={images.bar.img}
          alt={images.bar.alt}
          property='type'
          data={types}
        />
        <CheckBoxSection
          title='Area'
          imgUrl={images.pin.img}
          onChange={(input: number): void =>
            setFormInput({ ...formInput, area: [...formInput.area, input] })
          }
          alt={images.pin.alt}
          property='area_name'
          data={areas}
        />
        <ToggleSection
          onChange={(option: any): void => {
            const originalOptions: any = formInput.options;
            const newState: any = {
              ...formInput,
              options: {
                ...formInput.options,
                [option]: !originalOptions[option]
              }
            };
            setFormInput(newState);
          }}
          title={'More Options'}
          data={Object.entries(formInput.options)}></ToggleSection>
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
