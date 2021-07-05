import { ContentSection, ContentSingleTitle, BlockSingleTitle, ContentMessageSuccess, ContentSingleDesc, TableWrap, ContentMessageError } from '../../../Common/styled/components';
import RouletteComponent from '../../../Roulette/Roulette';
import { Link } from 'react-router-dom';
import Table from '../../../Common/Table/Table';
import styles from '../../styles/styles.module.css';
import cn from 'classnames';

const Roulette = ({ roulette, hasMoney, getReward }) => {
    let { items, rewards, titles, price } = roulette.data;
    let { status, error, messages, loading } = roulette;

    return (
        <ContentSection>
            <ContentSingleTitle>Roulette</ContentSingleTitle>
            <ContentSingleDesc>Spin price - <Link to="/donate" className={cn("c-pointer", styles.points)}>{price} SP</Link></ContentSingleDesc>
            {messages.map(item => <ContentMessageSuccess>{item.message}</ContentMessageSuccess>)}
            {!hasMoney && <ContentMessageError>You don't have enough SP to spin</ContentMessageError>}
            {error && <ContentMessageError>{error}</ContentMessageError>}
            <RouletteComponent loading={loading} spin={getReward} items={items} config={status} />
            <BlockSingleTitle>Recent rewards</BlockSingleTitle>
            <TableWrap>
                <Table titles={titles} data={rewards} />
            </TableWrap>
        </ContentSection>
    )
}

export default Roulette;