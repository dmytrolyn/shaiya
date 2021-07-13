import axios from 'axios';

const baseInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

const protectedInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
})

// pages

export const getRankList = () => baseInstance.get('/ranks').then(res => res.data);

export const getGuildsList = () => baseInstance.get('/guilds').then(res => res.data);

export const getNews = () => baseInstance.get('/news').then(res => res.data);

export const getDonate = () => protectedInstance.get('/shop/donate').then(res => res.data);

export const getShopItems = () => protectedInstance.get('/shop').then(res => res.data);

export const makePurchaseRequest = (id) => protectedInstance.post('/shop/buy', { id }).then(res => res.data);

// recent 

export const getTop10Killers = () => baseInstance.get('/recent/players').then(res => res.data);

export const getTop10Guilds = () => baseInstance.get('/recent/guilds').then(res => res.data);

export const getOnline = () => baseInstance.get('/recent/online').then(res => res.data);

export const getPlayersCount = () => baseInstance.get('/ranks/count').then(res => res.data[0]);

export const getGuildsCount = () => baseInstance.get('/guilds/count').then(res => res.data[0]);

export const getBossRespawns = (isShort) => baseInstance.get(`/recent/bosses${isShort ? '?short=1' : ""}`).then(res => res.data);

// auth

export const makeLoginRequest = ({ login, password }) => protectedInstance.post('/auth/login', { login, password }).then(resp => resp.data);

export const getUserRequest = () => protectedInstance.get(`/auth/me`).then(resp => resp.data);

export const makeRegisterRequest = (payload) => baseInstance.post('/auth/register', payload).then(resp => resp.data);

export const changePasswordRequest = (payload) => protectedInstance.post('/auth/change', payload).then(resp => resp.data);

// profile 

export const getFullUserRequest = () => protectedInstance.get('/profile/user').then(resp => resp.data);

export const getAllUserChars = () => protectedInstance.get('/profile/resurrect').then(resp => resp.data);

export const makeResurrectRequest = (payload) => protectedInstance.post('/profile/resurrect', payload).then(resp => resp.data);

export const makeDeleteCharRequest = (payload) => protectedInstance.post('/profile/delete', payload).then(resp => resp.data)

export const getRanksRewards = () => protectedInstance.get('/profile/rewards').then(resp => resp.data);

export const getRankRewardRequest = (payload) => protectedInstance.post('/profile/reward', payload).then(resp => resp.data);

export const getActiveSpenders = () => protectedInstance.get('/profile/spenders').then(resp => resp.data);

export const getSpenderReward = (payload) => protectedInstance.post('/profile/spender', payload).then(resp => resp.data);

export const getRouletteItems = () => protectedInstance.get('/profile/roulette').then(resp => resp.data);

export const getRouletteReward = () => protectedInstance.post('/profile/roulette').then(resp => resp.data);

export const getPromotionRewardRequest = (payload) => protectedInstance.post('/profile/promo', payload).then(resp => resp.data);