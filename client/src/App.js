import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Scroll from './components/ScrollTop/ScrollTop';
import AuthModal from './components/AuthModal/AuthModal';
import AlertModal from './components/AlertModal/AlertModal';
import Loading from './components/Common/Loading/Loading';

import * as API from './api/api';
import { setOnline, login, setNews } from './services/actions';
import { connect } from 'react-redux';
import { getOnline, getTopNews } from './services/reducers';

import './styles/global.css';
import './styles/fonts.css';

function App({ online, news, setOnline, setNews, login }) {
  useEffect(() => {
      const getData = async () => {
          let [online, chars, guilds, news, me] = await Promise.allSettled([API.getOnline(), API.getPlayersCount(), API.getGuildsCount(), API.getNews(), API.getUserRequest()]).then(resp => resp.map(r => r.value));
          setOnline({ online: online.Count, chars: chars.Count, guilds: guilds.Count });
          setNews(news);
          if(me) {
            login(me.data);
          }
      }
      if(!online) {
        getData();
      }
  }, [online, setOnline, setNews, login])

  return (
    !online ? <Loading /> :
    <>
      <Header {...online} news={news}/>
      <Content />
      <Footer />
      <Scroll />
      <AuthModal />
      <AlertModal />
    </>
  );
}

const mapStateToProps = (state) => ({
  online: getOnline(state),
  news: getTopNews(state)
})

export default connect(mapStateToProps, { setOnline, setNews, login })(App);
