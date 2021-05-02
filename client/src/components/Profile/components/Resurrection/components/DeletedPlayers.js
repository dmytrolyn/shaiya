import React from 'react';
import Table from '../../../../Common/Table/Table';
import { BlockSingleTitle, ContentSingleDesc, TableWrap, ContentSection } from '../../../../Common/styled/components';
import styles from '../../../styles/styles.module.css';

const DeletedPlayers = ({ players }) => {
    return (
        <ContentSection>
            <BlockSingleTitle>Deleted characters</BlockSingleTitle>
            <ContentSingleDesc>Resurrection price - <span className={styles.points}>200</span> SP</ContentSingleDesc>
            <TableWrap>
                <Table data={players.data} titles={players.titles} />
            </TableWrap>
        </ContentSection>
    )
}

export default DeletedPlayers;