import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import Rating from 'react-rating';
import { Star } from 'styled-icons/fa-regular/Star';
import { uniq } from '../utils/uniq';
import { darken } from 'polished';
import {
    ReviewLayout,
    Avatar,
    ContentLayout,
    UserLayout,
    UserName,
    RatingLayout,
    ReviewDate,
    Comment,
    GivenStar,
    UngivenStar,
} from './Review';


export const PendingStarBig = styled(Star)`
    width: 48px;
    height: 48px;
    color: ${props => props.theme.main};
`;

export const GivenStarBig = styled(GivenStar)`
    width: 48px;
    height: 48px;
`;


const YourReviewTitle = styled.h2`
    font-size: 13px;
    margin: 15px 0 10px;
`;

const RateLayout = styled.div`
    display: flex;
    flex-direction: column;
`;

const RateTitle = styled.h3`
    margin: 0px;
    font-size: 13px;
    color: ${props => darken(0.6, props.theme.main)};
`;

const RateHint = styled.span`
    font-size: 12px;
    color: ${props => props.theme.main};
`;

const PrimaryLink = styled(Link)`
    font-size: 13px;
    font-weight: bold;
    color: ${props => props.theme.active};
    text-decoration: none;
`;

const EditLink = styled(Link)`
    font-size: 13px;
    font-weight: bold;
    color: ${props => props.theme.main};
    text-decoration: none;
`;

class YourReview extends Component {

    hasReview = () => {
        return !!this.props.review.score;
    }

    updateScore = score => {
        this.props.updateScore(score);
        this.props.history.push('/reviews/add');
    };

    render = () => {
        const {
            userName,
            company,
            comment,
            score,
            createdTime,
        } = this.props.review;
        return [
            this.hasReview() && <YourReviewTitle key={uniq`your-review`}>Your Review</YourReviewTitle>,
            <ReviewLayout key={uniq`your-review`}>
                <Avatar />
                <ContentLayout>
                    {this.hasReview() ?
                        (
                            <UserLayout>
                                <UserName>{userName}</UserName>
                                <EditLink to="/reviews/add">...</EditLink>
                            </UserLayout>
                        ) : (
                            <RateLayout>
                                <RateTitle>Rate and review</RateTitle>
                                <RateHint>Share your experience to help others</RateHint>
                            </RateLayout>
                        )}
                    <RatingLayout>
                        {this.hasReview() ?
                            <Rating
                                initialRating={score}
                                emptySymbol={<UngivenStar />}
                                fullSymbol={<GivenStar />}
                                readonly
                            /> :
                            <Rating
                                initialRating={score}
                                emptySymbol={<PendingStarBig />}
                                fullSymbol={<GivenStarBig />}
                                onChange={this.updateScore}
                            />
                        }
                        {this.hasReview() && <ReviewDate>
                            {moment.unix(createdTime).fromNow()} - {company.displayName}
                        </ReviewDate>
                        }
                    </RatingLayout>
                    {!this.hasReview() || comment ?
                        <Comment>{comment}</Comment> :
                        <PrimaryLink to="/reviews/add">Describe your experience</PrimaryLink>
                    }
                </ContentLayout>
            </ReviewLayout>
        ];
    }
};

export { YourReview };
