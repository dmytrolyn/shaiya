import { RESURRECT_CHAR, DELETE_CHAR, CHAR_ACTION_LOADING, CHAR_ACTION_ERROR } from '../../../types';

const initialState = {
    data: null,
    loading: [],
    errors: []
}

const manageResurrection = (state = initialState, action) => {
    switch(action.type) {
        case RESURRECT_CHAR: {
            let { deleted, active } = state.data;
            let { DeleteDate, ...resurrectedChar } = deleted.data.find(item => item.CharID === action.charID);
            let updateActive = [...active.data, { ...resurrectedChar, JoinDate: new Date() }];
            let updateDeleted = deleted.data.filter(item => item.CharID !== action.charID);
            return {...state, data: {...state.data, active: {...active, data: updateActive }, deleted: {...deleted, data: updateDeleted }}};
        }
        case DELETE_CHAR: {
            let { deleted, active } = state.data;
            let { JoinDate, ...deletedChar } = active.data.find(item => item.CharID === action.charID);
            let updateActive = active.data.filter(item => item.CharID !== action.charID);
            let updateDeleted = [...deleted.data, { ...deletedChar, DeleteDate: new Date() }];
            return {...state, data: {...state.data, active: {...active, data: updateActive }, deleted: {...deleted, data: updateDeleted }}};
        }
        case CHAR_ACTION_LOADING: {
            let { charID, status } = action;
            if(status) {
                return {...state, loading: [...state.loading, charID ]};
            } else {
                return {...state, loading: state.loading.filter(id => id !== charID)};
            }
        }
        case CHAR_ACTION_ERROR: {
            let { charName, error } = action;
            if(error) {
                return {...state, errors: [...state.errors, { CharName: charName, error } ]};
            } else {
                return {...state, errors: state.errors.filter(e => e.CharName !== charName)};
            }
        }
        default: return state;
    }
}

export default manageResurrection;