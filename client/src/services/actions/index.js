import * as types from '../types';
import * as API from '../../api/api';

// modals

export const manageAuthModal = (status = false) => ({
    type: types.MANAGE_AUTH_MODAL,
    status
})

export const manageAlertModal = (status = false, message = "") => ({
    type: types.MANAGE_ALERT_MODAL,
    status,
    message
})

export const manageChangeModal = (status = false) => ({
    type: types.MANAGE_CHANGE_MODAL,
    status
})

// pages

export const setRanks = (ranks) => ({
    type: types.SET_RANKS,
    ranks
})

export const setGuilds = (guilds) => ({
    type: types.SET_GUILDS,
    guilds
})

export const setKills = (kills) => ({
    type: types.SET_KILLS,
    kills
})

export const setNews = (news) => ({
    type: types.SET_NEWS,
    news
})

// recent

export const setRecentData = (killers, guilds, bosses) => ({
    type: types.SET_RECENT_DATA,
    killers,
    guilds,
    bosses
})

const setRecentLoading = (status) => ({
    type: types.SET_RECENT_LOADING,
    status
})

export const getRecentStats = () => async (dispatch) => {
    try {
        dispatch(setRecentLoading(true));
        let [killers, guilds, bosses] = await Promise.all([API.getTop10Killers(), API.getTop10Guilds(), API.getBossRespawns(true)]);
        dispatch(setRecentData(killers, guilds, bosses))
        dispatch(setRecentLoading(false));
    } catch(err) {

    }
}

// auth

export const login = (user) => ({
    type: types.LOGIN,
    user
})

export const logout = () => ({
    type: types.LOGOUT
})

export const logoutThunk = () => (dispatch) => {
    dispatch(clearProfileData());
    dispatch(logout());
}

// init 

export const setOnline = (data) => ({
    type: types.SET_ONLINE,
    data
})

// profile 

export const setProfileData = (user, chars, rewards) => ({
    type: types.SET_PROFILE_DATA,
    user,
    chars,
    rewards
})

export const clearProfileData = () => ({
    type: types.CLEAR_PROFILE_DATA
})

export const deleteChar = (charID) => ({
    type: types.DELETE_CHAR,
    charID
})

export const resurrectChar = (charID) => ({
    type: types.RESURRECT_CHAR,
    charID
})

export const charActionError = (charID, error) => ({
    type: types.CHAR_ACTION_ERROR,
    charID,
    error
})

export const charActionLoading = (charID, status) => ({
    type: types.CHAR_ACTION_LOADING,
    charID,
    status
})

export const getRankReward = (rank) => ({
    type: types.GET_RANK_REWARD,
    rank
})

export const rankRewardLoading = (rank, status) => ({
    type: types.RANK_REWARD_LOADING,
    rank,
    status
})

export const rankRewardError = (rank, error) => ({
    type: types.RANK_REWARD_ERROR,
    rank,
    error
})

export const deleteCharThunk = (charID) => async (dispatch) => {
    try {
        dispatch(charActionLoading(charID, true));
        let resp = await API.makeDeleteCharRequest({ CharID: charID });
        dispatch(charActionLoading(charID, false));
        if(resp.resultCode === 0) {
            dispatch(deleteChar(charID));
        } else {
            dispatch(charActionError(charID, resp.message))
        }
    } catch(err) {
        dispatch(charActionError(charID, "Error. Try later"));
    }
}

export const resurrectCharThunk = (charID) => async (dispatch, getState) => {
    try {
        let { profile } = getState();
        let { resurrection } = profile;
        let activePlayers = resurrection.data.active.data;
        let deletedPlayers = resurrection.data.deleted.data;
        let activeCount = activePlayers.length;
        let fetchingPlayers = resurrection.loading.reduce((arr, id) => {
            if(deletedPlayers.some(item => item.CharID === id)) {
                arr.push(id);
            }
            return arr;
        }, []);
        let fetchingCount = fetchingPlayers.length;

        if(activeCount + fetchingCount >= 5) {
            return;
        }

        dispatch(charActionLoading(charID, true));
        let resp = await API.makeResurrectRequest({ CharID: charID });
        dispatch(charActionLoading(charID, false));
        if(resp.resultCode === 0) {
            dispatch(resurrectChar(charID));
        } else {
            dispatch(charActionError(charID, resp.message))
        }
    } catch(err) {
        dispatch(charActionError(charID, "Error. Try later"));
    }
}

export const getRewardThunk = (rank) => async (dispatch) => {
    try {
        dispatch(rankRewardLoading(rank, true));
        let resp = await API.getRankRewardRequest({ rank });
        dispatch(rankRewardLoading(rank, false));
        if(resp.resultCode === 0) {
            dispatch(getRankReward(rank));
        } else {
            dispatch(rankRewardError(rank, resp.message));
        }
    } catch(err) {
        dispatch(rankRewardError(rank, "Error. Try later"));
    }
} 