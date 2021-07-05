import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getShop, getInfo } from '../../services/reducers';
import { setShopItems, makePurchaseThunk, setProfileData } from '../../services/actions';
import * as API from '../../api/api';
import { compose } from 'redux';
import withoutAuthRedirect from '../../hocs/withoutAuthRedirect';
import Shop from './Shop';
import Loading from '../../components/Common/Loading/Loading';

const ShopContainer = ({ shop, info, setProfileData, setShopItems, ...props }) => {
    useEffect(() => {
        const getData = async () => {
            let items = await API.getShopItems();
            setShopItems(items);
        }
        if(!shop?.items) getData();
    }, [shop, setShopItems])

    useEffect(() => {
        const getData = async () => {
            let [userData, chars, rewards, spenders, roulette] = await Promise.all([API.getFullUserRequest(), API.getAllUserChars(), API.getRanksRewards(), API.getActiveSpenders(), API.getRouletteItems()]);
            setProfileData(userData, chars, rewards, spenders, roulette);
        }
        if(!info) getData();
    })

    return (
        (info && shop?.items) ? <Shop {...props} shop={shop} info={info} sections={shop.items.reduce((res, item) => res.every(cat => cat !== item.Category) ? [...res, item.Category] : res, [])} /> : <Loading />
    )
}

const mapStateToProps = (state) => ({
    shop: getShop(state),
    info: getInfo(state)
})

export default compose(withoutAuthRedirect, connect(mapStateToProps, { setShopItems, setProfileData, makePurchaseThunk }))(ShopContainer);