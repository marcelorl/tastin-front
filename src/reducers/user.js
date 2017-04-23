import {
  USER_COORDS_REQUEST_FETCH,
  USER_COORDS_SUCCESS_FETCH
} from '../actions/user';

const INITIAL_STATE = {
  loading: false, user: {}, error: ''
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_COORDS_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        user: []
      });
    case USER_COORDS_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        user: { position: action.position }
      });
    default:
      return state
  }
};

export default restaurantReducer;
