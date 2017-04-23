import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import App from './App';
import get from 'lodash/get';

import AuthService from '../../../utils/AuthService';
import { fetchRestaurants } from '../../../actions/restaurant';
import { fetchCoords } from '../../../actions/user';
import { geolocation } from '../../../utils/Map';

const authService = new AuthService(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);

class AppContainer extends Component {
  constructor (props) {
    super(props);

    const { dispatch } = props;
    dispatch(fetchCoords());
  }

  componentDidMount () {
    const { dispatch } = this.props;
    const dispatchFetchRestaurants = pos => dispatch(fetchRestaurants(pos));

    geolocation(dispatchFetchRestaurants);
  }

  render () {
    return <App {...this.props} />;
  }
}

AppContainer.propTypes = {
  auth: PropTypes.shape({}),
  restaurants: PropTypes.array
};

const mapStateToProps = state =>
  ({
    auth: authService,
    restaurants: get(state, 'restaurants.list', []),
    user: state.users.user
  });

export default connect(mapStateToProps)(AppContainer);
