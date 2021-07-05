import React, { useEffect, useState } from 'react';
import BossTimer from './BossTimer';
import Loading from '../../../Common/Loading/Loading';
import styles from '../../styles/styles.module.css';

const BossTimerContainer = ({ bosses = [] }) => {
    const [state, setState] = useState(null);

    const buildData = (data) => data.map(record => 
        (({ MobName, Killer, TimeLeft }) => ({ MobName, Killer, TimeLeft }))(record));

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
        if(!state) {
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
    }, [bosses, state])

    return (
        <div className={styles.ratesBlockWrap}>
            {!state ? <Loading /> : <BossTimer bosses={{...state, data: [...state.data].splice(0, 10)}} />}
        </div>
    )
}

export default BossTimerContainer;