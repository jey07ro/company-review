import { combineReducers } from 'redux';
import { reviews as reviewsReducer} from './reviews';

export const rootReducer = combineReducers({
  reviews: reviewsReducer
});
