import React, { Suspense, useEffect, useRef } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Line from '../Common/Line/Line';
import Loading from '../Common/Loading/Loading';
import styles from './styles/styles.module.css';
import usePrevious from '../../hooks/usePrevious';

import PageErrorBoundary from '../Error/PageErrorBoundary';
import Index from '../../pages/Index/IndexContainer';

const Ranks = React.lazy(() => import('../../pages/Ranks/RanksContainer'));
const Guilds = React.lazy(() => import('../../pages/Guilds/GuildsContainer'));
const Downloads = React.lazy(() => import('../../pages/Downloads/Downloads'));
const Bosses = React.lazy(() => import('../../pages/Bosses/BossesContainer'));
const Profile = React.lazy(() => import('../../pages/Profile/ProfileContainer'));
const DropList = React.lazy(() => import('../../pages/DropList/DropList'));
const News = React.lazy(() => import('../../pages/News/NewsContainer'));
const NewsItem = React.lazy(() => import('../../components/News/NewsItem'));
const Donate = React.lazy(() => import('../../pages/Donate/DonateContainer'));
const Shop = React.lazy(() => import('../../pages/Shop/ShopContainer'));

const Content = (props) => {
    const ref = useRef();
    const prevProps = usePrevious(props);

    const scrollToContent = () => {
        document.documentElement.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        if(prevProps && prevProps.location.pathname !== props.location.pathname) scrollToContent();
    }, [props.location, prevProps]);
    
    return (
        <div ref={ref} className={styles.contentWrap}>
            <Line />
            <PageErrorBoundary>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Suspense fallback={<Loading />}>
                        <Route path="/ranks" component={Ranks} />
                        <Route path="/guilds" component={Guilds} />
                        <Route path="/downloads" component={Downloads} />
                        <Route path="/bosses" component={Bosses} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/droplist" component={DropList} />
                        <Route path="/news/:id" component={NewsItem} />
                        <Route exact path="/news" component={News} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/shop" component={Shop} />
                    </Suspense>
                    <Route path="/" component={() => <div className={styles.notFound}>Page not found</div>} />
                </Switch>
            </PageErrorBoundary>
        </div>
    )
}

export default withRouter(Content);