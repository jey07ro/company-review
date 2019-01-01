import { connect } from 'react-redux';
import { Reviews } from '../components/Reviews';
import { getFilterReviews } from '../selectors';

export const ReviewsContainer = connect(
    state => ({
      reviews: getFilterReviews(state),
      filter: state.filter,
    }),
    {}
)(Reviews);
