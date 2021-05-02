import React, { useState } from 'react';
import styles from './styles/styles.module.css';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import Rewards from './components/Rewards/Rewards';
import Resurrection from './components/Resurrection/Resurrection';
import { InfoIcon, NurseIcon, GemIcon } from '../Common/Icons/Icons';
import cn from 'classnames';

const tabsData = [{ icon: <InfoIcon className={styles.icon} />, title: "Info" }, 
{ icon: <GemIcon className={styles.icon} />, title: "PvP Rewards" }, 
{ icon: <NurseIcon className={styles.icon} />, title: "Resurrection" }];

const ProfileBlock = ({ user, chars, rewards }) => {
    const [tabState, setTabState] = useState(0);

    const switchBlockData = () => {
        switch(tabState) {
            case 1: return <Rewards rewards={rewards} />;
            case 2: return <Resurrection chars={chars} />;
            default: return <ProfileInfo user={user} />;
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.profileWrap}>
                <div className={styles.profileContent}>
                    {switchBlockData()}
                </div>
                <div className={styles.optionsPanel}>
                    <div className={styles.g1}>
                        Welcome <span className={styles.login}>{user.UserID}</span> !<br />
                        <span className={styles.g2}>Balance: <span className={styles.points}> {user.Point}</span> SP</span>
                    </div>
                    <div className={styles.tabsWrap}>
                        {tabsData.map((item, index) => <div key={item.title} className={cn(styles.tab, "c-pointer", tabState === index && styles.active)}
                        onClick={() => setTabState(index)}><div className={styles.tabTitle}>{item.icon}{item.title}</div></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBlock;