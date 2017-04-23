import axios from '../utils/Request';

export const REVIEW_FAIL_FIND = 'REVIEW_FAIL_FIND';
export const REVIEW_REQUEST_FIND = 'REVIEW_REQUEST_FIND';
export const REVIEW_SUCCESS_FIND = 'REVIEW_SUCCESS_FIND';

export const REVIEW_FORM = 'REVIEW_FORM';

const requestReviews = () => {
  return {
    type: REVIEW_REQUEST_FIND
  }
};

const receiveReviews = restaurants => {
  return {
    type: REVIEW_SUCCESS_FIND,
    restaurants
  }
};

export const fetchReviews = id => {
  return dispatch => {
    dispatch(requestReviews());
    return axios.get(`/restaurants/${id}/reviews`)
      .then(restaurants => dispatch(receiveReviews(restaurants)))
  }
};
