import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Rates from '../../components/Rates/Rates';

const Index = ({ manageVideoModal, ...props }) => {
    return (
        <>
            <Rates {...props} />
            <Gallery openModal={manageVideoModal} />
        </>
    )
}

export default Index;