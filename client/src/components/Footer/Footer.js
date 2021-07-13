import React from 'react';
import styles from './styles/styles.module.css';
import { BlockTitle } from '../Common/styled/components';
import { FooterItem } from './styled/components';
import { Link } from 'react-router-dom';
import Line from '../Common/Line/Line';
import vk from './assets/vk.png';
import ppal from './assets/ppal.png';
import visa from './assets/visa.png';
import mcard from './assets/mcard.png';
import g2p from './assets/g2p.png';

const Footer = ({ hasAuth, openRegister }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContentWrap}>
                <div className={styles.footerContent}>
                    <div className={styles.footerContentBlock}>
                        <BlockTitle>Information</BlockTitle>
                        <ul className={styles.footerContentList}>
                            <FooterItem>
                                <Link className={styles.footerContentLink} to="/droplist">Droplist</Link>
                            </FooterItem>
                            <FooterItem>
                                <Link className={styles.footerContentLink} to="/ranks">Players</Link>
                            </FooterItem>
                            <FooterItem>
                                <Link className={styles.footerContentLink} to="/guilds">Guilds</Link>
                            </FooterItem>
                            <FooterItem>
                                <Link className={styles.footerContentLink} to="/bosses">Boss records</Link>
                            </FooterItem>
                        </ul>
                    </div>
                    <div className={styles.footerContentBlock}>
                        <BlockTitle>How to start</BlockTitle>
                        <ul className={styles.footerContentList}>
                            <FooterItem>
                                {!hasAuth ? <Link className={styles.footerContentLink} onClick={openRegister} >Registration</Link> :
                                <Link className={styles.footerContentLink} to="/profile">Profile</Link>}
                            </FooterItem>
                            <FooterItem>
                                <Link className={styles.footerContentLink} to="/downloads">Downloads</Link>
                            </FooterItem>
                        </ul>
                    </div>
                    <div className={styles.footerContentBlock}>
                        <BlockTitle>Community</BlockTitle>
                        <ul className={styles.footerContentList}>
                            <FooterItem>
                                <Link className={styles.footerContentLink} to="/">Facebook</Link>
                            </FooterItem>
                            <FooterItem>
                                <Link className={styles.footerContentLink} to="/">Discord</Link>
                            </FooterItem>
                            <FooterItem>
                                <Link className={styles.footerContentLink} to="/">Youtube</Link>
                            </FooterItem>
                        </ul>
                    </div>
                    <div className={styles.footerContentBlock}>
                        <BlockTitle>Contacts</BlockTitle>
                        <div className={styles.footerContentSingle}>
                            <p>Email support:</p>
                            <a href="/">support@email.com</a>
                        </div>
                        <div className={styles.footerContentSocial}>
                            <a href="/">
                                <img src={vk} alt="vk" />
                            </a>
                            <a href="/">
                                <img src={vk} alt="vk" />
                            </a>
                            <a href="/">
                                <img src={vk} alt="vk" />
                            </a>
                            <a href="/">
                                <img src={vk} alt="vk" />
                            </a>
                        </div>
                    </div>
                </div>
                <Line />
                <div className={styles.footerBottom}>
                    <ul className={styles.footerBottomPayment}>
                        <li className={styles.footerBottomPaymentItem}>
                            <img src={ppal} alt="ppal"/>
                        </li>
                        <li className={styles.footerBottomPaymentItem}>
                            <img src={mcard} alt="mastercard"/>
                        </li>
                        <li className={styles.footerBottomPaymentItem}>
                            <img src={visa} alt="visa"/>
                        </li>
                        <li className={styles.footerBottomPaymentItem}>
                            <img src={g2p} alt="g2p"/>
                        </li>
                    </ul>
                    <div>
                        <p>© 2021 <span>Wonder.com.</span> All rights reserved</p>
                    </div>
                </div>
                <div className={styles.footerCpr}>
                    <p>
                        This server is a test version of the Aion game. The server has limited
                        functions and capabilities, and in fact is not intended to be played on
                        it. For a full-fledged game in Aion, you must use the www.aion.com
                        service. The goal of our project is to increase the popularity of the
                        Aion game in Europe. The rights to the game client, as well as to the
                        Aion trademark, belong to www.aion.com.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;