import axios from 'axios';

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
