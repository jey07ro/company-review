import { reviews as reviewsReducer, initialState } from './reviews';
import * as actionTypes from '../actions/types';
import { initComment } from '../config';

describe('reviews reducer', () => {
    const item = {
        'score': 4,
        'company': {
            'id': 'VdgWZZ___C',
            'displayName': 'Pizzeria Mamma Mia',
        }
    };

    it('should handle initial state', () => {
        expect(reviewsReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_REVIEWS', () => {
        expect(
            reviewsReducer(undefined, {
                type: actionTypes.FETCH_REVIEWS,
                payload: [item],
            })
        ).toEqual({ ...initialState, items: [item] });
    });

    it('should handle NEW_REVIEW', () => {
        expect(
            reviewsReducer(undefined,
                {
                    type: actionTypes.NEW_REVIEW,
                    payload: item,
                }
            )
        ).toEqual({
            ...initialState,
            items: [item],
            item: item
        });
    });
});
