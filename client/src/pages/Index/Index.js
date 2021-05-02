import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Rates from '../../components/Rates/Rates';

const Index = (props) => {
    return (
        <>
            <Rates {...props} />
            <Gallery />
        </>
    )
}

export default Index;