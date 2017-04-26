import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';

import { fetchReviews, onSaveReview } from 'actions/review';
import Reviews from './Reviews';

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { placeId: props.match.params.id };
  }

  componentDidMount () {
    const { fetchReviews } = this.props;

    fetchReviews(this.state.placeId);
  }

  render () {
    return <Reviews {...this.props} placeId={this.state.placeId} />;
  }
}

ReviewsContainer.propTypes = {
  reviews: PropTypes.array,
  user: PropTypes.shape({})
};

const mapStateToProps = (state, ownProps) =>
  (Object.assign({
    reviews: get(state, 'reviews.list', []),
    user: state.users
  }, ownProps));

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchReviews,
  onSave: onSaveReview
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
