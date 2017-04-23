import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import ReviewCard from '../../molecules/RestaurantCard';

class Reviews extends Component {
  renderReviewsList () {
    const { reviews } = this.props;

    return reviews.map((review, key) => {
      return (
        <div key={key}>
          <ReviewCard review={review} />
          <Divider />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="review-list">
        {this.renderReviewsList()}
      </div>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.shape({})
};

export default Reviews;
