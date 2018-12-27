import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal'



const AcknowledgeModal = ({ onClose, onAcknowledge }) => (
    <Modal
        open={this.props.showModal}
        onClose={this.props.onCloseModal}
        center
        styles={modalStyles}
    >
        <ModalTitle>Thank you for your review</ModalTitle>
        <GrayedSmallText>
            You're helping others make smarter decisions every day.
            </GrayedSmallText>
        <hr />
        <ModalButton onClick={this.props.onModalConfirm}>
            Okay!
            </ModalButton>
    </Modal>
);

export { AcknowledgeModal };


const ModalTitle = styled.h3`
    font-size: 13px;
    margin: 20px 0 5px;
`;

const ModalButton = styled(StyledAnchor)`
    padding-bottom: 10px;
    display: block;
`;
