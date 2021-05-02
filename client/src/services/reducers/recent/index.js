import { SET_RECENT_DATA, SET_ONLINE, SET_RECENT_LOADING } from '../../types';

const initialState = {
    killers: null,
    guilds: null,
    bosses: null,
    online: null,
    isLoading: true
}

const manageRecent = (state = initialState, action) => {
    switch(action.type) {
        case SET_RECENT_DATA: return {...state, killers: action.killers, guilds: action.guilds, bosses: action.bosses };
        case SET_RECENT_LOADING: return {...state, isLoading: action.status };
        case SET_ONLINE: return {...state, online: {...action.data} };
        default: return state;
    }
}

export default manageRecent;

export const getTopKillers = (state) => state.killers && { data: state.killers.data.map(row => 
    (({ CharName, Family, K1 }) => ({ CharName, Family, K1 }))(row)), titles: state.killers.titles };

export const getTopGuilds = (state) => state.guilds && { data: state.guilds.data.map(row => 
    (({ GuildName, Country, GuildPoint }) => ({ GuildName, Country, GuildPoint }))(row)), titles: state.guilds.titles };

export const getBosses = (state) => state.bosses;

export const getOnline = (state) => state.online;

export const getRecentLoading = (state) => state.isLoading;
