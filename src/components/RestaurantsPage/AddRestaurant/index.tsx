import React, { useState, useEffect, ReactNode } from 'react';
import { Bar } from '../../../styles/Bars/styled.Bar';
import { Button } from '../../../styles/FormElements/styled.Button';
import InputWrapper from '../../../styles/FormElements/styled.inputwrapper';
import Input from '../../../styles/FormElements/styled.input';
import { Area, Type } from '../../../interfaces';
import Loading from '../../Loading';
import { getAreas, getTypes, postRestaurant } from '../../../api';
import { images } from '../../../styles/CardImages';
import DropDown from './AreaDropDown';
import CheckBoxSection from '../FilterModal/CheckBoxSection';
import ToggleSection from '../FilterModal/ToggleSection';
import { FormSection } from '../../../styles/FormElements/styled.formSection';
import { addRestformInputs } from '../../../interfaces/';

interface AddRestaurantProps {
  toggleModal(): void;
}

enum FieldForArrays {
  area = 'area_id',
  type = 'types'
}

const AddRestaurant: React.FC<AddRestaurantProps> = ({ toggleModal }) => {
  const defaultFormState: addRestformInputs = {
    area_id: null,
    rest_name: 'new-rest',
    types: [],
    website: 'www.new-rest.com',
    has_activities: true,
    opens_at: null,
    closes_at: null
  };
  const [areas, setAreas] = useState<Area[] | []>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formInput, setFormInput] = useState<addRestformInputs>(
    defaultFormState
  );

  useEffect(() => {
    Promise.all([getAreas(), getTypes()])
      .then(res => {
        const areas: Area[] = res[0];
        const types: Type[] = res[1];
        setAreas(areas);
        setTypes(types);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleChange = (field: string, value: string | number): void => {
    setFormInput({ ...formInput, [field]: value });
  };

  const handleToggle = (option: any): void => {
    const newState: any = {
      ...formInput,
      has_activities: !formInput.has_activities
    };
    setFormInput(newState);
  };

  const handleActivateToggle = (option: any): void => {
    const newState: any = {
      ...formInput,
      has_activities: formInput.has_activities === null ? false : null
    };
    setFormInput(newState);
  };

  const checkItemsFields: any = (field: FieldForArrays, input: number) => {
    const currentField: any = formInput[field];
    const inputAlreadySelected: boolean = currentField.includes(input);

    const newInput = !inputAlreadySelected
      ? [...currentField, input]
      : currentField.filter((item: number): boolean => item !== input);

    setFormInput({ ...formInput, [field]: newInput });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    postRestaurant(formInput);
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <Bar fill={true} noMargin={true} bordered={true} className='modal-top'>
          <Button onClick={toggleModal}>
            <p id='button-close'>{'✖️'}</p>
          </Button>
          <h2>NEW RESTAURANT </h2>
        </Bar>
        <form onSubmit={handleSubmit}>
          <FormSection>
            <InputWrapper type='text'>
              <Bar className='form-bar'>
                <label htmlFor='name-input'>
                  <h2>Name:</h2>
                </label>
              </Bar>

              <Input
                placeholder='restaurant...'
                required
                id='name-input'
                value={formInput.rest_name}
                type='text'
                onChange={(e): void =>
                  handleChange('rest_name', e.target.value)
                }
              />
            </InputWrapper>
          </FormSection>
          <FormSection>
            <InputWrapper type='text'>
              <Bar className='form-bar'>
                <label htmlFor='website-input'>
                  <h2>Website:</h2>
                </label>
              </Bar>
              <Input
                placeholder='www.restaurant.com'
                type='text'
                required
                id='website-input'
                value={formInput.website}
                onChange={(e): void => handleChange('website', e.target.value)}
              />
            </InputWrapper>
          </FormSection>
          <DropDown
            title='Area'
            img={images.pin.img}
            alt={images.pin.alt}
            areas={areas}
            onChange={(value: number): void => handleChange('area_id', value)}
          />
          <CheckBoxSection
            title='Type'
            onChange={(input: number): void => {
              checkItemsFields('types', input);
            }}
            checkedValues={formInput.types}
            imgUrl={images.bar.img}
            alt={images.bar.alt}
            property='type'
            data={types}
          />
          <ToggleSection
            onToggle={handleToggle}
            onCheck={handleActivateToggle}
            title={'More Options'}
            checkBoxText='Not now...'
            data={[
              ['has_activites', formInput.has_activities]
            ]}></ToggleSection>
          // TODO: ADD CLOSES AT + OPENS AT form inputs
          <Bar bordered={true} fill={true} className='modal-bottom'>
            <Button
              type={'reset'}
              // onClick={() => setFormInput(defaultFormState)}
              bordered={true}>
              <p>clear</p>
            </Button>
            <Button type={'submit'} bordered={true}>
              <p>Add</p>
            </Button>
          </Bar>
        </form>
      </>
    );
  }
};

export default AddRestaurant;
