import { connect } from 'react-redux';
import { Reviews } from '../components/Reviews';
import { LATEST_REVIEWS } from '../constants/FilterReviews';
import moment from 'moment';

export const ReviewsContainer = connect(
    state => {
        if (state.filter === LATEST_REVIEWS) {
            return {
                reviews: state.reviews.items
                    .slice(0)
                    .sort((a, b) => moment(a.createdTime).diff(b.createdTime))
                    .splice(0, 3),
                filter: state.filter,
            }
        }
        return {
            reviews: state.reviews.items,
            filter: state.filter,
        }
    },
    {}
)(Reviews);
