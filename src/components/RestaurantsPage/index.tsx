import React, { useState, useEffect } from 'react';
import { getRestaurants, getTypes } from '../../api';
import { RestCardType, Type } from '../../interfaces';
import RestaurantList from './RestaurantList';
import Loading from '../Loading';
import FilterModal from './FilterModal';
import { Switch, Route } from 'react-router-dom';

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
      {!isLoading && (
        <>
          <Switch>
            <Route path='/filter'>
              <FilterModal types={types} />
            </Route>
          </Switch>
          <RestaurantList restaurants={restaurants} types={types} />
        </>
      )}
    </>
  );
};

export default RestaurantPage;
