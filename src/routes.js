import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './components/pages/App';

const routes = () =>
  <Router>
    <Route path="/" component={App} />
  </Router>;

export default routes;
