import { ShopIcon } from '../styled/components';
import { ContentSection } from '../../Common/styled/components';
import { ButtonBlue } from '../../Common/Buttons/Buttons';
import styles from '../styles/styles.module.css';
import prDec from '../assets/icasset.png';
import { Layout } from '../../Common/Loading/Layout';

const ExpandedList = ({ shop, makePurchase, loading }) => {
    return (
        <div className={styles.itemsExpWrap}>
            {shop.map(item => <ContentSection key={item.RowID}>
                <div className={styles.itemHead}>
                    <div className={styles.itemExpTitle}><ShopIcon><img src={`${process.env.REACT_APP_STATIC_ICONS}/${item.Icon}`} alt="icon" /></ShopIcon>{item.Title}</div>
                    <div className={styles.itemPriceBlock}>
                        <div className={styles.itemPrice}><img className={styles.prDec} src={prDec} alt="dc" />{item.Price} SP</div>
                        <ButtonBlue text="Buy" type="button" onClick={() => makePurchase(item.RowID)} />
                    </div>
                </div>
                <div className={styles.itemImageWrap}>
                    {item.Image && <img src={`${process.env.REACT_APP_STATIC_IMAGES}/${item.Image}`} alt="preview" />}
                </div>
                <Layout cn={styles.loadingLarge} show={loading !== null} withLoading={loading === item.RowID}/>
            </ContentSection>)}
        </div>
    )
}

export default ExpandedList;