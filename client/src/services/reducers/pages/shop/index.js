import { SET_SHOP, SET_SHOP_ERROR, SET_SHOP_MESSAGE, SET_SHOP_LOADING } from '../../../types';

const initialState = {
    items: null,
    loading: null,
    errors: [],
    messages: []
}

const manageShop = (state = initialState, action) => {
    switch(action.type) {
        case SET_SHOP: return {...state, items: action.shop };
        case SET_SHOP_LOADING: return {...state, loading: action.id };
        case SET_SHOP_ERROR: {
            let { id, message } = action.message;
            if(!message) return {...state, errors: state.errors.filter(i => i.id !== id )};
            else return {...state, errors: [...state.errors, action.message ]};
        }
        case SET_SHOP_MESSAGE: {
            let { id, message } = action.message;
            if(!message) return {...state, messages: state.messages.filter(i => i.id !== id )};
            else return {...state, messages: [...state.messages, action.message ]};
        }
        default: return state;
    }
}

export default manageShop;