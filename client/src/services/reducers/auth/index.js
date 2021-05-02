import { LOGIN, LOGOUT } from '../../types';

const initialState = {
    hasAuth: false,
    user: null
}

const manageAuth = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN: return { hasAuth: true, user: action.user };
        case LOGOUT: return { hasAuth: false, user: null };
        default: return state;
    }
}

export const getUser = (state) => state.user;
export const getAuth = (state) => state.hasAuth;

export default manageAuth;