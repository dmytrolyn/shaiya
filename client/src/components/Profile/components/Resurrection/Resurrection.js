import React from 'react';
import ActivePlayers from './components/ActivePlayers';
import DeletedPlayers from './components/DeletedPlayers';

const Resurrection = ({ chars }) => {
    let { deleted, active, price, errors } = chars;
    let deletedErrors = errors.reduce((res, item) => deleted.data.some(i => i.CharName === item.CharName) ? [...res, item] : res, []);
    let activeErrors = errors.reduce((res, item) => active.data.some(i => i.CharName === item.CharName) ? [...res, item] : res, []);
    
    return (
        <>
            <ActivePlayers players={active} errors={activeErrors} />
            <DeletedPlayers players={deleted} price={price} errors={deletedErrors} />
        </>
    )
}

export default Resurrection;
