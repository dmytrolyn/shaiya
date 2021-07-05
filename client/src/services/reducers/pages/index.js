import { SET_RANKS, SET_GUILDS, SET_NEWS, SET_DONATE } from '../../types';
import manageShop from './shop';

const initialState = {
    ranks: null,
    guilds: null,
    news: null,
    donate: null
}

const managePages = (state = initialState, action) => {
    switch(action.type) {
        case SET_RANKS: return {...state, ranks: action.ranks };
        case SET_GUILDS: return {...state, guilds: action.guilds };
        case SET_NEWS: return {...state, news: action.news };
        case SET_DONATE: return {...state, donate: action.donate };
        default: return {...state, shop: manageShop(state.shop, action) };
    }
}

export default managePages;

export const getRanks = (state) => state.ranks;
export const getGuilds = (state) => state.guilds;

export const getTopGuilds = (state, top) => state.guilds ? { data: [...state.guilds.data].splice(0, top).map(row => 
    (({ GuildName, Country, GuildPoint }) => ({ GuildName, Country, GuildPoint }))(row)), titles: state.guilds.titles } : null;

export const getNews = (state) => state.news;
export const getTopNews = (state) => state.news && [...state.news].splice(0, 3);
export const getNewsItem = (state, id) => state.news.find(item => item.RowID === id);

export const getDonateList = (state) => state.donate;

export const getShop = (state) => state.shop;