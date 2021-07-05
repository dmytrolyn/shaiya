import React from 'react';
import Slider from '../Slider/Slider';
import { NewsWrap, NewsContent, NewsItem, NewsItemLink, NewsItemArrow } from './styled/components';
import { Link } from 'react-router-dom';
import { BlockTitle } from '../Common/styled/components';
import styles from './styles/styles.module.css';
import cn from 'classnames';

const News = ({ news }) => {
    return (
        <div className={styles.newsBlock}>
            <Slider />
            <NewsWrap>
                <NewsContent>
                    <div className={styles.newsContentTitle}>
                        <BlockTitle>Last news</BlockTitle>
                        <Link className={cn(styles.allNews, "c-pointer")} to="/news">All news</Link> 
                    </div>
                    {news && news.map(item => <NewsItem key={item.RowID}>
                        <div className={styles.newsItemInfo}>
                            <div>
                                <NewsItemLink to={`/news/${item.RowID}`}>{item.Title}</NewsItemLink>
                                <p className={styles.newsItemDate}>{(() => new Date(item.Date).toLocaleDateString())()}</p>
                            </div>
                        </div>
                        <div className={styles.newsItemDec}>
                            <p className={styles.newsItemDecText}>Read more</p>
                            <NewsItemArrow />
                        </div>
                    </NewsItem>)}
                </NewsContent>
            </NewsWrap>
        </div>
    )
}

export default News;