import React from 'react';
import Table from '../../components/Common/Table/Table';
import { ContentWrap, ContentSingleTitle, TableWrap } from '../../components/Common/styled/components';

const Guilds = ({ guilds }) => {
    return (
        <ContentWrap>
            <ContentSingleTitle>Guilds</ContentSingleTitle>
            <TableWrap>   
                <Table data={guilds.data} titles={guilds.titles} hasIndex={true} />
            </TableWrap>
        </ContentWrap>
    )
}

export default Guilds;