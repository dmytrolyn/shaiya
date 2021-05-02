import React from 'react';
import styles from './styles/style.module.css';
import line from './assets/line.png';

const Line = () => {
    return (
        <div className={styles.lineWrap}>
            <img className={styles.line} src={line} alt="line" />
        </div>
    )
}

export default Line;