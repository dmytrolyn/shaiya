import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTopKillers, getTopGuilds, getBosses, getRecentLoading } from '../../services/reducers';
import { getRecentStats } from '../../services/actions';
import Index from './Index';
import Loading from '../../components/Common/Loading/Loading';

const IndexContainer = ({ topKillers, topGuilds, bosses, isLoading, getRecentStats }) => {

    useEffect(() => {
        getRecentStats();
    }, [getRecentStats])

    return (
        isLoading ? <Loading /> : <Index guilds={topGuilds} killers={topKillers} bosses={bosses} /> 
    )
}

const mapStateToProps = (state) => ({
    topKillers: getTopKillers(state),
    topGuilds: getTopGuilds(state),
    bosses: getBosses(state),
    isLoading: getRecentLoading(state)
})

export default connect(mapStateToProps, { getRecentStats })(IndexContainer);