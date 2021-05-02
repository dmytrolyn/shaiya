import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Common/Modal/Modal';
import ChangeForm from './ChangeForm';
import { manageChangeModal, manageAlertModal } from '../../services/actions';
import { getChangeModalStatus } from '../../services/reducers';

const ChangeModal = ({ isOpen, manageChangeModal, manageAlertModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => manageChangeModal(false)}
        >
            <ChangeForm handleClose={() => manageChangeModal(false)} openAlert={() => manageAlertModal(true, "Your password was successfully changed!")}/>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    isOpen: getChangeModalStatus(state)
})

export default connect(mapStateToProps, { manageChangeModal, manageAlertModal })(ChangeModal);