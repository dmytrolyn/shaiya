import { useEffect } from 'react';
import Donate from './Donate';
import Loading from '../../components/Common/Loading/Loading';
import { getDonateList } from '../../services/reducers';
import { setDonate } from '../../services/actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDonate } from '../../api/api';
import withoutAuthRedirect from '../../hocs/withoutAuthRedirect';
 
const DonateContainer = ({ donate, setDonate }) => {
    useEffect(() => {
        const getData = async () => {
            let donateList = await getDonate();
            setDonate(donateList);
        }
        if(!donate) getData();
    }, [donate, setDonate])

    return (
        donate ? <Donate donate={donate} /> : <Loading />
    )
}

const mapStateToProps = (state) => ({
    donate: getDonateList(state)
})

export default compose(withoutAuthRedirect, connect(mapStateToProps, { setDonate }))(DonateContainer);