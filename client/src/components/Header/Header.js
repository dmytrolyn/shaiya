import React from 'react';
import NavBarContainer from '../NavBar/NavBarContainer';
import HeaderContent from './components/HeaderContent';
import { TopSection } from './styled/components';
import styles from './styles/styles.module.css';

const Header = ({ online, ...props}) => {
    return (
        <TopSection>
            <header className={styles.header}>
                <NavBarContainer />
                <HeaderContent onlineStatus={online} {...props} />
            </header>
        </TopSection>
    )
}

export default Header;