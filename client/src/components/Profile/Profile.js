import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/styles.module.css';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import Rewards from './components/Rewards/Rewards';
import Resurrection from './components/Resurrection/Resurrection';
import TieredSpender from './components/TieredSpender/TieredSpender';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Roulette from './components/Roulette/Roulette';
import Promotion from './components/Promotion/Promotion';
import { SideBar } from './styled/components';
import { InfoIcon, NurseIcon, GemIcon, CoinsIcon, KeyIcon, SignOutIcon, DiceIcon, TicketIcon } from '../Common/Icons/Icons';
import cn from 'classnames';
import { Redirect } from 'react-router-dom';

const tabsData = [{ icon: <InfoIcon className={styles.icon} />, title: "Info" }, 
    { icon: <GemIcon className={styles.icon} />, title: "PvP Rewards" }, 
    { icon: <NurseIcon className={styles.icon} />, title: "Resurrection" },
    { icon: <CoinsIcon className={styles.icon} />, title: "Tiered spender" },
    { icon: <KeyIcon className={styles.icon} />, title: "Change password" },
    { icon: <TicketIcon className={styles.icon} />, title: "Promo code" },
    { icon: <DiceIcon className={styles.icon} />, title: "Roulette"},
    { icon: <SignOutIcon className={styles.icon} />, title: "Logout" },
];

const ProfileBlock = ({ init, user, chars, rewards, spenders, roulette, getSpenderReward, getRouletteReward, logout }) => {
    const [tabState, setTabState] = useState(0);

    const switchBlockData = () => {
        switch(tabState) {
            case 1: return <Rewards rewards={rewards} />;
            case 2: return <Resurrection chars={chars} />;
            case 3: return <TieredSpender spenders={spenders} getReward={getSpenderReward} />;
            case 4: return <ChangePassword />;
            case 5: return <Promotion />;
            case 6: return <Roulette hasMoney={user.Point >= roulette.data.price} roulette={roulette} getReward={getRouletteReward} />;
            case 7: {
                logout();
                return <Redirect to="/" />
            }
            default: return <ProfileInfo user={user} />;
        }
    }

    useEffect(() => {
        if(init) setTabState(init);
    }, [init])

    return (
        <div className={styles.content}>
            <div className={styles.profileWrap}>
                <div className={styles.profileContent}>
                    {switchBlockData()}
                </div>
                <SideBar width={30}>
                    <div className={styles.g1}>
                        Welcome <span className={styles.login}>{user.UserID}</span> !<br />
                        <span className={styles.g2}>Balance: <Link to="/donate" className={cn(styles.points, "c-pointer")}> {user.Point}</Link> SP</span>
                    </div>
                    <div className={styles.tabsWrap}>
                        {tabsData.map((item, index) => <div key={item.title} className={cn(styles.tab, "c-pointer", tabState === index && styles.active)}
                        onClick={() => setTabState(index)}><div className={styles.tabTitle}>{item.icon}{item.title}</div></div>)}
                    </div>
                </SideBar>
            </div>
        </div>
    )
}

export default ProfileBlock;