import React, { useEffect, useState } from 'react';
import Bosses from './Bosses';
import Loading from '../../components/Common/Loading/Loading';
import * as API from '../../api/api';

const BossesContainer = () => {
    const [state, setState] = useState(null);

    const buildData = (data) => data.map(record =>
        (({ MobName, TimeLeft, Respawn, Killer, MapID }) => ({ MobName, Killer, MapID, Respawn: `${Respawn}h`, TimeLeft }))(record));

    useEffect(() => {
        if(state) {
            let timer = setInterval(() => {
                setState({...state, data: state.data.map(rec => ({...rec, TimeLeft: --rec.TimeLeft }))});
            }, 1000);

            return function cleanup() {
                if(timer) clearInterval(timer)
            }
        }
    }, [state])

    useEffect(() => {
        const getBosses = async () => {
            if(!state) {
                let bosses = await API.getBossRespawns();
                setState({...bosses, data: buildData(bosses.data.sort((a, b) => {
                    if(a.TimeLeft > b.TimeLeft) {
                        return 1;
                    } else if(a.TimeLeft < b.TimeLeft) {
                        return -1;
                    } else {
                        return 0;
                    }
                }))});
            }
        }
        getBosses();
    })

    return (
        !state ? <Loading /> : <Bosses bosses={state} />
    )
}


export default BossesContainer;