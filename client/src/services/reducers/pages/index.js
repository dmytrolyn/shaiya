import { SET_RANKS, SET_GUILDS, SET_KILLS, SET_NEWS } from '../../types';

const initialState = {
    ranks: null,
    guilds: null,
    kills: null,
    news: null
}

const managePages = (state = initialState, action) => {
    switch(action.type) {
        case SET_RANKS: return {...state, ranks: action.ranks };
        case SET_GUILDS: return {...state, guilds: action.guilds };
        case SET_KILLS: return {...state, kills: action.kills };
        case SET_NEWS: return {...state, news: action.news };
        default: return state;
    }
}

export default managePages;

export const getRanks = (state) => state.ranks;
export const getGuilds = (state) => state.guilds;

export const getTopGuilds = (state, top) => state.guilds ? { data: [...state.guilds.data].splice(0, top).map(row => 
    (({ GuildName, Country, GuildPoint }) => ({ GuildName, Country, GuildPoint }))(row)), titles: state.guilds.titles } : null;

export const getKills = (state) => state.kills;

export const getNews = (state) => state.news;

export const getTopNews = (state) => state.news && [...state.news].splice(0, 3);