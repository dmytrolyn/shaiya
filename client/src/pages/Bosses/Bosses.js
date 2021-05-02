import React from 'react';
import Table from '../../components/Common/Table/Table';
import { ContentWrap, ContentSingleTitle, TableWrap } from '../../components/Common/styled/components';

const Bosses = ({ bosses }) => {
    return (
        <ContentWrap>
            <ContentSingleTitle>Boss Timer</ContentSingleTitle>
            <TableWrap>
                <Table data={bosses.data} titles={bosses.titles} />
            </TableWrap>
        </ContentWrap>
    )
}

export default Bosses;