import React from 'react';
import { NewsContent, NewsItemLink, NewsContentItem } from './styled/components';
import { ContentWrap, ContentSingleTitle } from '../Common/styled/components';
import styles from './styles/styles.module.css';
import usePagination from '../../hooks/usePagination';
import Pagination from '../Common/Pagination/Pagination';

const categories = [
    "Event",
    "Update"
]

const NewsAll = ({ news }) => {
    const [data, current, all, changePage] = usePagination(news, 3);

    return (
        <ContentWrap>
            <NewsContent all>
                <ContentSingleTitle>Server news</ContentSingleTitle>
                {data.map(item => <NewsContentItem key={item.RowID}>
                    <div className={styles.newsWrap}>
                        <div className={styles.newsImagePreviewWrap}>
                            {item.Image && <img className={styles.newsImage} src={`${process.env.REACT_APP_STATIC_IMAGES}/${item.Image}`} alt="news" />}
                        </div>
                        <div className={styles.newsContent}>
                            <div className={styles.newsHead}>
                                <div className={styles.newsTitle}>
                                    <NewsItemLink big="true" to={`/news/${item.RowID}`}><span className={styles.newsType}>{categories[item.Category]}</span>{item.Title}</NewsItemLink>
                                </div>
                                <div className={styles.newsDate}>{(() => new Date(item.Date).toLocaleDateString())()}</div>
                            </div>
                            <div className={styles.newsBody}>
                                <div className={styles.newsBodyText}>
                                    {item.Text.substring(0, 200)}...
                                </div>
                            </div>
                        </div>
                    </div> 
                </NewsContentItem>)}
            </NewsContent>
            <Pagination all={all} current={current} setPage={changePage} />
        </ContentWrap>
    )
}

export default NewsAll;