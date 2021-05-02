import React, { useState } from 'react';
import { RatesBlock } from '../styled/components';
import { BlockTitle, TableWrap } from '../../Common/styled/components';
import { ButtonBlueLink } from '../../Common/Buttons/Buttons';
import Table from '../../Common/Table/Table';
import styles from '../styles/styles.module.css';
import cn from 'classnames';

const PlayersRanks = ({ killers, guilds }) => {
    const [tabState, setTabState] = useState(1);
    const [tabData, setTabData] = useState(killers);

    return (
        <div className={styles.ratesBlockWrap}>
            <RatesBlock>
                <div className={styles.ratesBlockTitle}>
                    <BlockTitle>{tabState === 1 ? "Top killers" : "Top guilds"}</BlockTitle>
                    <div className={cn(styles.ratesBlockTabs, "c-pointer")}>
                        <span onClick={() => { setTabState(1); setTabData(killers) }} className={cn(styles.ratesBlockTab, tabState === 1 && styles.ratesBlockTabActive)}>Players</span>
                        <span onClick={() => { setTabState(2); setTabData(guilds) }} className={cn(styles.ratesBlockTab, tabState === 2 && styles.ratesBlockTabActive)}>Guilds</span>
                    </div>
                </div>
                <TableWrap>
                    <Table size="SMALL" hasIndex={true} data={tabData.data} titles={tabData.titles} />
                </TableWrap>
                <div className={styles.ratesBtnWrap}>
                    <ButtonBlueLink page={tabState === 1 ? "/ranks" : "/guilds"} text="View all" type="button" />
                </div>
            </RatesBlock>
        </div>
    )
}

export default PlayersRanks;