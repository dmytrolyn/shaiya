import React from 'react';
import styles from '../styles/styles.module.css';
import { UserIcon, ArrowDown } from '../../Common/Icons/Icons';
import UserMenu from './UserMenu';
import cn from 'classnames';

const UserBlock = ({ user, logout, close }) => {
    return (
        <div className={cn(styles.navLink, styles.navSub, styles.userBlock, "c-pointer")}>
            <span className={styles.userName}>{user.UserID}</span>
            <ArrowDown />
            <UserIcon />
            <UserMenu logout={logout} close={close} />
        </div>
    )
}

export default UserBlock;