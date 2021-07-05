import { MANAGE_VIDEO_MODAL } from '../../../types';

const initialState = {
    isOpen: false,
    data: null
}

const manageModal = (state = initialState, action) => {
    switch(action.type) {
        case MANAGE_VIDEO_MODAL: return {...state, isOpen: action.status, data: action.data };
        default: return state;
    }
}

export default manageModal;

export const getVideoModalStatus = (state) => state.isOpen;
export const getVideoData = (state) => state.data;