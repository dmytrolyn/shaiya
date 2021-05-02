import React from 'react';
import styles from './styles/styles.module.css';
import cn from 'classnames';

import google from './assets/google-icon.png';
import torrent from './assets/torrent-icon.png';
import dropbox from './assets/dropbox-icon.png';

const Download = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.downloadBlock}>
                <a href="/" className={cn(styles.downloadLink, "c-pointer")}><img src={google} alt="google"/><span>Google Disk</span></a>
            </div>
            <div className={styles.downloadBlock}>
                <a href="/" className={cn(styles.downloadLink, "c-pointer")}><img src={torrent} alt="torrent"/><span>Torrent</span></a>   
            </div>
            <div className={styles.downloadBlock}>
                <a href="/" className={cn(styles.downloadLink, "c-pointer")}><img src={dropbox} alt="dropbox"/><span>DropBox</span></a>
            </div>
        </div>
    )
}

export default Download;