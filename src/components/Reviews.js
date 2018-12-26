import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Review } from './Review';
import { uniq } from '../utils/uniq';

const ReviewsLayout = styled.div`
    margin: 15px 0px;
`;

const ReviewsHeader = styled.h2`
    font-size: 13px;
`;


class Reviews extends Component {
    
    componentDidMount = () => {
        this.props.fetchReviews();
    }
    
    render = () => {
        const { reviews } = this.props;

        return (
            <ReviewsLayout>
                <ReviewsHeader>Latest reviews</ReviewsHeader>
                {reviews.map(review => <Review key={uniq`review`} {...review} />)}
            </ReviewsLayout>
        )
    };
}

Reviews.propTypes = {
    fetchReviews: PropTypes.func.isRequired,
    reviews: PropTypes.array.isRequired,
};

export { Reviews };

