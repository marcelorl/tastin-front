import React from 'react';
import PropTypes from 'prop-types';

import './ReviewCard.css';

const ReviewCard = props => {
  const { user_name, createdAt, message, id } = props.review;
  const date = new Date(createdAt);

  const nDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <div className="review-card" key={id}>
      <div className="review-card__user">
        <div className="review-card__name">{user_name}</div>
        <div className="review-card__date">{nDate}</div>
      </div>
      <div className="review-card__message">{message}</div>
    </div>
  );
};

ReviewCard.PropTypes = {
  review: PropTypes.shape({})
};

ReviewCard.defaultProps = {
  review: {}
};

export default ReviewCard;
