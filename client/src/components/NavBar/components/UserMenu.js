import React from 'react';
import styles from '../styles/styles.module.css';
import { HoverEffect } from '../../Common/styled/components';
import { ArrowActive, LogoutIcon } from '../../Common/Icons/Icons';
import { Link } from 'react-router-dom';

const UserMenu = ({ logout }) => {
    return (
        <ul className={styles.userMenu}>
            <li className={styles.subItem}>
                <Link className={styles.subLink} to="/profile">
                    <div className={styles.subImageWrap}><ArrowActive /></div>
                    Profile
                    <HoverEffect />
                </Link>
            </li>
            <li className={styles.subItem}>
                <Link className={styles.subLink} to="/profile">
                <div className={styles.subImageWrap}><ArrowActive /></div>
                    Shop
                    <HoverEffect />
                </Link>
            </li>
            <li className={styles.subItem}>
                <div onClick={logout} className={styles.subLink} to="/profile">
                    <div className={styles.subImageWrap}><LogoutIcon /></div>
                    Logout
                    <HoverEffect />
                </div>
            </li>
        </ul>
    )
}

export default UserMenu;