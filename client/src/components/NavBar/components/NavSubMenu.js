import React from 'react';
import styles from '../styles/styles.module.css';
import { Link } from 'react-router-dom';
import { HoverEffect } from '../../Common/styled/components';
import { ArrowActive } from '../../Common/Icons/Icons';
import cn from 'classnames';

const NavSubMenu = ({ items, close }) => {
    return (
        <ul className={styles.subMenu}>
            {items.map(item => <li key={item.text} className={styles.subItem}>
                <Link onClick={close} className={cn(styles.subLink, styles.subLinkMobile)} to={item.page}>
                    <div className={styles.subImageWrap}><ArrowActive /></div>
                    {item.text}
                    <HoverEffect />
                </Link>
            </li>)}
        </ul>
    )
}

export default NavSubMenu;