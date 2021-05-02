import React from 'react';
import spinner from './assets/spinner.svg';
import styles from './styles/styles.module.css';

const Loading = () => {
    return (
        <div className={styles.loadingWrap}>
            <img className={styles.loading} src={spinner} alt="spinner" />
        </div>   
    )
}

export default Loading;