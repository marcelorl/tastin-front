import React from 'react';
import PropTypes from 'prop-types';
import Closed from 'material-ui/svg-icons/action/lock';
import Open from 'material-ui/svg-icons/action/lock-open';
import StarRate from 'material-ui/svg-icons/toggle/star';

import './RestaurantCard.css';

const goldColor = '#ffd700';

const renderOpenNow = (open_now) => {
  if (open_now) {
    return <Open />
  }

  return <Closed />
};

const renderDirectionsLink = (origin, destination) => {
  const nOrigin = `${origin.lat},${origin.lng}`;
  const nDestination = `${destination.lat},${destination.lng}`;

  const directionsPath = `https://www.google.de/maps/dir/${nOrigin}/${nDestination}`;

  return <a href={directionsPath} target="_blank">Do you want to go there?</a>;
};

const RestaurantCard = props => {
  const { currentPosition } = props;
  const { name, rating, vicinity, location, open_now } = props.restaurant;

  return (
    <div className='restaurant-card'>
      <div className="restaurant-card__name fit-content">{name}</div>
      <div className="restaurant-card__address fit-content">{vicinity}</div>
      <div className="restaurant-card__stats fit-content">
        <div className="restaurant-card__rating fit-content">
          {rating} <StarRate color={goldColor} />
        </div>
        <div className="restaurant-card__open_now fit-content">Open? {renderOpenNow(open_now)}</div>
      </div>
      <div className="restaurant-card__actions fit-content">
        {renderDirectionsLink(currentPosition, location)}
        <div>Reviews ></div>
      </div>
    </div>
  );
};


RestaurantCard.PropTypes = {
  currentPosition: PropTypes.shape({}),
  restaurant: PropTypes.shape({})
};

RestaurantCard.defaultProps = {
  restaurant: {}
};

export default RestaurantCard;
