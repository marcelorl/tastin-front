import { geolocation } from '../utils/Map';

export const USER_COORDS_REQUEST_FETCH = 'USER_COORDS_REQUEST_FETCH';
export const USER_COORDS_SUCCESS_FETCH = 'USER_COORDS_SUCCESS_FETCH';

const requestCoords = () => {
  return {
    type: USER_COORDS_REQUEST_FETCH
  }
};

const receiveCoords = position => {
  return {
    type: USER_COORDS_SUCCESS_FETCH,
    position
  }
};

export const fetchCoords = () => {
  return dispatch => {
    dispatch(requestCoords());

    const dispatchCoords = pos => dispatch(receiveCoords(pos));

    geolocation(dispatchCoords);
  }
};
