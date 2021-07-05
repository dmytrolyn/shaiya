import React, { useState } from 'react';
import { ContentSection, ContentSingleTitle } from '../../../Common/styled/components';
import { GiftsIcon } from '../../../Common/Icons/Icons';
import styles from '../../styles/styles.module.css';
import { Description, Sequence, SequenceLevel, SequenceStep, SpenderTabs, SpenderTab } from '../../../Spender/styled/components';
import Spender from '../../../Spender/Spender';

const TieredSpender = ({ spenders, getReward }) => {
    const [tabState, setTabState] = useState(0);

    return (
        <ContentSection>
            <ContentSingleTitle>{(spenders.data[tabState] && spenders.data[tabState].Title) || 'Spender'}</ContentSingleTitle>
            <Description>
                <Sequence>
                    <SequenceLevel>
                        <SequenceStep>1</SequenceStep>
                        <span>Spend Shaiya Points in the in-game mall as well as in web-site.</span>
                    </SequenceLevel>
                    <SequenceLevel>
                        <SequenceStep>2</SequenceStep>
                        <span>Collect the required amounts of spent SP and reach levels in spender</span>
                    </SequenceLevel>
                    <SequenceLevel>
                        <SequenceStep>3</SequenceStep>
                        <span>Gain your reward for unlocked levels of different spenders</span>
                    </SequenceLevel>
                </Sequence>
            </Description>
            <SpenderTabs>
                {spenders.data.map((s, index) => <SpenderTab key={index} onClick={() => setTabState(index)} active={tabState === index}><GiftsIcon className={styles.icon} />{s.Title}</SpenderTab>)}
            </SpenderTabs>

            <Spender spender={spenders.data[tabState]} loading={spenders.loading} error={spenders.error} getReward={getReward} />
        </ContentSection>
    )
}

export default TieredSpender;