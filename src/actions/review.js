import axios from 'utils/Request';

export const REVIEW_FAIL_FIND = 'REVIEW_FAIL_FIND';
export const REVIEW_REQUEST_FIND = 'REVIEW_REQUEST_FIND';
export const REVIEW_SUCCESS_FIND = 'REVIEW_SUCCESS_FIND';

export const REVIEW_SUCCESS_SAVE = 'REVIEW_SUCCESS_SAVE';

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

const saveReview = review => {
  return {
    type: REVIEW_SUCCESS_SAVE,
    review
  }
};

export const fetchReviews = id => {
  return dispatch => {
    dispatch(requestReviews());
    return axios.get(`/restaurants/${id}/reviews`)
      .then(restaurants => dispatch(receiveReviews(restaurants)))
  }
};

export const onSaveReview = review => {
  return dispatch => {
    return axios.post(`/reviews`, review)
      .then(response => {
        dispatch(saveReview(response));
      });
  }
};
