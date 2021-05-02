import { combineReducers } from 'redux';
import modal, * as fromModal from './modal';
import pages, * as fromPages from './pages';
import recent, * as fromRecent from './recent';
import auth, * as fromAuth from './auth';
import profile, * as fromProfile from './profile';

export default combineReducers({
    modal,
    pages,
    auth,
    recent,
    profile
})

export const getAlertModalMessage = (state) => fromModal.getAlertModalMessage(state.modal);
export const getAlertModalStatus = (state) => fromModal.getAlertModalStatus(state.modal);
export const getAuthModalStatus = (state) => fromModal.getAuthModalStatus(state.modal);
export const getChangeModalStatus = (state) => fromModal.getChangeModalStatus(state.modal);
// pages
export const getAllRanks = (state) => fromPages.getRanks(state.pages);
export const getAllGuilds = (state) => fromPages.getGuilds(state.pages);
export const getKills = (state) => fromPages.getKills(state.pages);
export const getNews = (state) => fromPages.getNews(state.pages);
export const getTopNews = (state) => fromPages.getTopNews(state.pages);
// recent
export const getTopKillers = (state) => fromRecent.getTopKillers(state.recent);
export const getTopGuilds = (state) => fromRecent.getTopGuilds(state.recent);
export const getBosses = (state) => fromRecent.getBosses(state.recent);
export const getRecentLoading = (state) => fromRecent.getRecentLoading(state.recent);
// init
export const getOnline = (state) => fromRecent.getOnline(state.recent);
// auth
export const getUser = (state) => fromAuth.getUser(state.auth);
export const getAuth = (state) => fromAuth.getAuth(state.auth);
// profile
export const getInfo = (state) => fromProfile.getInfo(state.profile);
export const getUserChars = (state) => fromProfile.getChars(state.profile);
export const getRewards = (state) => fromProfile.getRewards(state.profile);
