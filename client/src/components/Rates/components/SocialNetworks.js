import React from 'react';
import { RefBlockRed, RefBlockBlue, RefBlockPurple, RefInfoBlock } from '../styled/components';
import styles from '../styles/styles.module.css';
import cn from 'classnames';
import youTube from '../assets/youTube.png';
import discord from '../assets/discord.png';
import facebook from '../assets/facebook.png';
import book from '../assets/book.png';
import weapons from '../assets/weapons.png';

const SocialNetworks = () => {
    return (
        <div className={styles.ratesBlockWrap}>
            <RefBlockRed href="/">
                <img className={styles.customImg2} src={youTube} alt="youTube"/>
                <div className={styles.refBlockInfo}>
                    <h2 className={styles.refBlockTitle}>Youtube</h2>
                    <p className={styles.refBlockDesc}>Official channel</p>
                </div>
            </RefBlockRed>
            <RefBlockPurple href="/">
                <img className={styles.customImg2} src={discord} alt="discord"/>
                <div className={styles.refBlockInfo}>
                    <h2 className={styles.refBlockTitle}>Discord</h2>
                    <p className={styles.refBlockDesc}>Discussion chat</p>
                </div>
            </RefBlockPurple>
            <RefBlockBlue href="/">
                <img className={styles.customImg1} src={facebook} alt="facebook"/>
                <div className={styles.refBlockInfo}>
                    <h2 className={styles.refBlockTitle}>Facebook</h2>
                    <p className={styles.refBlockDesc}>Official group</p>
                </div>
            </RefBlockBlue>
            <RefInfoBlock>
                <div className={cn(styles.refInfoItem, "c-pointer")}>
                    <img src={book} alt="book" />
                    <h2>Drop List</h2>
                    <p>Info page</p>
                </div>
                <span className={styles.separator}></span>
                <div className={cn(styles.refInfoItem, "c-pointer")}>
                    <img src={weapons} alt="weapons" />
                    <h2>Shop</h2>
                    <p>Donate</p>
                </div>
            </RefInfoBlock>
        </div>
    )
}

export default SocialNetworks;