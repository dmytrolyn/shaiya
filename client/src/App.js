import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/FooterContainer';
import Scroll from './components/ScrollTop/ScrollTop';
import AuthModal from './components/AuthModal/AuthModal';
import VideoModal from './components/VideoModal/VideoModal';
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
        try {
          let [chars, guilds, on, news, me] = await Promise.allSettled([API.getPlayersCount(), API.getGuildsCount(), API.getOnline(), API.getNews(), API.getUserRequest()]).then(resp => resp.map(r => r.value));
          setOnline({ online: on, chars: chars.Count, guilds: guilds.Count });
          setNews(news);
          if(me) {
            login(me.data);
          }
        } catch(err) {
          
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
        <VideoModal />
      </>
  );
}

const mapStateToProps = (state) => ({
  online: getOnline(state),
  news: getTopNews(state)
})

export default connect(mapStateToProps, { setOnline, setNews, login })(App);
