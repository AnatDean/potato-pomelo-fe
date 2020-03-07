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

enum FieldForArrays {
  area = 'area',
  type = 'type'
}

// TODO:  possible refactors
// formik
// yup - schema for form
// joi - (heavier schema for server)

interface formInputs {
  area: Array<number>;
  type: Array<number>;
  options: {
    has_activities: boolean;
    open_late: boolean;
  };
}

const FilterModal: React.FC<FilterModalProps> = ({ types, toggleModal }) => {
  const defaultFormState: formInputs = {
    area: [],
    type: [],
    options: {
      has_activities: false,
      open_late: false
    }
  };

  const [areas, setAreas] = useState<Area[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formInput, setFormInput] = useState<formInputs>(defaultFormState);

  const toggleItemsInFields: any = (field: FieldForArrays, input: number) => {
    const currentField: any = formInput[field];
    const inputAlreadySelected: boolean = currentField.includes(input);

    const newInput = !inputAlreadySelected
      ? [...currentField, input]
      : currentField.filter((item: number): boolean => item !== input);

    setFormInput({ ...formInput, [field]: newInput });
  };

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
          onChange={(input: number): void => {
            toggleItemsInFields('type', input);
          }}
          checkedValues={formInput.type}
          imgUrl={images.bar.img}
          alt={images.bar.alt}
          property='type'
          data={types}
        />
        <CheckBoxSection
          title='Area'
          imgUrl={images.pin.img}
          checkedValues={formInput.area}
          onChange={(input: number): void => toggleItemsInFields('area', input)}
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
        <ModalButton
          onClick={() => setFormInput(defaultFormState)}
          bordered={true}>
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
