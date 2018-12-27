import { connect } from 'react-redux';
import { FilterReviews } from '../components/FilterReviews';
import { onSetFilter } from '../actions/reviews';


export const FilterReviewsContainer = connect(
    state => ({
        filter: state.filter,
    }),
    { onSetFilter }
)(FilterReviews);
