import React, { Component } from 'react';
import Rating from 'react-rating';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import Modal from 'styled-react-modal'
import {
    UserLayout,
} from './Review';
import {
    PendingStarBig,
    GivenStarBig,
} from './YourReview';
import { scoreMapper, initComment } from '../config';


const ReviewsAddLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled(UserLayout)`
    padding: 10px;
    width: 100%;
    flex-direction: row;
    margin-bottom: 15px;
    background-color: ${props => props.theme.active};
    color: ${props => props.theme.backgroundColor};
`;
const HeaderAnchor = styled.a`
    font-size: 13px;
    color: ${props => props.theme.backgroundColor};
    text-decoration: none;
    cursor: pointer;
`;

const HeaderCompany = styled.span`
    font-size: 13px;
    color: ${props => props.theme.backgroundColor};
`;

const ScoreText = styled.span`
    margin: 15px 0;
    font-size: 12px;
    color: ${props => props.theme.main};
`;

const Name = styled.input`
    width: 100%;
    outline: none;
    padding: 10px 0 10px 5px;
    border: none;
    border-top: 1px solid ${props => lighten(0.2, props.theme.main)};
    border-bottom: 1px solid ${props => lighten(0.2, props.theme.main)};
`;

const Text = styled.textarea`
    margin-left: 5px;
    outline: none;
    width: 100%;
    height: 60px;
    padding: 10px 0px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid ${props => lighten(0.2, props.theme.main)};
    font-family: sans-serif;
    font-size: 13px;
`;

const AcknowledgeModal = Modal.styled`
    width: 250px;
    border-radius: 15px;
    background-color: ${props => props.theme.backgroundColor};;
    text-align: center;
    padding: 0px;
`;

const AcknowledgeTitle = styled.h3`
    font-size: 13px;
    margin: 20px 0 5px;
`;

const AcknowledgeBody = styled.div`
    font-size: 12px;
    color: ${props => props.theme.main};
    padding: 15px;
    border-bottom: 1px solid ${props => darken(0.2, props.theme.main)};
    text-align: center;
`;

const PrimaryButton = styled.button`
    font-size: 13px;
    font-weight: bold;
    color: ${props => props.theme.active};
    background-color: ${props => props.theme.backgroundColor};
    text-decoration: none;
    border: none;
    padding: 10px;
    outline: none;
    cursor: pointer;
`;

class ReviewsAdd extends Component {
    state = {
        isAcknowledge: false
    };

    toggleAcknowledge = () => {
        this.setState(prev => ({
            isAcknowledge: !prev.isAcknowledge
        }));
    };

    closeForm = () => {
        this.props.history.push('/');
    };

    createReview = () => {
        this.props.createReview(this.props.review);
        this.props.history.push('/');
    }

    updateScore = score => {
        this.props.updateReview({ score })
    };

    updateUserName = event => {
        this.props.updateReview({ userName: event.currentTarget.value });
    };

    updateComment = event => {
        this.props.updateReview({ comment: event.currentTarget.value });
    };

    render() {
        const {
            userName,
            company,
            comment,
            score,
        } = this.props.review;

        return (
            <ReviewsAddLayout>
                <Header>
                    <HeaderAnchor onClick={this.closeForm}>Close</HeaderAnchor>
                    <HeaderCompany>Review {company.displayName}</HeaderCompany>
                    <HeaderAnchor onClick={this.toggleAcknowledge}>Save</HeaderAnchor>
                </Header>
                <Rating
                    initialRating={score}
                    emptySymbol={<PendingStarBig />}
                    fullSymbol={<GivenStarBig />}
                    onChange={this.updateScore}
                />
                <ScoreText>{scoreMapper[score]}</ScoreText>
                <Name
                    placeholder="Your Name"
                    defaultValue={userName !== initComment.userName ? userName : ''}
                    onChange={this.updateUserName}
                />
                <Text
                    placeholder="Add more details on your experience ..."
                    defaultValue={comment}
                    onChange={this.updateComment}
                />
                <AcknowledgeModal
                    isOpen={this.state.isAcknowledge}
                    onEscapeKeydown={this.toggleAcknowledge}
                >
                    <AcknowledgeTitle>Thank you for your review</AcknowledgeTitle>
                    <AcknowledgeBody>
                        You're helping others make smarter decisions every day.
                    </AcknowledgeBody>
                    <PrimaryButton onClick={this.createReview}>Okay!</PrimaryButton>
                </AcknowledgeModal>
            </ReviewsAddLayout>
        );
    }
}

export { ReviewsAdd };
