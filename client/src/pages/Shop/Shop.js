import { useState, useEffect, useRef } from 'react';
import { ContentWrap, ContentMessageError, ContentMessageSuccess, ContentSideTitle, ContentOptions, ContentOption } from '../../components/Common/styled/components';
import { TabsWrap, Tabs, Tab, TabsGlider, BalanceLink } from '../../components/ShopList/styled/components';
import ShopList from '../../components/ShopList/ShopList';
import Pagination from '../../components/Common/Pagination/Pagination';
import usePagination from '../../hooks/usePagination';
import useFilter from '../../hooks/useFilter';

const category = (val, arg) => val === arg;

const Shop = ({ shop, sections, info, makePurchaseThunk }) => {
    const { items, loading, errors, messages } = shop;
    const ref = useRef();

    const [tabState, setTabState] = useState(0);
    const [cData, setCData] = useFilter(items, "Category", category);
    let [page, current, all, changePage] = usePagination(cData, 8);

    const isExpanded = cData.some(i => i.Image !== null);

    useEffect(() => {
        setCData([sections[tabState]]);
    }, [tabState, sections, setCData])

    useEffect(() => {
        document.documentElement.scrollTo({ top: ref.current.offsetTop + window.screen.height, behavior: 'smooth' })
    }, [messages.length])

    return (
        <ContentWrap>
            <ContentOptions>
                <ContentSideTitle>Item Mall</ContentSideTitle>
                <ContentOption>
                    <BalanceLink to="/donate">{info.Point}</BalanceLink>
                </ContentOption>
            </ContentOptions>
            <TabsWrap ref={ref}>
                <Tabs>
                    {sections.map((section, index) => <Tab key={section} onClick={() => setTabState(index)} active={tabState === index}>{section}</Tab>)}
                    <TabsGlider tabs={sections.length} active={tabState} />
                </Tabs>
            </TabsWrap>
            {messages.map(item => <ContentMessageSuccess>{item.message}</ContentMessageSuccess>)}
            {errors.map(item => <ContentMessageError>{item.message}</ContentMessageError>)}
            <ShopList makePurchase={(id) => makePurchaseThunk(id)} loading={loading} shop={isExpanded ? cData : page} isExpanded={isExpanded} />
            {!isExpanded && <Pagination all={all} current={current} setPage={changePage} />}
        </ContentWrap>
    )
}

export default Shop;