import React, { useEffect } from 'react';
import Profile from './Profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getInfo, getUserChars, getRewards } from '../../services/reducers';
import { setProfileData, manageAlertModal, deleteCharThunk, resurrectCharThunk, getRewardThunk } from '../../services/actions';
import Loading from '../../components/Common/Loading/Loading';
import { AsyncButton } from '../../components/Common/Buttons/Buttons';
import withoutAuthRedirect from '../../hocs/withoutAuthRedirect';
import { getFullUserRequest, getAllUserChars, getRanksRewards } from '../../api/api';

const ProfileContainer = ({ user, chars, rewards, setProfileData, deleteCharThunk, resurrectCharThunk, getRewardThunk, manageAlertModal }) => {
    useEffect(() => {
        const getData = async () => {
            try {
                let [userData, chars, rewards] = await Promise.all([getFullUserRequest(), getAllUserChars(), getRanksRewards()]);
                setProfileData(userData, chars, rewards);
            } catch(err) {

            }
        }
        if(!user) {
            getData();
        }
    })

    const transformDeletedChars = () => {
        let { data, titles } = chars.data.deleted;
        let { loading, errors } = chars;
        let trData = data.map(({CharID, JoinDate, ...item}) => ({...item, Action: <AsyncButton request={() => resurrectCharThunk(CharID)} 
            disabled={chars.data.active.data.length >= 5} 
            isLoading={loading.some(r => r === CharID )}
            error={errors.find(e => e.hasOwnProperty(CharID))}
            text="Resurrect" />}));
        let trTitles = [...titles, "Action"];
        return { data: trData, titles: trTitles };
    }

    const transformActiveChars = () => {
        let { data, titles } = chars.data.active;
        let { loading, errors } = chars;
        let trData = data.map(({CharID, ...item}) => ({...item, Action: <AsyncButton request={() => deleteCharThunk(CharID)}
            isLoading={loading.some(r => r === CharID )}
            error={errors.find(e => e.hasOwnProperty(CharID))}
            text="Delete" />}));
        return { data: trData, titles: [...titles, "Action"] };
    }

    const transformRewards = () => {
        let { data, titles, received, current } = rewards.data;
        let { loading, errors } = rewards;
        let isReceived = (rank) => received.some(r => r.Rank === rank); 
        let trData = data.map(item => ({...item, Action: <AsyncButton locked={current < item.Rank} 
            status={isReceived(item.Rank)} 
            request={() => getRewardThunk(item.Rank)} 
            isLoading={loading.some(r => r === item.Rank )}
            error={errors.find(e => e.hasOwnProperty(item.Rank))}
            text="Get reward" />}));
        return { data: trData, titles: [...titles, "Action"] };
    }

    return (
        !user ? <Loading /> : <Profile user={user} 
                                openChangeAlert={() => manageAlertModal(true, "Your password was successfully changed!")}
                                chars={{ deleted: transformDeletedChars(), active: transformActiveChars() }}
                                rewards={transformRewards()}
                                />
    )
}

const mapStateToProps = (state) => ({
    user: getInfo(state),
    chars: getUserChars(state),
    rewards: getRewards(state)
})

export default compose(withoutAuthRedirect, connect(mapStateToProps, { setProfileData, manageAlertModal, deleteCharThunk, resurrectCharThunk, getRewardThunk }))(ProfileContainer);