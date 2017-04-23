import get from 'lodash/get';
import {
  REVIEW_FAIL_FIND,
  REVIEW_REQUEST_FIND,
  REVIEW_SUCCESS_FIND,
  // REVIEW_FORM
} from '../actions/review';

const INITIAL_STATE = {
  loading: false, list: [], error: ''
};

const reviewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REVIEW_FAIL_FIND:
    case REVIEW_REQUEST_FIND:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        list: []
      });
    case REVIEW_SUCCESS_FIND:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        list: get(action, 'reviews.data', [])
      });
    default:
      return state
  }
};

export default reviewReducer;
