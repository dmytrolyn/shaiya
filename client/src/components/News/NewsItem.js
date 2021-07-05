import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getNewsItem } from '../../services/reducers';
import { ContentSection } from '../Common/styled/components';
import styles from './styles/styles.module.css';
import Parser from 'html-react-parser';

const NewsItem = ({ item }) => {
    return (
        <ContentSection>
            <div className={styles.newsItemWrap}>
                <div className={styles.newsItemHead}>
                        <div className={styles.newsItemTitle}>
                            <div>{item.Title}</div>
                        </div>
                        <div className={styles.newsItemContentDate}>{(() => new Date(item.Date).toLocaleDateString())()}</div>
                </div>
                <div className={styles.newsItemImagePreviewWrap}>
                    {item.Image && <img className={styles.newsImage} src={`${process.env.REACT_APP_STATIC_IMAGES}/${item.Image}`} alt="news" />}
                </div>
                <div className={styles.newsItemContent}>
                    <div className={styles.newsBody}>
                        <div className={styles.newsItemBodyText}>{Parser(item.Text)}</div>
                    </div>
                </div>
            </div>
        </ContentSection>
    )
}

const mapStateToProps = (state, ownProps) => ({
    item: getNewsItem(state, Number(ownProps.match.params.id))
})

export default compose(withRouter, connect(mapStateToProps, null))(NewsItem);