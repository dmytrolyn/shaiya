import React from 'react';
import Table from '../../../Common/Table/Table';
import { ContentSection, ContentSingleTitle, TableWrap, ContentMessageError } from '../../../Common/styled/components';

const Rewards = ({ rewards }) => {
    let { data, titles, error } = rewards;
    return (
        <ContentSection>
            <ContentSingleTitle>PvP Rewards</ContentSingleTitle>
            {error && <ContentMessageError>{error}</ContentMessageError>}
            <TableWrap>
                <Table data={data} titles={titles} />
            </TableWrap>
        </ContentSection>
    )
}

export default Rewards;