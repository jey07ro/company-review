import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';
import { FilterReviewsContainer as FilterReviews } from '../containers/FilterReviews';


const CompanyName = styled.h1`
    
`;

const CompanyReviews = styled.h2`
    font-size: 15px;
`;

const AverageScore = styled.div`
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    background-color: ${props => props.theme.highlight};
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    padding: 5px;
`;

const CounterScore = styled.span`
    font-size: 12px;
    color: ${props => props.theme.main};
    padding: 10px;
`;

const Header = styled.header`
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid ${props => lighten(0.2, props.theme.main)};
`;

const ScoreLayout = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const FilterReviewLayout = styled.div`
    margin-left: auto;
`;

const Company = ({ review, reviews }) => (
    <Header>
        <CompanyName>{review.company.displayName}</CompanyName>
        <CompanyReviews>Reviews</CompanyReviews>
        <ScoreLayout>
            <AverageScore>{
                (reviews.reduce((total, review) => total + review.score, 0) / reviews.length).toFixed(1)
            }</AverageScore>
            <CounterScore>
                from {reviews.length}{' '}
                {reviews.length === 1 ? 'rating' : 'ratings'}
            </CounterScore>
            <FilterReviewLayout>
                <FilterReviews />
            </FilterReviewLayout>
        </ScoreLayout>
    </Header>
)

Company.propTypes = {
    review: PropTypes.object.isRequired,
    reviews: PropTypes.array.isRequired,
};

export { Company };
