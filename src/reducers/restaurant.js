import {
  RESTAURANT_FAIL_FETCH,
  RESTAURANT_REQUEST_FETCH,
  RESTAURANT_SUCCESS_FETCH,
  ON_SELECT_RESTAURANT
} from '../actions/restaurant';

const INITIAL_STATE = {
  loading: false, list: [], error: ''
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTAURANT_FAIL_FETCH:
      return Object.assign({}, state, {
        error: 'Error',
        loading: false,
        list: []
      });
    case RESTAURANT_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        list: []
      });
    case RESTAURANT_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        list: action.restaurants.data
      });
    case ON_SELECT_RESTAURANT: {
      const nList = state.list.map(val => {
        val.selected = false;

        if(val.place_id === action.id) val.selected = true;

        return val;
      });

      return Object.assign({}, state, {
        list: nList
      });
    }
    default:
      return state
  }
};

export default restaurantReducer;
