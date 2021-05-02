import React from 'react';
import { ContentWrap } from '../../components/Common/styled/components';
import Info from '../../components/Info/Info';
import { data } from './data';

const DropList = () => {
    return (
        <ContentWrap>
            <Info data={data} />
        </ContentWrap>
    )
}

export default DropList;