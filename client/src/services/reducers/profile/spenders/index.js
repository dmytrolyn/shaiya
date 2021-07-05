import { GET_SPENDER_REWARD, SET_SPENDER_LOADING, SET_SPENDER_ERROR, INCREASE_SPENDERS_STATUS } from '../../../types';

const initialState = {
    data: null,
    loading: null,
    error: ""
}

const manageSpenders = (state = initialState, action) => {
    switch(action.type) {
        case GET_SPENDER_REWARD: {
            let spender = state.data.find(s => s.RowID === action.spenderID);
            let receivedRewards = spender.received;
            return {...state, data: [...state.data.filter(item => item.RowID !== action.spenderID), 
                {...spender, received: [...receivedRewards, action.level ]}]};
        }
        case SET_SPENDER_LOADING: return {...state, loading: action.status };
        case SET_SPENDER_ERROR: return {...state, error: action.error };
        case INCREASE_SPENDERS_STATUS: return {...state, data: state.data.map(spender => ({ ...spender, status: spender.status + action.value }))};
        default: return state;
    }
}

export default manageSpenders;