import { GET_RANK_REWARD, RANK_REWARD_LOADING, RANK_REWARD_ERROR } from '../../../types';

const initialState = {
    data: null,
    loading: [],
    error: ""
}

const manageRewards = (state = initialState, action) => {
    switch(action.type) {
        case GET_RANK_REWARD: {
            let { received } = state.data;
            return {...state, data: {...state.data, received: [...received, { Rank: action.rank }] }};
        }
        case RANK_REWARD_LOADING: {
            let { rank, status } = action;
            if(status) {
                return {...state, loading: [...state.loading, rank]};
            } else {
                return {...state, loading: state.loading.filter(r => r !== rank)};
            }
        }
        case RANK_REWARD_ERROR: {
            return {...state, error: action.error };
        }
        default: return state;
    }
}

export default manageRewards;