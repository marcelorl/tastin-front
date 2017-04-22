import {
  RESTAURANT_FAIL_FETCH,
  RESTAURANT_REQUEST_FETCH,
  RESTAURANT_SUCCESS_FETCH
} from '../actions/restaurant';

const INITIAL_STATE = {
  loading: false, list: [], error: ''
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTAURANT_FAIL_FETCH:
    case RESTAURANT_REQUEST_FETCH:
    case RESTAURANT_SUCCESS_FETCH:
      return Object.assign({}, state, {
        //[action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
};

export default restaurantReducer;
