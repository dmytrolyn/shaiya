import { combineReducers } from 'redux'; 
import alert, * as fromAlert from './alert';
import auth, * as fromAuth from './auth';
import change, * as fromChange from './change';

export default combineReducers({
    alert,
    auth,
    change
})

export const getAuthModalStatus = (state) => fromAuth.getAuthModalStatus(state.auth);

export const getAlertModalStatus = (state) => fromAlert.alertModalStatus(state.alert);
export const getAlertModalMessage = (state) => fromAlert.alertModalMessage(state.alert);

export const getChangeModalStatus = (state) => fromChange.changeModalStatus(state.change);