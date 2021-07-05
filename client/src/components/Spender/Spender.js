import React, { useState } from 'react';
import styles from './styles/styles.module.css';
import { Progress, ProgressLevel, ProgressLevelValue, ProgressBar, ProgressBarValue, TierColor, RewardTab, LevelMessage } from './styled/components';
import { LockStatusIcon, UnlockStatusIcon, CheckStatusIcon } from '../Common/Icons/Icons';
import { ContentMessageError } from '../Common/styled/components';
import { ContentItemWrap } from '../Common/Wrappers/Wrappers';
import * as status from './constants';
import cn from 'classnames';
import { ButtonBlue } from '../Common/Buttons/Buttons';
import { Layout } from '../Common/Loading/Layout';

const getTimeLeft = (end) => {
    let startDate = new Date();
    let endDate = new Date(end);
    let diffTime = endDate - startDate;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days` : 'Event ended';
}

const tabStatusIcons = {
    [status.REDEEMED]: <CheckStatusIcon className={cn(styles.statusIcon, styles.statusIconRedeemed)} />,
    [status.UNLOCKED]: <UnlockStatusIcon className={cn(styles.statusIcon, styles.statusIconUnlock)} />,
    [status.LOCKED]: <LockStatusIcon className={cn(styles.statusIcon, styles.statusIconLock)} />,
    [status.PROGRESS]: <LockStatusIcon className={cn(styles.statusIcon, styles.statusIconLock)} />
}

const Spender = ({ spender, loading, error, getReward }) => {
    const [tabRewardStatus, setTabRewardStatus] = useState(1);
    const levels = [...Array(spender?.Stages).keys()].map(y => ++y);

    const levelMessage = {
        [status.REDEEMED]: 'You have already got reward for this level',
        [status.UNLOCKED]: 'You can gain reward for this level',
        [status.LOCKED]: `You have to spend ${spender?.[`Level${tabRewardStatus}`] - spender?.status} SP to reach this level`,
        [status.PROGRESS]: `You have to spend ${spender?.[`Level${tabRewardStatus}`] - spender?.status} SP to reach this level`
    }

    const setProgressStatus = (i, nextLevel, prevLevel) => {
        if(spender.received.some(el => el === i)) {
            return status.REDEEMED;
        } else {
            if(spender.status > prevLevel && spender.status < nextLevel) {
                return status.PROGRESS;
            } else if(spender.status >= nextLevel) {
                return status.UNLOCKED;
            } else {
                return status.LOCKED;
            }
        }
    }

    const setCurrentProgressStatus = () => setProgressStatus(tabRewardStatus, spender[`Level${tabRewardStatus}`], spender[`Level${tabRewardStatus - 1}`]);

    const calculateProgress = (progress, prevLevel = 0, nextLevel) => (progress - prevLevel) / (nextLevel - prevLevel) * 100;

    const renderLevels = () => levels.map(i => <ProgressLevel key={i}>
        <ProgressLevelValue>{spender[`Level${i}`]}</ProgressLevelValue>
        <ProgressBar><ProgressBarValue status={setProgressStatus(i, spender[`Level${i}`], spender[`Level${i - 1}`])} progress={calculateProgress(spender.status, spender[`Level${i - 1}`], spender[`Level${i}`])} /></ProgressBar>
        <ProgressLevelValue>{i}</ProgressLevelValue>
    </ProgressLevel>)

    const renderLevelsTabs = () => levels.map(i => {
        let status = setProgressStatus(i, spender[`Level${i}`], spender[`Level${i - 1}`]);
        return <RewardTab key={i} status={status} active={tabRewardStatus === i} onClick={() => setTabRewardStatus(i)}>
            {tabStatusIcons[status]} Level {i}
        </RewardTab>
    })

    const setLevelMessage = () => levelMessage[setCurrentProgressStatus()];

    const renderRewards = () => spender.items.reduce((items, next) => {
        let newItem = <ContentItemWrap key={next.RowID} size={2} className={styles.reward}>
            <img className={styles.rewardIcon} src={`${process.env.REACT_APP_STATIC_ICONS}/${next.Img}`} alt="reward" />
            <div className={styles.rewardItem}>
                <span className={styles.rewardName}>{next.ItemName} x{next.Count}</span>
            </div>
            <ButtonBlue disabled={setCurrentProgressStatus() !== status.UNLOCKED} onClick={() => getReward(spender.RowID, next.TieredSpenderLevel, next.RowID)} className={styles.rewardButton} text="Redeem" />
            <Layout cn={styles.loading} show={loading} withLoading={loading && loading.level === next.TieredSpenderLevel 
                && loading.rowID === next.RowID
                && loading.spenderID === spender.RowID }/>
        </ContentItemWrap>
        return next.TieredSpenderLevel === tabRewardStatus ? [...items, newItem] : items;
    }, [])
    
    return (
        spender ? <div className={styles.spender}>
            <div className={styles.spenderHead}>
                <div className={styles.amountSpent}>Currently spent - <span>{spender.status} SP</span></div>
                <div className={styles.timeLeft}>{getTimeLeft(spender.EndDate)}</div>
            </div>
            <div className={styles.spenderBody}>
                <Progress>
                    {renderLevels()}
                </Progress>
                <div className={styles.tierStatus}>
                    <div className={styles.tier}><TierColor status={status.UNLOCKED} /><span>Tier unlocked</span></div>
                    <div className={styles.tier}><TierColor status={status.PROGRESS} />Tier progress</div>
                    <div className={styles.tier}><TierColor status={status.REDEEMED} />Tier redeemed</div>
                </div>
                <div className={styles.rewardsWrap}>
                    <div className={styles.rewardsTabs}>
                        {renderLevelsTabs()}
                    </div>
                    {error && <ContentMessageError>{error}</ContentMessageError>}
                    <LevelMessage status={setCurrentProgressStatus()}>
                        {setLevelMessage()}
                    </LevelMessage>
                    <div className={styles.rewards}>
                        {renderRewards()}
                    </div>
                </div>
            </div>
        </div> : null
    )
}

export default Spender;