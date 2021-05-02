import React, { useEffect } from 'react';
import * as API from '../../api/api';
import Guilds from './Guilds';
import { connect } from 'react-redux';
import { getAllGuilds } from '../../services/reducers';
import { setGuilds } from '../../services/actions';
import Loading from '../../components/Common/Loading/Loading';

const GuildsContainer = ({ guilds, setGuilds }) => {

    useEffect(() => {
        const getData = async () => {
            if(!guilds) {
                let data = await API.getGuildsList();
                setGuilds(data);
            }
        }
        getData();
    })
    
    return (
        guilds ? <Guilds guilds={guilds} /> : <Loading />
    )
}

const mapStateToProps = (state) => ({
    guilds: getAllGuilds(state)
})

export default connect(mapStateToProps, { setGuilds })(GuildsContainer);