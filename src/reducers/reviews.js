import {
    FETCH_REVIEWS,
    NEW_REVIEW,
    UPDATE_REVIEW
} from '../actions/types';
import { initComment } from '../config';


export const initialState = {
    items: [],
    item: initComment,
};

export const reviews = function (state = initialState, action) {
    switch (action.type) {
        case FETCH_REVIEWS:
            return {
                ...state,
                items: action.payload,
            };
        case NEW_REVIEW:
            return {
                ...state,
                items: [...state.items, action.payload],
                item: action.payload,
            };
        case UPDATE_REVIEW:
            return {
                ...state,
                item: { ...state.item, ...action.payload }
            }
        default:
            return state;
    }
};
