import { CloseButton } from '../Common/Buttons/styled/components';
import styles from './styles/styles.module.css';

const VideoView = ({ data, handleClose }) => {
    return (
        <>
            <iframe className={styles.frame} src={data?.source || '/'} title="Recent Shaiya" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <CloseButton onClick={handleClose} offset={{ top: 30 , right: 0 }} />
        </>
    )
}

export default VideoView;