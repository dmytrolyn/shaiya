import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Common/Modal/Modal';
import AuthWindow from './AuthWindow';
import { manageAuthModal, manageAlertModal, login } from '../../services/actions';
import { getAuthModalStatus } from '../../services/reducers';

const AuthModal = ({ isOpen, manageAuthModal, manageAlertModal, login }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => manageAuthModal(false)}
        >
            <AuthWindow handleClose={() => manageAuthModal(false)}
                        login={login}
                        openAlert={() => manageAlertModal(true, "Your account was successfully registered!")}
            />
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    isOpen: getAuthModalStatus(state)
})

export default connect(mapStateToProps, { manageAuthModal, manageAlertModal, login })(AuthModal);