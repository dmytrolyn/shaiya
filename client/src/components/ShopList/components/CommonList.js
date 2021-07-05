import styles from '../styles/styles.module.css';
import { ShopItem } from '../../Common/styled/components';
import { ShopIcon } from '../styled/components';
import { ButtonBlue } from '../../Common/Buttons/Buttons';
import { Layout } from '../../Common/Loading/Layout';

const CommonList = ({ shop, makePurchase, loading }) => {

    return (
        <div className={styles.itemsWrap}>
            {shop.map(item =>
                <ShopItem key={item.RowID}>
                    <div className={styles.itemTitle}>{item.Title} (x{item.Count})</div>
                    <ShopIcon><img src={`${process.env.REACT_APP_STATIC_ICONS}/${item.Icon}`} alt="product-icon" /></ShopIcon>
                    <div className={styles.itemPrice}>{item.Price} SP</div>
                    <ButtonBlue text="Buy" type="button" onClick={() => makePurchase(item.RowID)} />
                    <Layout cn={styles.loading} show={loading} withLoading={loading === item.RowID}/>
                </ShopItem>
            )}
        </div>
    )
}

export default CommonList;