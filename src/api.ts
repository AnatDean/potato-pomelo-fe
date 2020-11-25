import axios from 'axios';
import { addRestformInputs } from './interfaces/';

const api = axios.create({ baseURL: 'http://localhost:9090/api' });

export const getRestaurants = (): Promise<any> => {
  return api.get('/restaurants').then(({ data: { restaurants } }) => {
    return restaurants;
  });
};

export const getTypes = (): Promise<any> => {
  return api.get('/types').then(({ data: { types } }) => {
    return types;
  });
};

export const getAreas = (): Promise<any> => {
  return api.get('/areas').then(({ data: { areas } }) => {
    return areas;
  });
};

export const getFilteredRestaurants = (params: any): Promise<any> => {
  console.log(params);
  return api
    .get('/restaurants', { params })
    .then(({ data: { restaurants } }) => {
      return restaurants;
    });
};

export const postRestaurant = (newRest: addRestformInputs): Promise<any> => {
  const postBody = {
    ...newRest
  };
  return api
    .post('/restaurants', postBody)
    .then(({ data }) => {
      console.log('posted,', data.restaurant);
      return data.restaurant;
    })
    .catch(console.dir);
};
