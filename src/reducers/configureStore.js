import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import restaurantReducer from './restaurant';
import reviewReducer from './review';

const loggerMiddleware = createLogger();

const reducers = combineReducers({
  routing: routerReducer,
  restaurants: restaurantReducer,
  reviews: reviewReducer
});

const configureStore = () =>
  createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

export default configureStore;
