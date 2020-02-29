import React, { ReactNode } from 'react';
import { RestCardType, Type } from '../../interfaces';
import RestCard from './RestaurantCard/RestCard';

interface RestaurantListProps {
  restaurants: RestCardType[];
  types: Type[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  types
}) => {
  const renderRestaurant = (restaurant: RestCardType): ReactNode => {
    return (
      <RestCard
        key={restaurant.rest_id}
        types={types}
        restaurant={restaurant}
      />
    );
  };
  return <ul id='rest-list'>{restaurants.map(renderRestaurant)}</ul>;
};

export default RestaurantList;
