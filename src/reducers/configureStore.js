import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import restaurantReducer from './restaurant';
import reviewReducer from './review';
import userReducer from './user';

const loggerMiddleware = createLogger();
const routerHistoryMiddleware = history => routerMiddleware(history);

const reducers = combineReducers({
  routing: routerReducer,
  restaurants: restaurantReducer,
  reviews: reviewReducer,
  users: userReducer
});

const configureStore = (history) =>
  createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerHistoryMiddleware(history)
    )
  );

export default configureStore;
