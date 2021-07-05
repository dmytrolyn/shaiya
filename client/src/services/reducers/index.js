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

export const getAuthModalStatus = (state) => fromModal.getAuthModalStatus(state.modal);
export const getInitialModalState = (state) => fromModal.getInitialState(state.modal);
export const getVideoModalStatus = (state) => fromModal.getVideoModalStatus(state.modal);
export const getVideoData = (state) => fromModal.getVideoData(state.modal);
// pages
export const getAllRanks = (state) => fromPages.getRanks(state.pages);
export const getAllGuilds = (state) => fromPages.getGuilds(state.pages);
export const getNews = (state) => fromPages.getNews(state.pages);
export const getTopNews = (state) => fromPages.getTopNews(state.pages);
export const getNewsItem = (state, id) => fromPages.getNewsItem(state.pages, id);
export const getDonateList = (state) => fromPages.getDonateList(state.pages);
export const getShop = (state) => fromPages.getShop(state.pages);
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
export const getSpenders = (state) => fromProfile.getSpenders(state.profile);
export const getRoulette = (state) => fromProfile.getRoulette(state.profile);
