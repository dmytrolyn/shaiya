import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import { CloseButton } from '../Common/Buttons/styled/components';
import RegisterForm from './components/RegisterForm';
import styles from './styles/styles.module.css';

const AuthWindow = ({ handleClose, login, openAlert }) => {
    const [authForm, setState] = useState(true);

    const handleCloseWindow = () => {
        setState(true);
        handleClose();
    }

    return (
        <div className={styles.modalWrap}>
            {authForm ? <AuthForm swapState={() => setState(false)} close={handleClose} login={login} /> : <RegisterForm openAlert={openAlert} swapState={() => setState(true)} />}
            <CloseButton onClick={handleCloseWindow} />
        </div>
    )
}

export default AuthWindow;