import { combineReducers } from "redux";
import auth, * as fromAuth from './auth';
import video, * as fromVideo from './video';

export default combineReducers({
    auth,
    video
})

export const getAuthModalStatus = (state) => fromAuth.getAuthModalStatus(state.auth);
export const getInitialState = (state) => fromAuth.getInitialState(state.auth);

export const getVideoModalStatus = (state) => fromVideo.getVideoModalStatus(state.video);
export const getVideoData = (state) => fromVideo.getVideoData(state.video);