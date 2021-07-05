import ReactModal from 'react-modal';
import styles from './styles/styles.module.css';
import cn from 'classnames';

const Modal = (props) => {
    return (
        <ReactModal
            className={styles.modal}
            overlayClassName={cn(styles.overlay, styles.modalOverlay)}
            {...props}
        >
            {props.children}
        </ReactModal>
    )
}

export default Modal;