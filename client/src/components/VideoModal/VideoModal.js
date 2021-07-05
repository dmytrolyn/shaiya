import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import styles from './styles/styles.module.css';
import cn from 'classnames';
import VideoView from './VideoView';
import { manageVideoModal } from '../../services/actions';
import { getVideoModalStatus, getVideoData } from '../../services/reducers';

const VideoModal = ({ isOpen, data, manageVideoModal }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={() => manageVideoModal(false)}
            className={styles.modal}
            overlayClassName={cn(styles.overlay, styles.modalOverlay)}
        >
            <VideoView data={data} handleClose={() => manageVideoModal(false)} />
        </ReactModal>
    )
}

const mapStateToProps = (state) => ({
    isOpen: getVideoModalStatus(state),
    data: getVideoData(state)
})

export default connect(mapStateToProps, { manageVideoModal })(VideoModal);