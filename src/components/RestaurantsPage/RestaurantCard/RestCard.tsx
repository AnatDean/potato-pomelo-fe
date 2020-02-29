import React from 'react';
import { RestCardType, Type } from '../../../interfaces';
import CardTypesPanel from './CardTypesPanel';
import { Card } from '../../../styles/RestaurantCards/styled.Card';
import { Link } from 'react-router-dom';
import CardInfoPanel from './CardInfoPanel';
import { RestCardMain } from '../../../styles/RestaurantCards/styled.RestCardMain';

interface RestCardProps {
  restaurant: RestCardType;
  types: Type[];
  key: number;
}

const RestCard: React.FC<RestCardProps> = ({ restaurant, types }) => {
  const { rest_id, rest_name, website, rest_types, ...otherInfo } = restaurant;
  return (
    <Card className='rest-card'>
      <RestCardMain className='rest-card-main'>
        <Link to={`/restaurants/${rest_id}`}>
          <h2>{rest_name.toUpperCase()}</h2>{' '}
        </Link>
        <a href={`/${website}`} rel='noopener noreferrer' target='_blank'>
          <p>{website}</p>
        </a>
      </RestCardMain>
      <CardInfoPanel info={otherInfo} />
      <CardTypesPanel types={types} rest_types={rest_types} />
    </Card>
  );
};

export default RestCard;
