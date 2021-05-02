import axios from 'axios';

const baseInstance = axios.create({
    baseURL: 'http://localhost:3456/api/v1'
})

const protectedInstance = axios.create({
    baseURL: 'http://localhost:3456/api/v1',
    withCredentials: true,
    headers: {
        "Content-type": "application/json"
    },
})

// pages

export const getRankList = () => baseInstance.get('/ranks').then(res => res.data);

export const getGuildsList = () => baseInstance.get('/guilds').then(res => res.data);

export const getNews = () => baseInstance.get('/news').then(res => res.data);

// recent 

export const getTop10Killers = () => baseInstance.get('/recent/players').then(res => res.data);

export const getKillLogs = () => baseInstance.get('/recent/kills').then(res => res.data);

export const getTop10Guilds = () => baseInstance.get('/recent/guilds').then(res => res.data);

export const getOnline = () => baseInstance.get('/recent/online').then(res => res.data[0]);

export const getPlayersCount = () => baseInstance.get('/ranks/count').then(res => res.data[0]);

export const getGuildsCount = () => baseInstance.get('/guilds/count').then(res => res.data[0]);

export const getBossRespawns = (isShort) => baseInstance.get(`/recent/bosses${isShort ? '?short=1' : ""}`).then(res => res.data);

// auth

export const makeLoginRequest = ({ login, password }) => protectedInstance.post('/auth/login', { login, password });

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