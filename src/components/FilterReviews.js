import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LATEST_REVIEWS, ALL_REVIEWS } from '../constants/FilterReviews';


const PrimaryButton = styled.button`
    font-size: 13px;
    color: ${props => props.theme.active};
    background-color: ${props => props.theme.backgroundColor};
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
`;

const FILTER_TITLES = {
    [ALL_REVIEWS]: 'View latest reviews',
    [LATEST_REVIEWS]: 'View all reviews',
};

const TOGGLE_FILTERS = {
    [ALL_REVIEWS]: LATEST_REVIEWS,
    [LATEST_REVIEWS]: ALL_REVIEWS,
}

const FilterReviews = ({ filter, onSetFilter }) => (
    <PrimaryButton onClick={() => { onSetFilter(TOGGLE_FILTERS[filter]) }}>
        {FILTER_TITLES[filter]}
    </PrimaryButton>
);

FilterReviews.propTypes = {
  filter: PropTypes.string.isRequired,
  onSetFilter: PropTypes.func.isRequired,
};

export { FilterReviews };
