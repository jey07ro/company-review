import { combineReducers } from 'redux';
import { reviews as reviewsReducer} from './reviews';
import { filterReviews as filterReviewsReducer} from './filterReviews';

export const rootReducer = combineReducers({
  reviews: reviewsReducer,
  filter: filterReviewsReducer,
});
