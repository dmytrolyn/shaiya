import React from 'react';
import spinner from './assets/spinner.svg';
import styles from './styles/styles.module.css';

const Loading = ({ show = true, ...props }) => {
    return (
        show && <div className={styles.loadingWrap}>
            <img className={styles.loading} {...props} src={spinner} alt="spinner" />
        </div>   
    )
}

export default Loading;