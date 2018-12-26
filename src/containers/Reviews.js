import { connect } from 'react-redux';
import { Reviews } from '../components/Reviews';
import { fetchReviews } from '../actions/reviews';

export const ReviewsContainer = connect(
  state => ({
    reviews: state.reviews.items,
  }),
  { fetchReviews }
)(Reviews);
