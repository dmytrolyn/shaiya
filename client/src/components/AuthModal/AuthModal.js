import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Common/Modal/Modal';
import AuthWindow from './AuthWindow';
import { manageAuthModal, login } from '../../services/actions';
import { getAuthModalStatus, getInitialModalState } from '../../services/reducers';

const AuthModal = ({ isOpen, initState, manageAuthModal, login }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => manageAuthModal(false)}
        >
            <AuthWindow handleClose={() => manageAuthModal(false)}
                        login={login}
                        init={initState}
            />
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    isOpen: getAuthModalStatus(state),
    initState: getInitialModalState(state)
})

export default connect(mapStateToProps, { manageAuthModal, login })(AuthModal);