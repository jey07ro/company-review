import { connect } from 'react-redux';
import { YourReview } from '../components/YourReview';
import { updateScore } from '../actions/reviews';

export const YourReviewContainer = connect(
  state => ({
    review: state.reviews.item,
  }),
  { updateScore }
)(YourReview);
