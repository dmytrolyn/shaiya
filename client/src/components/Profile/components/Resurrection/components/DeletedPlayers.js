import React from 'react';
import Table from '../../../../Common/Table/Table';
import { Link } from 'react-router-dom';
import { BlockSingleTitle, ContentSingleDesc, TableWrap, ContentSection, ContentMessageError } from '../../../../Common/styled/components';
import styles from '../../../styles/styles.module.css';
import cn from 'classnames';

const DeletedPlayers = ({ players, price, errors }) => {
    return (
        <ContentSection>
            <BlockSingleTitle>Deleted characters</BlockSingleTitle>
            <ContentSingleDesc>Resurrection price - <Link to="/donate" className={cn(styles.points, "c-pointer")}>{price}</Link> SP</ContentSingleDesc>
            {errors.map(msg => <ContentMessageError>{msg.error}</ContentMessageError>)}
            <TableWrap>
                <Table data={players.data} titles={players.titles} />
            </TableWrap>
        </ContentSection>
    )
}

export default DeletedPlayers;