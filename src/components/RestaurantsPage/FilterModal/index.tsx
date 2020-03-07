import React, { useState, useEffect } from 'react';
import { Type, Area } from '../../../interfaces';
import { Bar } from '../../../styles/Bars/styled.Bar';
import { Button } from '../../../styles/FormElements/styled.Button';
import CheckBoxSection from './CheckBoxSection';
import { getAreas } from '../../../api';
import { images } from '../../../styles/CardImages';
import ToggleSection from './ToggleSection';
import Loading from '../../Loading';

interface FilterProps {
  types: Type[];
  filterRestaurants(formInput: any): void;
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
    has_activities: boolean | null;
    open_late: boolean | null;
  };
}

const Filter: React.FC<FilterProps> = ({
  types,
  toggleModal,
  filterRestaurants
}) => {
  const defaultFormState: formInputs = {
    area: [],
    type: [],
    options: {
      has_activities: null,
      open_late: null
    }
  };

  const [areas, setAreas] = useState<Area[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formInput, setFormInput] = useState<formInputs>(defaultFormState);

  const checkItemsFields: any = (field: FieldForArrays, input: number) => {
    const currentField: any = formInput[field];
    const inputAlreadySelected: boolean = currentField.includes(input);

    const newInput = !inputAlreadySelected
      ? [...currentField, input]
      : currentField.filter((item: number): boolean => item !== input);

    setFormInput({ ...formInput, [field]: newInput });
  };

  const handleToggle = (option: any): void => {
    const originalOptions: any = formInput.options;
    const newState: any = {
      ...formInput,
      options: {
        ...formInput.options,
        [option]: !originalOptions[option]
      }
    };
    setFormInput(newState);
  };

  const handleActivateToggle = (option: any): void => {
    const originalOptions: any = formInput.options;
    const newState: any = {
      ...formInput,
      options: {
        ...formInput.options,
        [option]: originalOptions[option] === null ? false : null
      }
    };
    setFormInput(newState);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submittedQuery = {
      type: formInput.type.length ? formInput.type.join(',') : null,
      area: formInput.area.length ? formInput.area.join(',') : null,
      ...formInput.options
    };

    filterRestaurants(submittedQuery);
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
    <>
      <Bar fill={true} noMargin={true} bordered={true} className='modal-top'>
        <Button onClick={toggleModal}>
          <p id='button-close'>{'✖️'}</p>
        </Button>
        <h2>FILTER</h2>
      </Bar>
      <form onSubmit={handleSubmit}>
        <CheckBoxSection
          title='Type'
          onChange={(input: number): void => {
            checkItemsFields('type', input);
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
          onChange={(input: number): void => checkItemsFields('area', input)}
          alt={images.pin.alt}
          property='area_name'
          data={areas}
        />
        <ToggleSection
          onToggle={handleToggle}
          onCheck={handleActivateToggle}
          title={'More Options'}
          data={Object.entries(formInput.options)}></ToggleSection>

        <Bar bordered={true} fill={true} className='modal-bottom'>
          <Button
            type={'reset'}
            onClick={() => setFormInput(defaultFormState)}
            bordered={true}>
            <p>clear</p>
          </Button>
          <Button type={'submit'} bordered={true}>
            <p>GO</p>
          </Button>
        </Bar>
      </form>
    </>
  );
};

export default Filter;
