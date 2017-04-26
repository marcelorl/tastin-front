import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
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

  render() {
    const { history, onSave, placeId, user } = this.props;

    const back = (e) => {
      e.stopPropagation();
      history.goBack();
    };

    return (
      <div className="review-list">
        <RaisedButton fullWidth onClick={back} label="Return to list" />

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
