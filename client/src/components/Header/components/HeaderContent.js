import React from 'react';
import { Link } from 'react-router-dom';
import News from '../../News/News';
import logo from '../assets/logo.png';
import styles from '../styles/styles.module.css';
import runes from '../assets/runes.png';
import light from '../assets/light.png';
import onlineImg from '../assets/onlineDec.png';
import ray from '../assets/ray.png';
import charsImg from '../assets/chars.png';
import guildsImg from '../assets/guilds.png';
import download from '../assets/download.png';
import windows from '../assets/windows.png';
import cn from 'classnames';
import { Spark1, Spark2, Spark3, Spark4, Spark5, Sparks } from '../styled/components';

const HeaderContent = ({ online, chars, guilds, news }) => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.logoBlock}>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.animationWrap}>
                        <div className={styles.animationRunes}>
                            <img className={styles.animationImg} src={runes} alt="runes" />
                        </div>
                        <div className={styles.animationLight}>
                            <img className={styles.animationImg} src={light} alt="runes" />
                        </div>
                    </div>
                </div>
                <div className={styles.infoWrap}>
                    <div className={styles.info}>
                        <div className={styles.online}>
                            <div className={styles.onlineStatus}>
                                <p className={styles.onlineLabel}>Online</p>
                                <div className={styles.onlineValue}>{online}</div>
                            </div>
                            <img className={styles.onlineImg} src={onlineImg} alt="online" />
                            <div className={styles.ray} style={{ backgroundImage: `url(${ray})` }}></div>
                        </div>
                        <div className={styles.rates}>
                            <div className={styles.ratesItem}>
                                <img src={charsImg} alt="chars" />
                                <span>{chars}</span>
                                <p>Characters</p>
                            </div>
                            <div className={styles.ratesItem}>
                                <img src={guildsImg} alt="guilds" />
                                <span>{guilds}</span>
                                <p>Guilds</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.download}>
                        <Link to="/downloads" className={cn(styles.downloadBtnWrap, "c-pointer")}>
                            <img className={styles.downloadBtnBg} src={download} alt="download" />
                            <span className={styles.downloadBtnInfo}>
                                <span className={styles.downloadBtnTitle}>Download</span>
                                <p className={styles.downloadBtnDesc}>Game client</p>
                            </span>
                        </Link>
                        <div className={styles.platformBlock}>
                            <span className={styles.platformLabel}><img src={windows} alt="windows" /> Only for Windows</span>
                        </div>
                    </div>
                </div>
                <Sparks>
                    <Spark1 />
                    <Spark2 />
                    <Spark3 />
                    <Spark4 />
                    <Spark5 />
                </Sparks>
                <News news={news}/>
                <Sparks>
                    <Spark1 />
                    <Spark2 />
                    <Spark3 />
                    <Spark4 />
                    <Spark5 />
                </Sparks>
            </div>
        </>
    )
}

export default HeaderContent;