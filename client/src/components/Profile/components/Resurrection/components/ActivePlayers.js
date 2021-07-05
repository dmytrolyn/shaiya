import React from 'react';
import Table from '../../../../Common/Table/Table';
import { BlockSingleTitle, ContentSingleDesc, TableWrap, ContentSection, ContentMessageError } from '../../../../Common/styled/components';

const ActivePlayers = ({ players, errors }) => {
    return (
        <ContentSection>
            <BlockSingleTitle>Active characters</BlockSingleTitle>
            {players.data.length === 5 && <ContentSingleDesc>You have no empty slots for resurrection</ContentSingleDesc>}
            {errors.map(msg => <ContentMessageError>{msg.error}</ContentMessageError>)}
            <TableWrap>
                <Table data={players.data} titles={players.titles} />
            </TableWrap>
        </ContentSection>
    )
}

export default ActivePlayers;