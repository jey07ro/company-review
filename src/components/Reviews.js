import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Review } from './Review';
import { uniq } from '../utils/uniq';
import { ALL_REVIEWS, LATEST_REVIEWS } from '../constants/FilterReviews';


const ReviewsLayout = styled.div`
    margin: 15px 0px;
`;

const ReviewsHeader = styled.h2`
    font-size: 13px;
`;

const TITLES = {
    [ALL_REVIEWS]: 'All reviews',
    [LATEST_REVIEWS]: 'Latest reviews',
};

const Reviews = ({ reviews, filter }) => (
    <ReviewsLayout>
        <ReviewsHeader>{TITLES[filter]}</ReviewsHeader>
        {reviews.map(review => <Review key={uniq`review`} {...review} />)}
    </ReviewsLayout>
);

Reviews.propTypes = {
    reviews: PropTypes.array.isRequired,
};

export { Reviews };
