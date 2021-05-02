import React, { useEffect } from 'react';
import * as API from '../../api/api';
import { connect } from 'react-redux';
import { getKills } from '../../services/reducers';
import { setKills } from '../../services/actions';
import Kills from './Kills';
import Loading from '../../components/Common/Loading/Loading';

const KillsContainer = ({ kills, setKills }) => {
    useEffect(() => {
        const getData = async () => {
            try {
                let resp = await API.getKillLogs();
                setKills(resp);
            } catch(err) {

            }
        }
        if(!kills) getData();
    }, [kills, setKills])
    return (
        !kills ? <Loading /> : <Kills kills={kills} />
    )
}

const mapStateToProps = (state) => ({
    kills: getKills(state)
})

export default connect(mapStateToProps, { setKills })(KillsContainer);