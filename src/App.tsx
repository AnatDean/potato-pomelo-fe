import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import RestaurantPage from './components/RestaurantsPage';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/'>
          <RestaurantPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
