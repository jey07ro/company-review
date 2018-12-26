import {
  FETCH_REVIEWS,
  NEW_REVIEW,
  UPDATE_REVIEW
} from './types';
// eslint-disable-next-line
import { api } from '../api';
// eslint-disable-next-line
import { company, reviews} from '../config';

export const fetchReviews = () => dispatch => {
    dispatch({
      type: FETCH_REVIEWS,
      payload: reviews,
    });
};

export const createReview = data => dispatch => {
  // api('v1/company', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     ...data,
  //     companyId: company.id,
  //     company: undefined,
  //   }),
  // })
  //   .then(res => res.json())
  //   .then(review =>
  //     dispatch({
  //       type: NEW_REVIEW,
  //       payload: data,
  //     })
  //   );
  dispatch({
    type: NEW_REVIEW,
    payload: data,
  });
};

export const updateScore = score => dispatch => {
  dispatch({
    type: UPDATE_REVIEW,
    payload: { 
      score,
      createdTime: Math.floor(Date.now() / 1000),
    },
  })
};

export const updateReview = review => dispatch => {
  dispatch({
    type: UPDATE_REVIEW,
    payload: review,
  })
};