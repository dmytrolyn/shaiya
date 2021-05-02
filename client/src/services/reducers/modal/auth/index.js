import { MANAGE_AUTH_MODAL } from '../../../types';

const initialState = {
    isOpen: false
}

const manageModal = (state = initialState, action) => {
    switch(action.type) {
        case MANAGE_AUTH_MODAL: return {...state, isOpen: action.status};
        default: return state;
    }
}

export default manageModal;

export const getAuthModalStatus = (state) => state.isOpen;