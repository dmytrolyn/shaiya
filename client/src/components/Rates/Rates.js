import React from 'react';
import TopRanks from './components/TopRanks';
import BossTimerContainer from './components/BossTimer/BossTimerContainer';
import SocialNetworks from './components/SocialNetworks';
import styles from './styles/styles.module.css';

const Rates = ({ topKillers, topGuilds, bosses, openAuth, hasAuth }) => {
    return (
        <div className={styles.ratesWrap}>
            <TopRanks killers={topKillers} guilds={topGuilds} />
            <BossTimerContainer bosses={bosses} />
            <SocialNetworks hasAuth={hasAuth} openModal={openAuth} />
        </div>
    )
}

export default Rates;