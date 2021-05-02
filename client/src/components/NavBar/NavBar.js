import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import NavSubMenu from './components/NavSubMenu';
import styles from './styles/styles.module.css';
import logo from './assets/menuLogo.png';
import logIcon from './assets/logIn.png';
import { ArrowDown } from '../Common/Icons/Icons';
import UserBlock from './components/UserBlock';

const items = [
    { text: "Homepage", page: "/" },
    { text: "Downloads", page:"/downloads" },
    { text: "Info", subMenu: [
        { text: "PvP Ranks", page: "/ranks" },
        { text: "Guilds", page: "/guilds" },
        { text: "Kills", page: "/kills" },
        { text: "Boss timer", page: "/bosses" },
    ]},
    { text: "About us", subMenu: [
        { text: "Drop List", page: "/droplist" },
        { text: "About server", page: "/about" },
    ]}
]

const NavBar = ({ user, hasAuth, logout, manageAuthModal }) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.navBlock}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <img className={styles.logoImg} src={logo} alt="logo" />
                    </div>
                    <ul className={styles.navList}>
                        {items.map(item => !item.subMenu ? <li key={item.text} className={styles.navItem}>
                                <NavLink exact to={item.page} activeClassName={styles.active} className={cn(styles.navLink, "c-pointer")}>
                                    {item.text}
                                </NavLink>
                            </li> : <div key={item.text} className={cn(styles.navLink, styles.navSub, "c-pointer")}>
                                {item.text}
                                <ArrowDown />
                                <NavSubMenu items={item.subMenu} />
                            </div>
                        )}
                    </ul>
                </nav>
                {!hasAuth ? <div className={cn(styles.login, "c-pointer")} onClick={() => manageAuthModal(true)}>
                    <span className={styles.loginText}>Sign in</span>
                    <img className={styles.loginIcon} src={logIcon} alt="icon" />
                </div> : <UserBlock user={user} logout={logout} />}
            </div>
        </div>
    )
}

export default NavBar;