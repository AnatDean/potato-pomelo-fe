import React from 'react';
import { InfoPanelButton } from '../../../styles/RestaurantCards/styled.InfoPanelTile';
import { InfoPanelImages } from './CardImages';
interface CardInfoPanelProps {
  info: {
    open_late: boolean;
    serves_hot_meals: boolean;
  };
}

const CardInfoPanel: React.FC<CardInfoPanelProps> = ({
  info: { open_late, serves_hot_meals }
}) => {
  const {
    nightImage,
    dayImage,
    hotFoodImage,
    noHotFoodImage
  } = InfoPanelImages;
  return (
    <ul className='info-panels'>
      <InfoPanelButton className='info-panel-tile'>
        <button>
          <img
            src={open_late ? nightImage.img : dayImage.img}
            alt={open_late ? nightImage.alt : dayImage.alt}
          />
        </button>
      </InfoPanelButton>
      <InfoPanelButton className='info-panel-tile'>
        <button>
          <img
            src={serves_hot_meals ? hotFoodImage.img : noHotFoodImage.img}
            alt={serves_hot_meals ? hotFoodImage.alt : noHotFoodImage.alt}
          />
        </button>
      </InfoPanelButton>
    </ul>
  );
};

export default CardInfoPanel;
