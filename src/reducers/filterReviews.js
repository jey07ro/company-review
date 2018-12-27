import {
    SET_FILTER_REVIEWS,
} from '../actions/types';
import { LATEST_REVIEWS } from '../constants/FilterReviews';

const filterReviews = (state = LATEST_REVIEWS, action) => {
    switch (action.type) {
        case SET_FILTER_REVIEWS:
            return action.payload
        default:
            return state
    }
}

export { filterReviews };