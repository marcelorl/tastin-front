import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { browserHistory, IndexRedirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/pages/App';
import Restaurants from './components/pages/Restaurants';

// class Restaurants extends Component { render() {return <div>Restaurants</div>;} }
class Reviews extends Component { render() {return <div>Reviews</div>;} }

const routes = ({ store }) => {
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <App>
        <Route path="/" component={Restaurants} />
      </App>
    </Router>
  );
};

export default routes;
