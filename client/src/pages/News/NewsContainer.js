import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../services/reducers';
import { setNews } from '../../services/actions';
import News from './News';
import * as API from '../../api/api';
import Loading from '../../components/Common/Loading/Loading';

const NewsContainer = ({ news, setNews }) => {
    useEffect(() => {
        const getData = async () => {
            let resp = await API.getNews();
            setNews(resp);
        }
        if(!news) getData()
    })
    return (
        !news ? <Loading /> : <News news={news} />
    )
}

const mapStateToProps = (state) => ({
    news: getNews(state)
})

export default connect(mapStateToProps, { setNews })(NewsContainer);