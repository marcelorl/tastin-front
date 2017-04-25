import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import ReviewCard from 'components/molecules/ReviewCard';
import FormReview from 'components/molecules/FormReview';

import './Reviews.css';

class Reviews extends Component {
  renderReviewsList () {
    const { reviews } = this.props;

    return reviews.map((review, key) =>
      <div key={key}>
        <ReviewCard review={review} />
        <Divider />
      </div>
    );
  }

  goBack () {
    window.location = `${window.location.origin}/list`;
  }

  render() {
    const { onSave, placeId, user } = this.props;

    return (
      <div className="review-list">
        <div className="review-list__go-back" onClick={this.goBack}>{'< List'}</div>
        {this.renderReviewsList()}
        <FormReview user={user.user} placeId={placeId} onSave={onSave} />
      </div>
    );
  }
}

Reviews.propTypes = {
  onSave: PropTypes.func,
  reviews: PropTypes.array
};

export default Reviews;
