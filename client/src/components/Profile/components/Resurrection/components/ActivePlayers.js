import React from 'react';
import Table from '../../../../Common/Table/Table';
import { BlockSingleTitle, ContentSingleDesc, TableWrap, ContentSection } from '../../../../Common/styled/components';
import styles from '../../../styles/styles.module.css';

const ActivePlayers = ({ players }) => {
    return (
        <ContentSection>
            <BlockSingleTitle>Active characters</BlockSingleTitle>
            <ContentSingleDesc>{players.data.length === 5 && "You have no empty slots for resurrection"}</ContentSingleDesc>
            <TableWrap>
                <Table data={players.data} titles={players.titles} />
            </TableWrap>
        </ContentSection>
    )
}

export default ActivePlayers;