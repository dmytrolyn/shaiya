import React from 'react';
import { RatesBlock } from '../../styled/components';
import { BlockTitle, TableWrap } from '../../../Common/styled/components';
import { ButtonBlueLink } from '../../../Common/Buttons/Buttons';
import styles from '../../styles/styles.module.css';
import Table from '../../../Common/Table/Table';

const BossTimer = ({ bosses }) => {
    return (
        bosses && <RatesBlock>
            <div className={styles.ratesBlockTitle}>
                <BlockTitle>Boss timer</BlockTitle>
            </div>
            <TableWrap>
                <Table size="SMALL" data={bosses.data} titles={bosses.titles} />
            </TableWrap>
            <div className={styles.ratesBtnWrap}>
                <ButtonBlueLink page="/bosses" text="View all" type="button" />
            </div>
        </RatesBlock>
    )
}

export default BossTimer;