import axios from '../utils/Request';

export const RESTAURANT_FAIL_FETCH = 'RESTAURANT_FAIL_FETCH';
export const RESTAURANT_REQUEST_FETCH = 'RESTAURANT_REQUEST_FETCH';
export const RESTAURANT_SUCCESS_FETCH = 'RESTAURANT_SUCCESS_FETCH';

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

export const fetchRestaurants = (coords) => {
  return dispatch => {
    dispatch(requestRestaurants(coords));
    return axios.get('/restaurants', {
      params: coords
    })
      .then(restaurants => dispatch(receiveRestaurants(restaurants)))
  }
};
