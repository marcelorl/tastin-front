import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import App from './App';
import AuthService from '../../../utils/AuthService';
import axios from 'axios';

const authService = new AuthService(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);

axios.post('http://localhost:3001/api/reviews', {}, { headers: { Authorization: `Bearer ${authService.getAccessToken()}` } }, response => {
  console.log(response);
});

class AppContainer extends Component {
  render () {
    const { auth } = this.props;

    return <App auth={auth} />;
  }
}

AppContainer.propTypes = {
  auth: PropTypes.shape({})
};

const mapStateToProps = state =>
  ({
    auth: authService
  });

export default connect(mapStateToProps)(AppContainer);
