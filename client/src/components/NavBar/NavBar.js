import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import NavSubMenu from './components/NavSubMenu';
import styles from './styles/styles.module.css';
import logo from './assets/menuLogo.png';
import logIcon from './assets/logIn.png';
import { ArrowDown } from '../Common/Icons/Icons';
import UserBlock from './components/UserBlock';
import { items } from './utils/main-menu';

const NavBar = ({ user, hasAuth, logout, manageAuthModal }) => {
    const [isOpened, setState] = useState(false);
    return (
        <div className={styles.wrap}>
            <div className={styles.navBlock}>
                <nav className={styles.nav}>
                    <div className={styles.mobile}>
                        <div className={cn(styles.logoMobile, isOpened && styles.logoActive)}>
                            <img className={styles.logoImg} src={logo} alt="logo" />
                        </div>
                        <button className={cn(styles.mobileBtn, "c-pointer", isOpened && styles.navMobileBtnActive)} onClick={() => setState(!isOpened)}>☰</button>
                    </div>
                    <ul className={cn(styles.navList, isOpened && styles.navActive)}>
                        <div className={styles.logoDesktop}>
                            <img className={styles.logoImg} src={logo} alt="logo" />
                        </div>
                        {items.map(item => !item.subMenu ? <li key={item.text} className={styles.navItem}>
                                <NavLink onClick={() => setState(false)} exact to={item.page} activeClassName={styles.active} className={cn(styles.navLink, "c-pointer")}>
                                    {item.text}
                                </NavLink>
                            </li> : <div key={item.text} className={cn(styles.navLink, styles.navSub, styles.navItemMobile, "c-pointer")}>
                                <span>{item.text}</span>
                                <ArrowDown />
                                <NavSubMenu items={item.subMenu} close={() => setState(false)} />
                            </div>
                        )}
                    </ul>
                </nav>
                {!hasAuth ? <div className={cn(styles.login, "c-pointer")} onClick={() => manageAuthModal(true)}>
                    <span className={styles.loginText}>Sign in</span>
                    <img className={styles.loginIcon} src={logIcon} alt="icon" />
                </div> : <UserBlock user={user} logout={logout} close={() => setState(false)} />}
            </div>
        </div>
    )
}

export default NavBar;