import React, { useEffect } from 'react';
import Ranks from './Ranks';
import Loading from '../../components/Common/Loading/Loading';
import { connect } from 'react-redux';
import { getAllRanks } from '../../services/reducers';
import { setRanks } from '../../services/actions';
import * as API from '../../api/api';

const RanksContainer = ({ ranks, setRanks }) => {

    useEffect(() => {
        let getData = async () => {
            if(!ranks) {
                let data = await API.getRankList();
                setRanks(data);
            }
        }
        getData();
    }, [ranks, setRanks])

    return (
        ranks ? <Ranks ranks={ranks} /> : <Loading />
    )
}

const mapStateToProps = (state) => ({
    ranks: getAllRanks(state)
})

export default connect(mapStateToProps, { setRanks })(RanksContainer);