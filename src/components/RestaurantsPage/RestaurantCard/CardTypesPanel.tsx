import React from 'react';
import { RestType, Type } from '../../../interfaces';
import { TypesPanel } from '../../../styles/RestaurantCards/styled.TypesPanel';
import { images } from '../../../styles/CardImages';

interface CardTypesPanelProps {
  rest_types: RestType[];
  types: Type[];
}

const CardTypesPanel: React.FC<CardTypesPanelProps> = ({
  rest_types,
  types
}) => {
  return (
    <ul className='types-panels'>
      {types.map(({ type, type_id }) => {
        const isPresent: boolean = rest_types.find(t => t.type === type)
          ? true
          : false;
        return (
          <TypesPanel
            className='type-panel-tile'
            key={type_id}
            highlighted={isPresent}>
            <button>
              <img src={images[type].img} alt={type} />
            </button>
          </TypesPanel>
        );
      })}
    </ul>
  );
};

export default CardTypesPanel;
