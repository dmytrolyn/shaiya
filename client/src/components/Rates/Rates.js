import React from 'react';
import TopRanks from './components/TopRanks';
import BossTimerContainer from './components/BossTimer/BossTimerContainer';
import SocialNetworks from './components/SocialNetworks';
import styles from './styles/styles.module.css';

const Rates = ({ killers, guilds, bosses }) => {
    return (
        <div className={styles.ratesWrap}>
            <TopRanks killers={killers} guilds={guilds} />
            <BossTimerContainer bosses={bosses} />
            <SocialNetworks />
        </div>
    )
}

export default Rates;