import { MANAGE_ALERT_MODAL } from '../../../types';

const initialState = {
    isOpen: false,
    message: ""
}

const manageAlertModal = (state = initialState, action) => {
    switch(action.type) {
        case MANAGE_ALERT_MODAL: {
            return {
                isOpen: action.status,
                message: action.message
            }
        }
        default: {
            return state;
        }
    }
}

export default manageAlertModal;

export const alertModalStatus = (state) => state.isOpen;
export const alertModalMessage = (state) => state.message;