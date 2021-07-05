import React from 'react';
import styles from '../styles/styles.module.css';
import { HoverEffect } from '../../Common/styled/components';
import { ArrowActive, LogoutIcon } from '../../Common/Icons/Icons';
import { Link } from 'react-router-dom';
import { items } from '../utils/user-menu.js';

const UserMenu = ({ logout, close }) => {
    return (
        <ul className={styles.userMenu}>
            {items.map(el => <li key={el.link} className={styles.subItem}>
                <Link onClick={close} className={styles.subLink} to={el.link}>
                    <div className={styles.subImageWrap}><ArrowActive /></div>
                    {el.text}
                    <HoverEffect />
                </Link>
            </li>)}
            <li onClick={close} className={styles.subItem}>
                <div onClick={logout} className={styles.subLink}>
                    <div className={styles.subImageWrap}><LogoutIcon /></div>
                    Logout
                    <HoverEffect />
                </div>
            </li>
        </ul>
    )
}

export default UserMenu;