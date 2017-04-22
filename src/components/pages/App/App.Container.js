import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import App from './App';
import get from 'lodash/get';

import AuthService from '../../../utils/AuthService';
import { fetchRestaurants } from '../../../actions/restaurant';

const authService = new AuthService(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);

class AppContainer extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(fetchRestaurants({lat: '-33.8670522', lng: '151.1957362'}));
  }

  render () {
    const { auth, restaurants } = this.props;

    return <App auth={auth} restaurants={restaurants} />;
  }
}

AppContainer.propTypes = {
  auth: PropTypes.shape({}),
  restaurants: PropTypes.array
};

const mapStateToProps = state =>
  ({
    auth: authService,
    restaurants: get(state, 'restaurants.list', [])
  });

export default connect(mapStateToProps)(AppContainer);
