import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import reducer from './services/reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

Modal.setAppElement('#root');

const middleware = [ thunk ];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
