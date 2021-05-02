import React from 'react';
import ActivePlayers from './components/ActivePlayers';
import DeletedPlayers from './components/DeletedPlayers';

const Resurrection = ({ chars }) => {
    let { deleted, active } = chars;

    return (
        <>
            <ActivePlayers players={active} />
            <DeletedPlayers players={deleted} />
        </>
    )
}

export default Resurrection;
