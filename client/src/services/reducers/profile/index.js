import { SET_PROFILE_DATA, CLEAR_PROFILE_DATA } from '../../types';
import manageRewards from './rewards';
import manageResurrection from './resurrection';

const initialState = {
    info: null,
}

const manageProfile = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE_DATA: return {...state, info: action.user, rewards: {...state.rewards, data: action.rewards } , resurrection: {...state.resurrection, data: action.chars } };
        case CLEAR_PROFILE_DATA: return {...initialState, 
            rewards: manageRewards(undefined, action), 
            resurrection: manageResurrection(undefined, action)
        };
        default: return {
            info: state.info,
            rewards: manageRewards(state.rewards, action),
            resurrection: manageResurrection(state.resurrection, action)
        };
    }
}

export default manageProfile;

export const getInfo = (state) => state.info;
export const getRewards = (state) => state.rewards;
export const getChars = (state) => state.resurrection;