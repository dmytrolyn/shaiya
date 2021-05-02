import React from 'react';
import ReactModal from 'react-modal';
import styles from './styles/styles.module.css';
import cn from 'classnames';

const Modal = (props) => {
    return (
        <ReactModal
            {...props}
            className={styles.modal}
            overlayClassName={cn(styles.overlay, styles.modalOverlay)}
        >
            {props.children}
        </ReactModal>
    )
}

export default Modal;