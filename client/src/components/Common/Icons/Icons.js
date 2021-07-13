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
import { ReactComponent as GiftsIconSvg } from './assets/gifts-solid.svg';
import { ReactComponent as LockSvg } from './assets/lock-solid.svg';
import { ReactComponent as UnlockSvg } from './assets/unlock-solid.svg';
import { ReactComponent as CheckSvg } from './assets/check-solid.svg';
import { ReactComponent as KeySvg } from './assets/key-solid.svg';
import { ReactComponent as SignOutSvg } from './assets/sign-out-alt-solid.svg';
import { ReactComponent as StatusSvg } from './assets/check-square-regular.svg';
import { ReactComponent as DiceSvg } from './assets/dice-five-solid.svg';
import { ReactComponent as PlayerSvg } from './assets/play-circle-solid.svg';
import { ReactComponent as TicketSvg } from './assets/ticket-alt-solid.svg';

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

export const GiftsIcon = (props) => (
    <GiftsIconSvg {...props} />
)

export const LockStatusIcon = (props) => (
    <LockSvg {...props} />
)

export const UnlockStatusIcon = (props) => (
    <UnlockSvg {...props} />
)

export const CheckStatusIcon = (props) => (
    <CheckSvg {...props} />
)

export const KeyIcon = (props) => (
    <KeySvg {...props} />
)

export const SignOutIcon = (props) => (
    <SignOutSvg {...props} />
)

export const StatusIcon = (props) => (
    <StatusSvg {...props} />
)

export const DiceIcon = (props) => (
    <DiceSvg {...props} />
)

export const PlayIcon = (props) => (
    <PlayerSvg {...props} />
)

export const TicketIcon = (props) => (
    <TicketSvg {...props} />
)

