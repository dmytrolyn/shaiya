import CommonList from './components/CommonList';
import ExpandedList from './components/ExpandedList';
import styles from './styles/styles.module.css';

const ShopList = ({ isExpanded, ...props }) => {
    return (
        <div className={styles.wrap}>
            {isExpanded ? <ExpandedList {...props} /> : <CommonList {...props} />}
        </div>
    )
}

export default ShopList;