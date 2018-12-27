import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import styled from 'styled-components';
import { Star } from 'styled-icons/fa-solid/Star';
import { AccountCircle } from 'styled-icons/material';
import { lighten, darken } from 'polished';
import moment from 'moment';


export const UngivenStar = styled(Star)`
    width: 12px;
    height: 12px;
    color: ${props => props.theme.main};
`;

export const GivenStar = styled(Star)`
    color: ${props => props.theme.highlight};
`;

export const Avatar = styled(AccountCircle)`
    width: 32px;
    height: 32px;
    color: ${props => props.theme.main};
`;

export const Comment = styled.div`
    margin-top: 5px;
    color: ${props => darken(0.5, props.theme.main)};
`;

export const MainLayout = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ReviewLayout = styled(MainLayout)`
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${props => lighten(0.2, props.theme.main)};
    &:last-child {
        border-bottom: none;
    }
`;

export const ContentLayout = styled.div`
    margin-left: 10px;
    width: 100%;
`;

export const UserLayout = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const UserName = styled.h3`
    font-size: 13px;
    margin: 0 0 3px 0;
    color: ${props => darken(0.6, props.theme.main)};
`;

export const RatingLayout = styled(MainLayout)``;

export const ReviewDate = styled.span`
    color: ${props => props.theme.main};
    font-size: 12px;
    margin-left: 10px;
`;

const Review = ({
    userName,
    comment,
    company,
    createdTime,
    score,
}) => (
        <ReviewLayout>
            <Avatar />
            <ContentLayout>
                <UserLayout>
                    <UserName>{userName}</UserName>
                </UserLayout>
                <RatingLayout>
                    <Rating
                        initialRating={score}
                        emptySymbol={<UngivenStar />}
                        fullSymbol={<GivenStar />}
                        readonly
                    />
                    <ReviewDate>
                        {moment.unix(createdTime).fromNow()} - {company.displayName}
                    </ReviewDate>
                </RatingLayout>
                <Comment>{comment}</Comment>
            </ContentLayout>
        </ReviewLayout>
    );

Review.propTypes = {
    userName: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
    createdTime: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
};

export { Review };
