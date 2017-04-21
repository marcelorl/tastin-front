import React from 'react';
import App from './App';
import AuthService from '../../../utils/AuthService';

const auth = new AuthService(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);

const AppContainer = () =>
  <App auth={auth} />;

export default AppContainer;
