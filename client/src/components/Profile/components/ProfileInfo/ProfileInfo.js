import React from 'react';
import { ClockIcon, CalendarIcon, UserLoggedIcon, CoinsIcon, WiFiIcon } from '../../../Common/Icons/Icons';
import { ContentSection } from '../../../Common/styled/components';
import { ButtonBlue } from '../../../Common/Buttons/Buttons';
import styles from '../../styles/styles.module.css';

const ProfileInfo = ({ user }) => {
    return (
        <>
            <ContentSection>
                <div className={styles.profileInfoWrap}>
                    <ul className={styles.profileInfo}>
                        <li className={styles.profileInfoItem}>
                            <span className={styles.attr}><UserLoggedIcon className={styles.icon} /> Login</span> - <span className={styles.value}>{user.UserID}</span>
                        </li>
                        <li className={styles.profileInfoItem}>
                            <span className={styles.attr}><CalendarIcon className={styles.icon} /> Registered at</span> - <span className={styles.value}>{(() => new Date(user.JoinDate).toLocaleString())()}</span>
                        </li>
                        <li className={styles.profileInfoItem}>
                            <span className={styles.attr}><ClockIcon className={styles.icon} /> Last entered</span> - <span className={styles.value}>{(() => {
                                if(user.LeaveDate) {
                                    return new Date(user.LeaveDate).toLocaleString();
                                } else {
                                    return "None";
                                }
                            })()}</span>
                        </li>
                    </ul>
                    <ul className={styles.profileInfo}>
                        <li className={styles.profileInfoItem}>
                            <span className={styles.attr}><WiFiIcon className={styles.icon} /> IP Address</span> - <span className={styles.value}>{user.UserIp}</span>
                        </li>
                        <li className={styles.profileInfoItem}>
                            <span className={styles.attr}><CoinsIcon className={styles.icon} /> Points</span> - <span className={styles.value}>{user.Point}</span>
                        </li>
                    </ul>
                </div>
            </ContentSection>
        </>
    )
}

export default ProfileInfo;