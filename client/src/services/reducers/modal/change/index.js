import { MANAGE_CHANGE_MODAL } from '../../../types';

const initialState = {
    isOpen: false,
}

const manageChangeModal = (state = initialState, action) => {
    switch(action.type) {
        case MANAGE_CHANGE_MODAL: {
            return {
                isOpen: action.status,
            }
        }
        default: {
            return state;
        }
    }
}

export default manageChangeModal;

export const changeModalStatus = (state) => state.isOpen;