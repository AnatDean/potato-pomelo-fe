import React, { useState } from 'react';
import RestCard from './components/RestaurantsPage/RestaurantCard/RestCard';
import { RestCardType, Type } from './interfaces';
import { test_restaurant, test_types } from './test_data';
import './App.css';

function App() {
  const [restaurant] = useState<RestCardType>(test_restaurant);
  const [types] = useState<Type[]>(test_types);
  return (
    <div className='App'>
      <RestCard types={types} restaurant={restaurant} />
    </div>
  );
}

export default App;
