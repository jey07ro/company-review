import { connect } from 'react-redux';
import { ReviewsAdd } from '../components/ReviewsAdd';
import { createReview, updateReview } from '../actions/reviews';

export const ReviewsAddContainer = connect(
  state => ({
    review: state.reviews.item,
  }),
  { createReview, updateReview }
)(ReviewsAdd);
