import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App';
import get from 'lodash/get';

import AuthService from '../../../utils/AuthService';
import { fetchRestaurants } from '../../../actions/restaurant';
import { fetchCoords, saveUser, userLogout } from '../../../actions/user';
import { geolocation } from '../../../utils/Map';

const authService = new AuthService(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);

class AppContainer extends Component {
  constructor (props) {
    super(props);

    const { fetchCoords, saveUser } = props;

    fetchCoords();
    saveUser(AuthService.getProfile());
  }

  componentDidMount () {
    const { fetchRestaurants } = this.props;

    geolocation(fetchRestaurants);
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
    user: state.users
  });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCoords,
  fetchRestaurants: pos => fetchRestaurants(pos),
  logout: userLogout,
  saveUser
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
