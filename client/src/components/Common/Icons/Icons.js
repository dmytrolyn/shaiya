import React from 'react';
import active from './assets/arrowActive.png';
import down from './assets/arrowDown.png';
import styles from './styles/styles.module.css';
import userIcon from './assets/userIcon.png';
import logoutIcon from './assets/logout-icon.png';
import shopIcon from './assets/shopping-cart.png';
import settIcon from './assets/setting-icon.png';
import successIcon from './assets/success.png';
import { ReactComponent as LockIconSvg } from './assets/padlock.svg';
import { ReactComponent as CalendarIconSvg } from './assets/calendar-alt-regular.svg';
import { ReactComponent as UsLogIconSvg } from './assets/user-solid.svg';
import { ReactComponent as WifiIconSvg } from './assets/wifi-solid.svg';
import { ReactComponent as ClockIconSvg } from './assets/clock-regular.svg';
import { ReactComponent as CoinsIconSvg } from './assets/coins-solid.svg';
import { ReactComponent as InfoIconSvg } from './assets/info-circle-solid.svg';
import { ReactComponent as GemIconSvg } from './assets/gem-regular.svg';
import { ReactComponent as NurseIconSvg } from './assets/user-nurse-solid.svg';

export const ArrowActive = () => {
    return (
        <img src={active} alt="arrow" />
    )
}

export const ArrowDown = () => {
    return (
        <img className={styles.arrow} src={down} alt="arrow" />
    )
}

export const UserIcon = () => {
    return (
        <img className={styles.user} src={userIcon} alt="user" />
    )
}

export const LogoutIcon = () => {
    return (
        <img src={logoutIcon} alt="logout" />
    )
}

export const ShopIcon = () => {
    return (
        <img src={shopIcon} alt="logout" />
    )
}

export const SettingsIcon = () => {
    return (
        <img src={settIcon} alt="logout" />
    )
}

export const SuccessIcon = () => {
    return (
        <img className={styles.success} src={successIcon} alt="success" />
    )
}

export const LockIcon = () => {
    return (
        <LockIconSvg className={styles.lock} />
    )
}

export const CalendarIcon = (props) => (
    <CalendarIconSvg {...props} />
)

export const UserLoggedIcon = (props) => (
    <UsLogIconSvg {...props} />
)

export const WiFiIcon = (props) => (
    <WifiIconSvg {...props} />
)

export const CoinsIcon = (props) => (
    <CoinsIconSvg {...props} />
)

export const ClockIcon = (props) => (
    <ClockIconSvg {...props} />
)

export const InfoIcon = (props) => (
    <InfoIconSvg {...props} />
)

export const GemIcon = (props) => (
    <GemIconSvg {...props} />
)

export const NurseIcon = (props) => (
    <NurseIconSvg {...props} />
)
