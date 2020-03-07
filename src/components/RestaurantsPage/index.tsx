import React, { useState, useEffect } from 'react';
import { getRestaurants, getTypes } from '../../api';
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
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

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
              Refine
            </ModalButton>
            <ModalButton
              round={true}
              onClick={(): void => setFilterIsOpen(true)}>
              Add a restaurant
            </ModalButton>
          </PageInfoBar>
          {filterIsOpen && (
            <FilterModal
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
