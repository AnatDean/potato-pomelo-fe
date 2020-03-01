import React from 'react';
import { InfoPanelButton } from '../../../styles/RestaurantCards/styled.InfoPanelTile';
import { images } from '../../../styles/CardImages';
import moment from 'moment';
interface CardInfoPanelProps {
  info: {
    opens_at: string;
    closes_at: string;
    has_activities: boolean;
  };
}

const CardInfoPanel: React.FC<CardInfoPanelProps> = ({
  info: { closes_at, opens_at, has_activities }
}) => {
  const { hasActivitiesImage } = images;
  const [o_aHour, o_aMinute] = opens_at.slice(0, -3).split(':');
  const [c_aHour, c_aMinute] = closes_at.slice(0, -3).split(':');

  const openingTimeMoment = moment()
    .hour(+o_aHour)
    .minute(+o_aMinute);

  const closingTimeMoment = moment()
    .hour(+c_aHour)
    .minute(+c_aMinute);

  const isCurrentlyOpen: boolean = moment().isBetween(
    openingTimeMoment,
    closingTimeMoment
  );
  return (
    <ul className='info-panels'>
      <InfoPanelButton
        isCurrentlyOpen={isCurrentlyOpen}
        className='info-panel-tile'>
        <p>{closes_at.slice(0, -3)}</p>
      </InfoPanelButton>
      <InfoPanelButton
        hasActivities={has_activities}
        className='info-panel-tile'>
        <button>
          <img src={hasActivitiesImage.img} alt={hasActivitiesImage.alt} />
        </button>
      </InfoPanelButton>
    </ul>
  );
};

export default CardInfoPanel;
