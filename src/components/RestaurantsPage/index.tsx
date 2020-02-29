import React, { useState, useEffect } from 'react';
import { getRestaurants, getTypes } from '../../api';
import { RestCardType, Type } from '../../interfaces';
import RestaurantList from './RestaurantList';
import Loading from '../Loading';

const RestaurantPage: React.FC<{}> = () => {
  const [restaurants, setRestaurants] = useState<RestCardType[] | []>([]);
  const [types, setTypes] = useState<Type[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      {!isLoading && <RestaurantList restaurants={restaurants} types={types} />}
    </>
  );
};

export default RestaurantPage;
