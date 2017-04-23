import get from 'lodash/get';
import {
  USER_COORDS_REQUEST_FETCH,
  USER_COORDS_SUCCESS_FETCH,
  USER_SUCCESS_SAVE
} from '../actions/user';

const INITIAL_STATE = {
  loading: false, user: {}, position: {}, error: ''
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_COORDS_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        position: {}
      });
    case USER_COORDS_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        position: action.position
      });
    case USER_SUCCESS_SAVE: {
      console.log('TEST ---->', state);
      return Object.assign(state, {
        error: '',
        loading: false,
        user: action.profile
      });
    }
    default:
      return state
  }
};

export default restaurantReducer;
