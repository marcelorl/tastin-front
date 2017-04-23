import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';

import { onSelectMaker } from '../../../actions/restaurant';
import Restaurants from './Restaurants';

class RestaurantsContainer extends Component {
  render () {
    return <Restaurants {...this.props} />;
  }
}

RestaurantsContainer.propTypes = {
  onSelectMaker: PropTypes.func,
  restaurants: PropTypes.array,
  user: PropTypes.shape({})
};

const mapStateToProps = (state, ownProps) =>
  (Object.assign({
    restaurants: get(state, 'restaurants.list', []),
    user: state.users
  }, ownProps));

const mapDispatchToProps = dispatch => bindActionCreators({
  onSelectMaker
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
