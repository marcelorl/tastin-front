import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import App from './App';
import get from 'lodash/get';

import AuthService from 'utils/AuthService';
import { fetchRestaurants, onSelectMarker } from 'actions/restaurant';
import { fetchCoords, saveUser, userLogout } from 'actions/user';
import { geolocation } from 'utils/Map';

const authService = new AuthService(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);

class AppContainer extends Component {
  constructor (props) {
    super(props);

    const { fetchCoords, saveUser } = props;

    fetchCoords();
    saveUser(AuthService.getProfile());
  }

  componentDidMount () {
    const { fetchRestaurants, path } = this.props;

    geolocation(fetchRestaurants);

    if (path === '/') {
      browserHistory.push('/list');
    }
  }

  render () {
    return <App {...this.props} />;
  }
}

AppContainer.propTypes = {
  auth: PropTypes.shape({}),
  fetchCoords: PropTypes.func,
  fetchRestaurants: PropTypes.func,
  logout: PropTypes.func,
  onSelectMarker: PropTypes.func,
  path: PropTypes.string,
  restaurants: PropTypes.array,
  saveUser: PropTypes.func,
  user: PropTypes.shape({})
};

const mapStateToProps = (state, ownProps) =>
  (Object.assign({
    auth: authService,
    path: get(state, 'routing.locationBeforeTransitions.pathname', ''),
    restaurants: get(state, 'restaurants.list', []),
    user: state.users
  }, ownProps));

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCoords,
  fetchRestaurants: pos => fetchRestaurants(pos),
  logout: userLogout,
  onSelectMarker,
  saveUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
