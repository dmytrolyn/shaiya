import { SET_PROFILE_DATA, CLEAR_PROFILE_DATA, CHANGE_USER_BALANCE } from '../../types';
import manageRewards from './rewards';
import manageResurrection from './resurrection';
import manageSpenders from './spenders';
import manageRoulette from './roulette';

const initialState = {
    info: null,
}

const manageProfile = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE_DATA: return {...state, info: action.user, 
            rewards: {...state.rewards, data: action.rewards }, 
            resurrection: {...state.resurrection, data: action.chars },
            spenders: {...state.spenders, data: action.spenders },
            roulette: {...state.roulette, data: action.roulette }
        };
        case CLEAR_PROFILE_DATA: return {...initialState, 
            rewards: manageRewards(undefined, action), 
            resurrection: manageResurrection(undefined, action),
            spenders: manageSpenders(undefined, action),
            roulette: manageRoulette(undefined, action)
        };
        case CHANGE_USER_BALANCE: return {...state,
            info: {...state.info, Point: state.info.Point - action.diff }
        }
        default: return {
            info: state.info,
            rewards: manageRewards(state.rewards, action),
            resurrection: manageResurrection(state.resurrection, action),
            spenders: manageSpenders(state.spenders, action),
            roulette: manageRoulette(state.roulette, action)
        };
    }
}

export default manageProfile;

export const getInfo = (state) => state.info;
export const getRewards = (state) => state.rewards;
export const getChars = (state) => state.resurrection;
export const getSpenders = (state) => state.spenders;
export const getRoulette = (state) => state.roulette;