import React, { useEffect } from 'react';
import Profile from './Profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getInfo, getUserChars, getRewards, getSpenders, getRoulette } from '../../services/reducers';
import { setProfileData, deleteCharThunk, resurrectCharThunk, getRewardThunk, getSpenderRewardThunk, getRouletteRewardThunk, logoutThunk } from '../../services/actions';
import Loading from '../../components/Common/Loading/Loading';
import { AsyncButton } from '../../components/Common/Buttons/Buttons';
import withoutAuthRedirect from '../../hocs/withoutAuthRedirect';
import { getFullUserRequest, getAllUserChars, getRanksRewards, getActiveSpenders, getRouletteItems } from '../../api/api';

const ProfileContainer = ({ location, user, chars, rewards, spenders, roulette, setProfileData, deleteCharThunk, 
    resurrectCharThunk, getRewardThunk, getSpenderRewardThunk, getRouletteRewardThunk, logoutThunk }) => {
        
    useEffect(() => {
        const getData = async () => {
            let [userData, chars, rewards, spenders, roulette] = await Promise.all([getFullUserRequest(), getAllUserChars(), getRanksRewards(), getActiveSpenders(), getRouletteItems()]);
            setProfileData(userData, chars, rewards, spenders, roulette);
        }
        if(!user) getData();
    })

    const transformDeletedChars = () => {
        let { data, titles } = chars.data.deleted;
        let { loading } = chars;
        let trData = data.map(({CharID, JoinDate, ...item}) => ({...item, Action: <AsyncButton request={() => resurrectCharThunk(CharID)} 
            disabled={chars.data.active.data.length >= 5} 
            isLoading={loading.some(r => r === CharID )}
            text="Resurrect" />}));
        let trTitles = [...titles, "Action"];
        return { data: trData, titles: trTitles };
    }

    const transformActiveChars = () => {
        let { data, titles } = chars.data.active;
        let { loading } = chars;
        let trData = data.map(({CharID, ...item}) => ({...item, Action: <AsyncButton request={() => deleteCharThunk(CharID)} isLoading={loading.some(r => r === CharID )} text="Delete" />}));
        return { data: trData, titles: [...titles, "Action"] };
    }

    const transformRewards = () => {
        let { data, titles, received, current } = rewards.data;
        let { loading } = rewards;
        let isReceived = (rank) => received.some(r => r.Rank === rank); 
        let trData = data.map(item => ({...item, Action: <AsyncButton locked={current < item.Rank} status={isReceived(item.Rank)} request={() => getRewardThunk(item.Rank)} isLoading={loading.some(r => r === item.Rank )} text="Get reward" />}));
        return { data: trData, titles: [...titles, "Action"], error: rewards.error };
    }

    return (
        !user ? <Loading /> : <Profile user={user}
                                chars={{ deleted: transformDeletedChars(), active: transformActiveChars(), price: chars.data.price, errors: chars.errors }}
                                rewards={transformRewards()}
                                spenders={spenders}
                                roulette={roulette}
                                getRouletteReward={getRouletteRewardThunk}
                                getSpenderReward={getSpenderRewardThunk}
                                logout={logoutThunk}
                                init={location.state}
                                />
    )
}

const mapStateToProps = (state) => ({
    user: getInfo(state),
    chars: getUserChars(state),
    rewards: getRewards(state),
    spenders: getSpenders(state),
    roulette: getRoulette(state)
})

export default compose(withoutAuthRedirect, withRouter, connect(mapStateToProps, { setProfileData, 
    deleteCharThunk, 
    resurrectCharThunk, 
    getRewardThunk,
    getSpenderRewardThunk,
    getRouletteRewardThunk,
    logoutThunk }))(ProfileContainer);