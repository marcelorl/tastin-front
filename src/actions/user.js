import { geolocation } from '../utils/Map';

export const USER_COORDS_REQUEST_FETCH = 'USER_COORDS_REQUEST_FETCH';
export const USER_COORDS_SUCCESS_FETCH = 'USER_COORDS_SUCCESS_FETCH';
export const USER_SUCCESS_SAVE = 'USER_SUCCESS_SAVE';
export const USER_LOGOUT = 'USER_LOGOUT';

const requestCoords = () =>
  ({
    type: USER_COORDS_REQUEST_FETCH
  });

const receiveCoords = position =>
  ({
    type: USER_COORDS_SUCCESS_FETCH,
    position
  });

const successSave = profile =>
  ({
    type: USER_SUCCESS_SAVE,
    profile
  });

const userLogout = () =>
  ({
    type: USER_LOGOUT
  });

export const fetchCoords = () =>
  dispatch => {
    dispatch(requestCoords());

    const dispatchCoords = pos => dispatch(receiveCoords(pos));

    geolocation(dispatchCoords);
  };

export const saveUser = profile =>
  dispatch => {
    dispatch(successSave(profile));
  };
