import { reviews as reviewsReducer } from './reviews';
import * as actionTypes from '../actions/types';
import { company } from '../config';

describe('reviews reducer', () => {
  const item = {
    'score': 4,
    'company': {
      'id': 'VdgWZZ___C',
      'displayName': 'Pizzeria Mamma Mia',          
    }
  };
  
  it('should handle initial state', () => {
    expect(reviewsReducer(undefined, {})).toEqual({
      items: [],
      item: {
        comment: '',
        userName: 'Anonymous',
        createdTime: NaN,
        company,
        score: NaN,
      }
    });
  });

  it('should handle FETCH_REVIEWS', () => {
    expect(
      reviewsReducer(undefined, {
        type: actionTypes.FETCH_REVIEWS,
        payload: [item],
      })
    ).toEqual({ item: {}, items: [item]});
  });

  it('should handle NEW_REVIEW', () => {
    expect(
      reviewsReducer(
        { items: [{...item, 'score': 5}] },
        {
          type: actionTypes.NEW_REVIEW,
          payload: item,
        }
      )
    ).toEqual({ item: {}, items: [{...item, 'score': 5}, item], item: item });
  });
});
  