import { ContentSingleTitle, ContentWrap, MessageBlock } from '../../components/Common/styled/components';
import DonateList from '../../components/DonateList/DonateList';
import { Link } from 'react-router-dom';

const Donate = ({ donate }) => {
    return (
            <ContentWrap>
                <ContentSingleTitle>Donate</ContentSingleTitle>
                <MessageBlock width={85}>We have <Link to={{ pathname: '/profile', state: 3 }}>Tiered Spender</Link> where you can get extra rewards for spending SP</MessageBlock>
                <DonateList donate={donate} />
            </ContentWrap>
    )
}

export default Donate;