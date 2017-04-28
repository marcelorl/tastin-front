import axios from 'utils/Request';

export const RESTAURANT_FAIL_FETCH = 'RESTAURANT_FAIL_FETCH';
export const RESTAURANT_REQUEST_FETCH = 'RESTAURANT_REQUEST_FETCH';
export const RESTAURANT_SUCCESS_FETCH = 'RESTAURANT_SUCCESS_FETCH';

export const ON_SELECT_RESTAURANT = 'ON_SELECT_RESTAURANT';

const requestRestaurants = () => {
  return {
    type: RESTAURANT_REQUEST_FETCH
  }
};

const receiveRestaurants = restaurants => {
  return {
    type: RESTAURANT_SUCCESS_FETCH,
    restaurants
  }
};

const onSelectRestaurant = id => {
  return {
    type: ON_SELECT_RESTAURANT,
    id
  }
};

export const fetchRestaurants = coords => {
  return dispatch => {
    dispatch(requestRestaurants(coords));
    return axios.get('/api/restaurants', {
      params: coords
    })
      .then(restaurants => dispatch(receiveRestaurants(restaurants)))
  }
};

export const onSelectMarker = id => {
  return dispatch => {
    dispatch(onSelectRestaurant(id));
  }
};
