import * as types from '../types';
import * as API from '../../api/api';

// modals

export const manageAuthModal = (status = false, state = true) => ({
    type: types.MANAGE_AUTH_MODAL,
    status,
    state
})

export const manageVideoModal = (status = false, data = null) => ({
    type: types.MANAGE_VIDEO_MODAL,
    status,
    data
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

export const setNews = (news) => ({
    type: types.SET_NEWS,
    news
})

export const setDonate = (donate) => ({
    type: types.SET_DONATE,
    donate
})

export const setShopItems = (shop) => ({
    type: types.SET_SHOP,
    shop
})

export const setShopLoading = (id) => ({
    type: types.SET_SHOP_LOADING,
    id
})

export const setShopError = (error) => ({
    type: types.SET_SHOP_ERROR,
    error
})

export const setShopMessage = (message) => ({
    type: types.SET_SHOP_MESSAGE,
    message
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
    dispatch(setRecentLoading(true));
    let [killers, guilds, bosses] = await Promise.all([API.getTop10Killers(), API.getTop10Guilds(), API.getBossRespawns(true)]);
    dispatch(setRecentData(killers, guilds, bosses))
    dispatch(setRecentLoading(false));
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

export const setProfileData = (user, chars, rewards, spenders, roulette) => ({
    type: types.SET_PROFILE_DATA,
    user,
    chars,
    rewards,
    spenders,
    roulette
})

export const changeUserBalance = (diff) => ({
    type: types.CHANGE_USER_BALANCE,
    diff
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

export const charActionError = (charName, error) => ({
    type: types.CHAR_ACTION_ERROR,
    charName,
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

export const rankRewardError = (error) => ({
    type: types.RANK_REWARD_ERROR,
    error
})

export const getSpenderReward = (spenderID, level) => ({
    type: types.GET_SPENDER_REWARD,
    spenderID,
    level
})

export const increaseSpendersStatus = (value) => ({
    type: types.INCREASE_SPENDERS_STATUS,
    value
})

export const spenderRewardLoading = (status) => ({
    type: types.SET_SPENDER_LOADING,
    status
})

export const spenderRewardError = (error) => ({
    type: types.SET_SPENDER_ERROR,
    error
})

export const addRouletteReward = (id) => ({
    type: types.ADD_ROULETTE_REWARD,
    id,
})

export const setRouletteResultMessage = (message) => ({
    type: types.SET_ROULETTE_MESSAGE,
    message
})

export const setRouletteLoading = (loading) => ({
    type: types.SET_ROULETTE_LOADING,
    loading
})

export const setRouletteStatus = (index) => ({
    type: types.SET_ROULETTE_STATUS,
    index
})

export const rouletteError = (error) => ({
    type: types.SET_ROULETTE_ERROR,
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
            dispatch(charActionError(resp.CharName, resp.message))
            setTimeout(() => dispatch(charActionError(resp.CharName, null)), 3000);
        }
    } catch(err) {
        let id = Symbol();
        dispatch(charActionLoading(charID, false));
        dispatch(charActionError(id, "Some error occurred while deleting characheter"));
        setTimeout(() => dispatch(charActionError(id, null)), 3000);
    }
}

export const resurrectCharThunk = (charID) => async (dispatch, getState) => {
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

    let { price } = resurrection.data;
    let { Point } = profile.info;

    if(Point >= price && Point !== 0) {
        try {
            dispatch(charActionLoading(charID, true));
            let resp = await API.makeResurrectRequest({ CharID: charID });
            dispatch(charActionLoading(charID, false));
            if(resp.resultCode === 0) {
                dispatch(changeUserBalance(Number(price)));
                dispatch(resurrectChar(charID));
            } else {
                dispatch(charActionError(resp.CharName, resp.message));
                setTimeout(() => dispatch(charActionError(resp.CharName, null)), 3000);
            }
        } catch(err) {
            let id = Symbol();
            dispatch(charActionLoading(charID, false));
            dispatch(charActionError(id, "Error occured while resurrecting charachter"));
            setTimeout(() => dispatch(charActionError(id, null)), 3000);
        }
    } else {
        dispatch(charActionError("You don't have enough points"));
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
            dispatch(rankRewardError(resp.message));
            setTimeout(() => dispatch(rankRewardError("")), 3000);
        }
    } catch(err) {
        dispatch(rankRewardLoading(rank, false));
        dispatch(rankRewardError("Some error occured while getting reward"));
        setTimeout(() => dispatch(rankRewardError("")), 3000);
    }
} 

export const getSpenderRewardThunk = (spenderID, level, rowID) => async (dispatch) => {
    try {
        dispatch(spenderRewardLoading({ spenderID, level, rowID }));
        let resp = await API.getSpenderReward({ spenderID, level, rowID });
        dispatch(spenderRewardLoading(null));
        if(resp.resultCode === 0) {
            dispatch(getSpenderReward(spenderID, level));
        } else {
            dispatch(spenderRewardError(resp.message));
            setTimeout(() => dispatch(spenderRewardError("")), 3000);
        }
    } catch(err) {
        dispatch(spenderRewardError("Error while getting reward"));
        setTimeout(() => dispatch(spenderRewardError("")), 3000);
    }
}

export const getRouletteRewardThunk = () => async (dispatch, getState) => {
    let { profile } = getState();
    let { price } = profile.roulette.data;
    let { Point } = profile.info;
    if(Point >= price && Point !== 0) {
        try {
            dispatch(setRouletteLoading(true));
            let resp = await API.getRouletteReward();
            if(resp.resultCode === 0) {
                let { message } = resp;
                dispatch(setRouletteStatus(resp.reward))
                setTimeout(() => {
                    dispatch(addRouletteReward(resp.reward));
                    dispatch(changeUserBalance(Number(price)));

                    let id = Symbol();
                    dispatch(setRouletteResultMessage({ id, message }));
                    setTimeout(() => dispatch(setRouletteResultMessage({ id, message: null })), 3000);
                }, 3000)
            } else {
                dispatch(rouletteError(resp.message));
                setTimeout(() => dispatch(rouletteError("")), 3000);
            }
            dispatch(setRouletteLoading(false));
        } catch(err) {
            dispatch(setRouletteLoading(false));
            dispatch(rouletteError("Spin failed. Try later"));
            setTimeout(() => dispatch(rouletteError("")), 3000);
        }
    }
}

export const makePurchaseThunk = (id) => async (dispatch, getState) => {
    let { profile, pages } = getState();
    let { Point } = profile.info;
    let toBuy = pages.shop.items.find(i => i.RowID === id);

    let uid = Symbol();

    try {
        if(Point >= toBuy.Price && Point !== 0) {
            dispatch(setShopLoading(id));
            let resp = await API.makePurchaseRequest(id);
            let { message } = resp;
    
            if(resp.resultCode === 0) {
                dispatch(changeUserBalance(toBuy.Price));
                dispatch(increaseSpendersStatus(toBuy.Price));
    
                dispatch(setShopMessage({ id: uid, message }));
                setTimeout(() => dispatch(setShopMessage({ id: uid, message: null })), 3000);
            } else {
                dispatch(setShopError({ id: uid, message }));
                setTimeout(() => dispatch(setShopError({ id: uid, message: null })), 3000);
            }
        } else {
            dispatch(setShopError({ id: uid, message: "You don't have enough SP to buy this item" }));
            setTimeout(() => dispatch(setShopError({ id: uid, message: null })), 3000);
        }
    } catch(err) {
        dispatch(setShopError({ id: uid, message: "Error while buying item" }));
        setTimeout(() => dispatch(setShopError({ id: uid, message: null })), 3000);
    }
    dispatch(setShopLoading(null));
}