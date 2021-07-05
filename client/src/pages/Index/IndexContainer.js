import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTopKillers, getTopGuilds, getBosses, getRecentLoading, getAuth } from '../../services/reducers';
import { getRecentStats, manageAuthModal, manageVideoModal } from '../../services/actions';
import Index from './Index';
import Loading from '../../components/Common/Loading/Loading';

const IndexContainer = ({ isLoading, getRecentStats, manageAuthModal, ...props}) => {

    useEffect(() => {
        getRecentStats();
    }, [getRecentStats])

    return (
        isLoading ? <Loading /> : <Index {...props} openAuth={() => manageAuthModal(true, false)} /> 
    )
}

const mapStateToProps = (state) => ({
    hasAuth: getAuth(state),
    topKillers: getTopKillers(state),
    topGuilds: getTopGuilds(state),
    bosses: getBosses(state),
    isLoading: getRecentLoading(state)
})

export default connect(mapStateToProps, { getRecentStats, manageAuthModal, manageVideoModal })(IndexContainer);