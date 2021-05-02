import React from 'react';
import styles from './styles/styles.module.css';
import { CloseButton } from '../Common/Buttons/styled/components';
import { ButtonGreen } from '../Common/Buttons/Buttons';

const AlertWindow = ({ message, handleClose }) => {
    return (
        <>
            <CloseButton onClick={() => handleClose(false)} />
            <div className={styles.body}>
                <p className={styles.message}>{message}</p>
            </div>
            <div className={styles.footer}>
                <ButtonGreen text="Confirm" onClick={() => handleClose(false)}></ButtonGreen>
            </div>
        </>
    )
}

export default AlertWindow;
