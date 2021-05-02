import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import AlertWindow from './AlertWindow';
import { manageAlertModal } from '../../services/actions';
import { getAlertModalStatus, getAlertModalMessage } from '../../services/reducers';
import styles from './styles/styles.module.css';
import cn from 'classnames';

const AlertModal = ({ isOpen, message, manageAlertModal }) => {
    return (
        <Modal isOpen={isOpen}
        onRequestClose={() => manageAlertModal(false)}
        className={styles.modal}
        overlayClassName={cn(styles.modalOverlay, styles.overlay)}>
            <AlertWindow message={message} handleClose={manageAlertModal} />
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    isOpen: getAlertModalStatus(state),
    message: getAlertModalMessage(state)
})

export default connect(mapStateToProps, { manageAlertModal })(AlertModal);