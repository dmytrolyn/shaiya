import React from 'react';
import { AllNewsWrap, NewsItem, NewsContent, NewsItemArrow, NewsItemLink } from './styled/components';
import { ContentWrap, ContentSection } from '../Common/styled/components';
import styles from './styles/styles.module.css';
import usePagination from '../../hooks/usePagination';
import Pagination from '../Common/Pagination/Pagination';

const NewsAll = ({ news }) => {
    const [data, current, all, changePage] = usePagination(news, 7);
    return (
        <ContentWrap>
            <NewsContent all>
                {data.map(item => <ContentSection>
                    <div className={styles.newsItemHead}>
                        <div className={styles.newsItemDec}>
                            <p className={styles.newsItemDescText}>{(() => new Date(item.Date).toLocaleDateString())()}</p>
                        </div>
                        <div className={styles.newsItemLinkWrap}>
                            <NewsItemLink big to={`/news/${item.RowID}`}>{item.Title}</NewsItemLink>
                        </div>
                    </div>
                </ContentSection>
                )}
            </NewsContent>
            <Pagination all={all} current={current} setPage={changePage} />
        </ContentWrap>
    )
}

export default NewsAll;