import React from 'react';
import Table from '../../../Common/Table/Table';
import { ContentSection } from '../../../Common/styled/components';

const Rewards = ({ rewards }) => {
    return (
        <ContentSection>
            <Table data={rewards.data} titles={rewards.titles} />
        </ContentSection>
    )
}

export default Rewards;