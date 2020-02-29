import { RestCardType, Type } from '../interfaces';

export const test_restaurant: RestCardType = {
  rest_id: 1,
  rest_name: 'rest-a',
  open_late: true,
  serves_hot_meals: true,
  area_id: 1,
  website: 'www.rest-a.com',
  rest_types: [
    {
      type_id: 1,
      rest_type_id: 1,
      type: 'bar'
    },
    {
      type_id: 2,
      rest_type_id: 2,
      type: 'cafe'
    }
  ]
};

export const test_types: Type[] = [
  {
    type_id: 1,
    type: 'bar'
  },
  {
    type_id: 2,
    type: 'cafe'
  },
  {
    type_id: 3,
    type: 'restaurant'
  },
  {
    type_id: 4,
    type: 'market'
  }
];
