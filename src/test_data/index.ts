import { RestCardType, Type } from '../interfaces';

export const test_restaurant: RestCardType = {
  rest_id: 1,
  rest_name: 'rest-a',
  area_id: 1,
  website: 'www.rest-a.com',
  closes_at: '22:00:00',
  opens_at: '09:30:00',
  has_activities: true,
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
  }
];
