import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import RestaurantPage from './components/RestaurantsPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/'>
          <RestaurantPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
