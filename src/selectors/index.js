import { createSelector } from 'reselect'
import moment from 'moment';
import { LATEST_REVIEWS, ALL_REVIEWS } from '../constants/FilterReviews';

const getFilter = state => state.filter;
const getReviews = state => state.reviews.items;

export const getFilterReviews = createSelector(
  [getFilter, getReviews],
  (filter, reviews) => {
    switch (filter) {
      case ALL_REVIEWS:
        return reviews;
      case LATEST_REVIEWS:
        return reviews.slice(0)
          .sort((a, b) => moment(b.createdTime).diff(a.createdTime))
          .splice(0, 3);
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
);
