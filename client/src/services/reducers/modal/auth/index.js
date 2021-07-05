import { MANAGE_AUTH_MODAL } from '../../../types';

const initialState = {
    isOpen: false,
    state: true
}

const manageModal = (state = initialState, action) => {
    switch(action.type) {
        case MANAGE_AUTH_MODAL: return {...state, isOpen: action.status, state: action.state };
        default: return state;
    }
}

export default manageModal;

export const getAuthModalStatus = (state) => state.isOpen;
export const getInitialState = (state) => state.state;