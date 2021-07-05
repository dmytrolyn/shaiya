import styles from './styles/styles.module.css';
import { ShopItem } from '../Common/styled/components';
import { ButtonBlue } from '../Common/Buttons/Buttons';
import { identifyIcon } from './utils';
import dec from './assets/dec.png';

const DonateList = ({ donate }) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.list}>
                {donate.map(item => (
                    <div className={styles.listItem} key={item.RowID}>
                        <ShopItem>
                            <div className={styles.head}>{item.Bonus !== 0 ? item.Count * (100 + item.Bonus) / 100 : item.Count} SP</div>
                            <img className={styles.icon} src={identifyIcon(item.RowID)} alt="coin" />
                            <div className={styles.body}>{item.Price} EUR</div>
                            <ButtonBlue type="button" text="BUY" />
                            {item.Bonus !== 0 && <div className={styles.footer}>
                                <span>Bonus +{item.Bonus}%</span>
                                <img src={dec} alt="dec" className={styles.dec} />
                            </div>}
                        </ShopItem>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DonateList;