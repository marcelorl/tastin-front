import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/pages/App';

const routes = ({ store }) => {
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  );
};

export default routes;
