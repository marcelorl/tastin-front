import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './routes';
import configureStore from './reducers';

import './reset.css';

const store = configureStore();

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Routes store={store} />
  </Provider>,
  document.getElementById('root')
);
