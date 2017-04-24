import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import ReviewCard from '../../molecules/ReviewCard';
import FormReview from '../../molecules/FormReview';

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

  render() {
    const { onSave, placeId, user } = this.props;

    return (
      <div className="review-list">
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
