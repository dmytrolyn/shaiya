import React from 'react';
import loading from './assets/async-spinner.svg';
import styles from './styles/styles.module.css';

const AsyncLoading = () => {
    return (
        <img src={loading} className={styles.async} alt="loading" />
    )
}

export default AsyncLoading;