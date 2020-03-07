import React, { useState, useEffect } from 'react';
import { getRestaurants, getTypes, getFilteredRestaurants } from '../../api';
import { RestCardType, Type } from '../../interfaces';
import RestaurantList from './RestaurantList';
import Loading from '../Loading';
import Filter from './FilterModal';
import { Button } from '../../styles/FormElements/styled.Button';
import { PageInfoBar } from '../../styles/Bars/styled.PageInfoBar';
import Modal from '../Modal';

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
            <Button
              round={true}
              bordered={true}
              onClick={(): void => setFilterIsOpen(true)}>
              <p>Refine</p>
            </Button>
            <Button
              round={true}
              bordered={true}
              onClick={(): void => setFilterIsOpen(true)}>
              <p>Add a restaurant</p>
            </Button>
          </PageInfoBar>
          <Modal isOpen={filterIsOpen}>
            <Filter
              filterRestaurants={filterRestaurants}
              toggleModal={(): void => setFilterIsOpen(false)}
              types={types}
            />
          </Modal>

          <RestaurantList restaurants={restaurants} types={types} />
        </>
      )}
    </>
  );
};

export default RestaurantPage;
