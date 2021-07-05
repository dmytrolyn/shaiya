import { ADD_ROULETTE_REWARD, SET_ROULETTE_LOADING, SET_ROULETTE_ERROR, SET_ROULETTE_STATUS, SET_ROULETTE_MESSAGE } from '../../../types';

const initialState = {
    data: null,
    status: { index: 0, dir: false },
    loading: false,
    messages: [],
    error: ""
}

const manageRoulette = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ROULETTE_REWARD: {
            let item = state.data.items.find(i => i.RowID === action.id);
            let rewards = state.data.rewards.length === 5 ? 
            [...state.data.rewards].filter((item, i) => i !== state.data.rewards.length - 1) : 
            [...state.data.rewards];

            return {
                ...state,
                message: action.message,
                data: {
                    ...state.data,
                    rewards: [{ ItemName: item.ItemName, Count: item.Count, Date: new Date().toUTCString() }, ...rewards]
                }
            }
        }
        case SET_ROULETTE_STATUS: {
            let { index } = action;

            return {
                ...state,
                status: { dir: !state.status.dir , index }
            }
        }
        case SET_ROULETTE_LOADING: return {...state, loading: action.loading };
        case SET_ROULETTE_ERROR: return {...state, error: action.error };
        case SET_ROULETTE_MESSAGE: {
            let { id, message } = action.message;
            if(!message) return {...state, messages: state.messages.filter(i => i.id !== id )};
            else return {...state, messages: [...state.messages, action.message ]};
        }
        default: return state;
    }
}

export default manageRoulette;