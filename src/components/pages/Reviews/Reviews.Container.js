import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';

import { fetchReviews } from '../../../actions/review';
import Reviews from './Reviews';

class ReviewsContainer extends Component {
  componentDidMount () {
    const { fetchReviews, location } = this.props;
    const placeId = location.pathname.split('/')[1];

    fetchReviews(placeId);
  }

  render () {
    return <Reviews {...this.props} />;
  }
}

ReviewsContainer.propTypes = {
  reviews: PropTypes.array
};

const mapStateToProps = (state, ownProps) =>
  (Object.assign({
    reviews: get(state, 'reviews.list', [])
  }, ownProps));

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchReviews
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
