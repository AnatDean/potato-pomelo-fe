import React, { useState, useEffect } from 'react';
import { getRestaurants, getTypes, getFilteredRestaurants } from '../../api';
import { RestCardType, Type } from '../../interfaces';
import RestaurantList from './RestaurantList';
import Loading from '../Loading';
import FilterModal from './FilterModal';
import { ModalButton } from '../../styles/Modals/styled.modalButton';
import { PageInfoBar } from '../../styles/styled.PageInfoBar';

const RestaurantPage: React.FC<{}> = () => {
  const [restaurants, setRestaurants] = useState<RestCardType[] | []>([]);
  const [types, setTypes] = useState<Type[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(true);

  const filterRestaurants = (formInput: any): void => {
    getFilteredRestaurants(formInput)
      .then(restaurants => {
        setRestaurants(restaurants);
        setFilterIsOpen(false);
      })
      .catch(console.dir);
  };

  useEffect(() => {
    Promise.all([getRestaurants(), getTypes()])
      .then(([restResponse, typeResponse]) => {
        setRestaurants(restResponse);
        setTypes(typeResponse);
        setIsLoading(false);
      })
      .catch(console.dir);
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <PageInfoBar>
            <ModalButton
              round={true}
              onClick={(): void => setFilterIsOpen(true)}>
              <p>Refine</p>
            </ModalButton>
            <ModalButton
              round={true}
              onClick={(): void => setFilterIsOpen(true)}>
              <p>Add a restaurant</p>
            </ModalButton>
          </PageInfoBar>
          {filterIsOpen && (
            <FilterModal
              filterRestaurants={filterRestaurants}
              toggleModal={(): void => setFilterIsOpen(false)}
              types={types}
            />
          )}
          <RestaurantList restaurants={restaurants} types={types} />
        </>
      )}
    </>
  );
};

export default RestaurantPage;
